import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.scss']
})
export class ReceiptFormComponent implements OnInit {

  
  isBlankActive = false;
  moduleName = "payment Terms";
  entityName = 'receipt';
  targent_prop = "";
  fetchedData: any;
  customersData: any;
  editRoute : boolean = false;
  response: any;
  success:boolean=false;
  error:boolean=false;

  invoiceNumber: any;
  receiptNumber:any;

  STATUS:any [] = [
    {
     'name' : 'draft'
    },
    {
      'name' : 'checking'
    },
    {
      'name' : 'finalized'
     },
     {
       'name' : 'cancel'
     }
  ]
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router, private notificationService:NotificationsService)
  {
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');

      this.ApiService.getAPI(this.entityName).subscribe( data => {
        if(data.hasOwnProperty('error')){
          this.invoiceNumber = 1;
          this.receiptNumber = "INV-"+this.invoiceNumber;
        }else{
          this.fetchedData = data;
          this.invoiceNumber = this.fetchedData.length+1;
          this.receiptNumber = "INV-"+this.invoiceNumber;
        }
        
      
        if(ROUTE_ID)
      {
        this.editRoute = true;
        /*EXTRACTING THE WHOLE DATA AND THEN FILTERING*/
        // @ts-ignore
        const termData = this.fetchedData.find(x => x.Number === ROUTE_ID);
       
        this.formData.patchValue({
          receiptNumber: termData.Number,
          customer: termData.Customer,
          status: termData.Status,
          date: termData.Date,
          cash: termData.Cash,
          totalReceived: termData.TotalReceived,
          amountDue: termData.AmountDue,
          balanceDue: termData.BalanceDue,
        });
      }else{
        this.formData.patchValue({
          receiptNumber: this.receiptNumber,
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
    this.ApiService.getAPI('customers').subscribe( data => {
      this.customersData = data;
    });
  }

  formData = new FormGroup({
    receiptNumber: new FormControl(''),
    customer: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    cash: new FormControl('',Validators.required),
    totalReceived: new FormControl('',Validators.required),
    amountDue: new FormControl('',Validators.required),
    balanceDue: new FormControl('',Validators.required),
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
              this.notificationService.success('Success', 'Sales Invoice Updated.');
            }else{
              this.notificationService.error('Error', 'Server Error Occur.');
            }
           });
        }else if(!ROUTE_ID){
          this.ApiService.storeAPI(JSON.stringify(this.formData.value), "receipt")
          .subscribe((res) => {
            if(res.hasOwnProperty('success')){
              this.success = true;
              this.notificationService.success('Success', 'Sales Invoice Added.');
              this.formData.reset({
                receiptNumber: '',
                customer: '',
                status: '',
                date: '',
                cash: '',
                totalReceived: '',
                amountDue: '',
                balanceDue: '',
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
            this.router.navigate(['financial/receipt/']);
          }
        });
      }
    });
  }


}
