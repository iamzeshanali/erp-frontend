import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-uom-form',
  templateUrl: './uom-form.component.html',
  styleUrls: ['./uom-form.component.scss']
})
export class UomFormComponent implements OnInit {
 
  moduleName = "UOM";
  entityName = 'uom';
  targent_prop = "";

  fetchedData: any;
  response: any;
  invoiceNumber: any;
  docNumber:any;
  STATUS:any [] = [
    {
     'name' : 'active'
    },
    {
      'name' : 'inactive'
    }
  ];
  UNITS:any [] = [
    {
     'name' : 'oz'
    },
    {
      'name' : 'ml'
    },
    {
      'name' : 'pints'
     },
     {
       'name' : 'quars'
     },
     {
      'name' : 'liter'
     },
     {
       'name' : 'gallon'
     }
  ];

  editRoute : boolean = false;
  success:boolean=false;
  error:boolean=false;
  isBlankActive = false;
  

  
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router, private notificationService:NotificationsService)
  {
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');

      this.ApiService.getAPI(this.entityName).subscribe( data => {
        if(data.hasOwnProperty('error')){
          this.docNumber = "UOM-"+1;
        }else{
          this.fetchedData = data;
          this.invoiceNumber = this.fetchedData.length+1;
          this.docNumber = "UOM-"+this.invoiceNumber;
        }
        
      
        if(ROUTE_ID)
      {
        this.editRoute = true;
        /*EXTRACTING THE WHOLE DATA AND THEN FILTERING*/
        // @ts-ignore
        const termData = this.fetchedData.find(x => x.code === ROUTE_ID);
       
        console.log(termData.status);
        this.formData.patchValue({
          code: termData.code,
          status: termData.status,
          quantity: termData.quantity,
          unit: termData.unit,
        });
      }else{
        this.formData.patchValue({
          code: this.docNumber,
         });
      }
        
      });
      /*CALLING TO API OF SHOW-METHOD BY ID {PaymentTerm::code}*/

      // this.ApiService.showAPI(ROUTE_ID,'receipt').subscribe(data => {
      //   this.fetchedData = data;

      //   this.formData.patchValue({
      //     receiptNumber: this.fetchedData[0].Number,
      //     customer: this.fetchedData[0].Customer,
      //     status: this.fetchedData[0].Status,
      //     date: this.fetchedData[0].Date,
      //     cash: this.fetchedData[0].Cash,
      //     totalReceived: this.fetchedData[0].TotalReceived,
      //     amountDue: this.fetchedData[0].AmountDue,
      //     balanceDue: this.fetchedData[0].BalanceDue,
      //   })
      // });

      

    });
  }

  setBlankActive(){
    if(this.isBlankActive){
      this.isBlankActive = false;
      this.targent_prop = "";
    }else{
      this.isBlankActive = true;
      this.targent_prop = "_blank";
    }
  }
  ngOnInit(): void {
   
  }

  formData = new FormGroup({
    code: new FormControl(''),
    status: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    unit: new FormControl('',Validators.required),
  })
  onSubmit(){
    console.log(this.formData.value);
    if(this.formData.valid){
      this.route.paramMap.subscribe( params => {
        const ROUTE_ID = params.get('id');
        if (ROUTE_ID) {
           this.ApiService.editAPI(JSON.stringify(this.formData.value), ROUTE_ID, this.entityName)
           .subscribe((res) => {
            if(res.hasOwnProperty('success')){
              this.success = true;
              this.notificationService.success('Success', 'Case Pack Updated.');
            }else{
              this.notificationService.error('Error', 'Server Error Occur.');
            }
           });
        }else if(!ROUTE_ID){
          this.ApiService.storeAPI(JSON.stringify(this.formData.value),this.entityName)
          .subscribe((res) => {
            console.log(res);
            if(res.hasOwnProperty('success')){
              this.success = true;
              this.notificationService.success('Success', 'Case Pack Added.');
              this.formData.reset({
                code: '',
                quantity: '',
                status: '',
                unit: '',
              });
            }else{
              this.notificationService.error('Error', 'Server Error Occur.');
            }
          });
          
        }
      });
    } else{
      this.notificationService.error('Error', 'Incomplete Form.');
    } 
  }
  DeletePaymentTerm(){
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if (ROUTE_ID) {
        this.ApiService.deleteAPI(ROUTE_ID, this.entityName)
        .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.router.navigate(['inventory/uom/']);
          }
        });
      }
    });
  }

}
