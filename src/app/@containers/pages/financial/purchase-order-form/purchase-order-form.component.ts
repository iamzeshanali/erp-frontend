import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';

@Component({
  selector: 'app-purchase-order-form',
  templateUrl: './purchase-order-form.component.html',
  styleUrls: ['./purchase-order-form.component.scss']
})
export class PurchaseOrderFormComponent implements OnInit {

  isBlankActive = false;
  moduleName = "payment Terms";
  entityName = 'paymentTerms';
  targent_prop = "";

  paymentTermsData: any;
  vendorsData: any;
  purchaseInvoiceDetailData: any;
  purchaseInvoiceReceivingData: any;
  warehouseShipmentsData: any;
  

  editRoute : boolean = false;
  response: any;
  success:boolean=false;
  error:boolean=false;
  STATUS:any [] = [
    {
     'name' : 'draft'
    },
    {
      'name' : 'inProgress'
    }
    ,
    {
      'name' : 'allowReceive'
    }
    ,
    {
      'name' : 'cancel'
    }
  ]
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router) {
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
        this.formData.patchValue({
          code: termData?.code,
          status: termData?.Status,
          description: termData?.description,
        });
      });
    });
   }
  ngOnInit(): void {
    this.ApiService.getAPI('preferredVendor').subscribe( data => {
      this.vendorsData = data;
    });
    this.ApiService.getAPI('shipments').subscribe( data => {
      this.warehouseShipmentsData = data;
    });
    this.ApiService.getAPI('purchaseOrderDetail').subscribe( data => {
      this.purchaseInvoiceDetailData = data;
    });
    this.ApiService.getAPI('purchaseOrderReceiving').subscribe( data => {
      this.purchaseInvoiceReceivingData = data;
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
  
  formData = new FormGroup({
    vendor: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl(''),
    documentNumber: new FormControl(''),
    paymentTerm: new FormControl(''),

    total: new FormControl(''),
    discount: new FormControl(''),
    discountType: new FormControl(''),
    totalAfterDiscount: new FormControl(''),
    finalPrice: new FormControl(''),

    shippingAddress: new FormControl(''),
    shippingAddress2: new FormControl(''),
    shippingState: new FormControl(''),
    shippingCity: new FormControl(''),
    shippingCountry: new FormControl(''),
    shippingZip: new FormControl(''),
    shippingCode: new FormControl(''),
  });

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
  Delete(){
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
