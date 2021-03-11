import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.scss']
})
export class ReceiptFormComponent implements OnInit {

  
  isBlankActive = false;
  moduleName = "payment Terms";
  entityName = 'paymentTerms';
  targent_prop = "";
  paymentTermsData: any;
  customersData: any;
  editRoute : boolean = false;
  response: any;
  success:boolean=false;
  error:boolean=false;
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
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router)
  {
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if(ROUTE_ID)
      {
        this.editRoute = true;
      }
      /*CALLING TO API OF SHOW-METHOD BY ID {PaymentTerm::code}*/

      // this.ApiService.showPaymentTerms(ROUTE_ID).subscribe(data => {
      //   this.paymentTermsData = data;
      //   console.log(this.paymentTermsData);

      //   this.formData.patchValue({
      //     code: this.paymentTermsData.code,
      //     status: this.paymentTermsData.status,
      //     description: this.paymentTermsData.description,
      //   })
      // });

      /*EXTRACTING THE WHOLE DATA AND THEN FILTERING*/
      this.ApiService.getAPI(this.entityName).subscribe( data => {
        this.paymentTermsData = data;
        // @ts-ignore
        const termData = this.paymentTermsData.find(x => x.code === ROUTE_ID);
        this.formData.get('status')!.setValue(termData.status);
        this.formData.patchValue({
          code: termData.code,
          status: termData.Status,
          description: termData.description,
        })
        
      })

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
    customer: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl(''),
    cash: new FormControl(''),
    totalReceived: new FormControl(''),
    amountDue: new FormControl(''),
    balanceDue: new FormControl(''),
  })
  onSubmit(){
    console.log(this.formData.value);
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if (ROUTE_ID) {
        console.log()
         this.ApiService.editAPI(JSON.stringify(this.formData.value), ROUTE_ID, this.entityName)
         .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.router.navigate(['financial/paymentTerms/']);
          }
         });
      }else if(!ROUTE_ID){
        this.ApiService.storeAPI(JSON.stringify(this.formData.value), this.entityName)
        .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.formData.reset({
              code: '',
              status: '',
              description: '',
            });
          }
        });
        
      }
    });
    
  }
  DeletePaymentTerm(){
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      
      if (ROUTE_ID) {
        this.ApiService.deleteAPI(ROUTE_ID, this.entityName)
        .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.router.navigate(['financial/paymentTerms/']);
          }
        });
      }
    });
  }


}
