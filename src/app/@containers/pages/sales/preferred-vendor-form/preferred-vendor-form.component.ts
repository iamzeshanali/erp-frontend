import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-preferred-vendor-form',
  templateUrl: './preferred-vendor-form.component.html',
  styleUrls: ['./preferred-vendor-form.component.scss']
})
export class PreferredVendorFormComponent implements OnInit {

  moduleName = "preferredVendor";
  entityName = 'preferredVendor';
  targent_prop = "";

  paymentTerms:any;
  salesRepresentative:any;
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
          this.docNumber = "PV-"+1;
        }else{
          this.fetchedData = data;
          this.invoiceNumber = this.fetchedData.length+1;
          this.docNumber = "PV-"+this.invoiceNumber;
        }
        
      
        if(ROUTE_ID)
      {
        this.editRoute = true;
        /*EXTRACTING THE WHOLE DATA AND THEN FILTERING*/
        // @ts-ignore
        const termData = this.fetchedData.find(x => x.number === ROUTE_ID);
       
        console.log(termData.status);
        this.formData.patchValue({
                number: termData.number,
                name: termData.name,
                status: termData.status,
                phone: termData.phone,
                email: termData.email,
                address1: termData.address,
                address2: termData.address2,
                state: termData.state,
                city: termData.city,
                zip: termData.zip,
                country: termData.country,
                website: termData.website,
                paymentTerms: termData.paymentTerms,
                licenceNumber: termData.licenceNumber,
        });
      }else{
        this.formData.patchValue({
          number: this.docNumber,
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
    this.ApiService.getAPI('paymentTerms').subscribe( data => {
      this.paymentTerms = data;
    });
  }

  formData = new FormGroup({
    number: new FormControl(''),
    name: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address1: new FormControl('',Validators.required),
    address2: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    zip: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    website: new FormControl('',Validators.required),
    paymentTerms: new FormControl('',Validators.required),
    licenceNumber: new FormControl('',Validators.required),
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
              this.notificationService.success('Success', 'Preferred vendor Updated.');
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
              this.notificationService.success('Success', 'Preferred vendor Added.');
              this.formData.reset({
                name: '',
                status: '',
                phone: '',
                email: '',
                address1: '',
                address2: '',
                state: '',
                city: '',
                zip: '',
                country: '',
                website: '',
                paymentTerms: '',
                licenceNumber: '',
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
            this.router.navigate(['sales/preferredVendor']);
          }
        });
      }
    });
  }

}
