import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent implements OnInit {

  
  moduleName = "customers";
  entityName = 'customers';
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
    },
    {
      'name' : 'potential'
     },
     {
       'name' : 'restricted'
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
          this.docNumber = "CN-"+1;
        }else{
          this.fetchedData = data;
          this.invoiceNumber = this.fetchedData.length+1;
          this.docNumber = "CN-"+this.invoiceNumber;
        }
        
      
        if(ROUTE_ID)
      {
        this.editRoute = true;
        /*EXTRACTING THE WHOLE DATA AND THEN FILTERING*/
        // @ts-ignore
        const termData = this.fetchedData.find(x => x.customerNumber === ROUTE_ID);
       
        console.log(termData.status);
        this.formData.patchValue({
          customerNumber: termData.customerNumber,
          customerName: termData.customerName,
          status: termData.status,

          city: termData.city,
          country: termData.country,
          phone: termData.phone,
          addressLine1: termData.addressLine1,
          addressLine2: termData.addressLine2,
          state: termData.state,
          email: termData.email,
          zip: termData.zip,


          shippingAddressLine1: termData.shippingAddressLine1,
          shippingAddressLine2: termData.shippingAddressLine2,
          shippingState: termData.shippingState,
          shippingZip: termData.shippingZip,
          shippingCity: termData.shippingCity,
          shippingCountry: termData.shippingCountry,
          isShippingSame: termData.isShippingSame,

          bevLicenseNumber: termData.bevLicenseNumber,
          paymentTerms: termData.paymentTerms,
          numberOfPallets: termData.numberOfPallets,
          salesRepresentative: termData.salesRepresentative,
        });
      }else{
        this.formData.patchValue({
          customerNumber: this.docNumber,
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
    this.ApiService.getAPI('salesRepresentative').subscribe( data => {
      this.salesRepresentative = data;
    });
  }

  formData = new FormGroup({
    customerNumber: new FormControl(''),
    customerName: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),

    city: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    addressLine1: new FormControl('',Validators.required),
    addressLine2: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    zip: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),


    shippingAddressLine1: new FormControl('',Validators.required),
    shippingAddressLine2: new FormControl('',Validators.required),
    shippingState: new FormControl('',Validators.required),
    shippingZip: new FormControl('',Validators.required),
    shippingCity: new FormControl('',Validators.required),
    shippingCountry: new FormControl('',Validators.required),
    isShippingSame: new FormControl('',Validators.required),

    bevLicenseNumber: new FormControl('',Validators.required),
    paymentTerms: new FormControl('',Validators.required),
    numberOfPallets: new FormControl('',Validators.required),
    salesRepresentative: new FormControl('',Validators.required),
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
              this.notificationService.success('Success', 'Customer Updated.');
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
              this.notificationService.success('Success', 'Customer Added.');
              this.formData.reset({
                customerName: '',
                status: '',

                city: '',
                country: '',
                phone: '',
                addressLine1: '',
                addressLine2: '',
                state: '',
                zip: '',
                email: '',


                shippingAddressLine1: '',
                shippingAddressLine2: '',
                shippingState: '',
                shippingZip: '',
                shippingCity: '',
                shippingCountry: '',
                isShippingSame: '',

                bevLicenseNumber: '',
                paymentTerms: '',
                numberOfPallets: '',
                salesRepresentative: '',
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
            this.router.navigate(['sales/customers']);
          }
        });
      }
    });
  }

}
