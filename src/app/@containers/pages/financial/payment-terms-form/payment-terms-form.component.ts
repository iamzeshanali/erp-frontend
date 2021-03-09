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
  moduleName = "Payment Terms";
  targent_prop = "";
  paymentTermsData: any;
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
      if(ROUTE_ID)
      {
        this.editRoute = true;
      }
      /*CALLING TO API OF SHOW-METHOD BY ID {PaymentTerm::code}*/

      /*this.ApiService.showPaymentTerms(ROUTE_ID).subscribe(data => {
        this.paymentTermsData = data;
        console.log(this.paymentTermsData);
        // @ts-ignore
        const termData = this.paymentTermsData.find(x => x.code === ROUTE_ID);
        this.formData.patchValue({
          code: termData.code,
          status: termData.status,
          description: termData.description,
        })
      })*/

      /*EXTRACTING THE WHOLE DATA AND THEN FILTERING*/
      this.ApiService.getPaymentTermsFromAPI().subscribe( data => {
        this.paymentTermsData = data;
        // @ts-ignore
        const termData = this.paymentTermsData.find(x => x.code === ROUTE_ID);
        this.formData.patchValue({
          code: termData.code,
          status: termData.status,
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
  }
  formData = new FormGroup({
    code: new FormControl(''),
    status: new FormControl(''),
    description: new FormControl('')
  })
  onSubmit(){
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if (ROUTE_ID) {
         this.ApiService.editPaymentTerms(JSON.stringify(this.formData.value), ROUTE_ID)
         .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.router.navigate(['financial/paymentTerms/']);
          }
         });
      }else if(!ROUTE_ID){
        this.ApiService.storePaymentTermsFromAPI(JSON.stringify(this.formData.value));
      }
    });
    
  }
  DeletePaymentTerm(){
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if (ROUTE_ID) {
        this.ApiService.deletePaymentTerms(ROUTE_ID);
      }
    });
  }

}
