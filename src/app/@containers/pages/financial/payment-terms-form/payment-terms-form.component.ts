import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-payment-terms-form',
  templateUrl: './payment-terms-form.component.html',
  styleUrls: ['./payment-terms-form.component.scss']
})
export class PaymentTermsFormComponent implements OnInit {

  isBlankActive = false;
  moduleName = "payment Terms";
  entityName = 'paymentTerms';
  targent_prop = "";
  paymentTermsData: any;
  invoiceNumber: any;
  docNumber:any;
  fetchedData: any;
  editRoute : boolean = false;
  response: any;
  success:boolean=false;
  error:boolean=false;
  STATUS:any [] = [
    {
     'name' : 'active'
    },
    {
      'name' : 'inactive'
    }
  ]
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router)
  {

    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');

      this.ApiService.getAPI(this.entityName).subscribe( data => {
        if(data.hasOwnProperty('error')){
          this.docNumber = "PT-"+1;
        }else{
          this.fetchedData = data;
          this.invoiceNumber = this.fetchedData.length+1;
          this.docNumber = "PT-"+this.invoiceNumber;
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
          description: termData.description,
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
    status: new FormControl(''),
    description: new FormControl('')
  })
  onSubmit(){
    console.log(this.formData.value);
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if (ROUTE_ID) {
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
