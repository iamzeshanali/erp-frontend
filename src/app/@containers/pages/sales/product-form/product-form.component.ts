import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  
  
  moduleName = "products";
  entityName = 'products';
  targent_prop = "";

  family:any;
  brands:any;
  taxClass:any;
  preferredVendor:any;
  uom:any;
  group:any;
  casePack:any;

  fetchedData: any;
  response: any;
  invoiceNumber: any;
  docNumber:any;
  STATUS:any [] = [
    {
     'name' : 'inUse'
    },
    {
      'name' : 'notInUse'
    },
    {
      'name' : 'inactive'
     }
  ];
  PRODUCT_TYPE:any [] = [
    {
     'name' : 'product'
    },
    {
      'name' : 'service'
    },
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
        console.log(data);
        
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
          description: termData.description,

          status: termData.status,
          type: termData.type,
          family: termData.family,
          brand: termData.brand,
          taxClassification: termData.taxClassification,
          preferredVendor: termData.preferredVendor,
          uom: termData.uom,
          group: termData.group,
          casepack: termData.casePack,


          salePrice: termData.salePrice,
          minSalePrice: termData.minSalePrice,
          purchasedPrice: termData.purchasedPrice,
          margin: termData.margin,
          onHand: termData.onHand,
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
    this.ApiService.getAPI('family').subscribe( data => {
      this.family = data;
    });
    this.ApiService.getAPI('brands').subscribe( data => {
      this.brands = data;
    });
    this.ApiService.getAPI('taxClass').subscribe( data => {
      this.taxClass = data;
    });
    this.ApiService.getAPI('preferredVendor').subscribe( data => {
      this.preferredVendor = data;
    });
    this.ApiService.getAPI('uom').subscribe( data => {
      this.uom = data;
    });
    this.ApiService.getAPI('group').subscribe( data => {
      this.group = data;
    });
    this.ApiService.getAPI('casePack').subscribe( data => {
      this.casePack = data;
    });
  }

  formData = new FormGroup({
    code: new FormControl(''),
    description: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),

    type: new FormControl('',Validators.required),
    family: new FormControl('',Validators.required),
    brand: new FormControl('',Validators.required),
    taxClassification: new FormControl('',Validators.required),
    preferredVendor: new FormControl('',Validators.required),
    uom: new FormControl('',Validators.required),
    group: new FormControl('',Validators.required),
    casepack: new FormControl('',Validators.required),


    salePrice: new FormControl('',Validators.required),
    minSalePrice: new FormControl('',Validators.required),
    purchasedPrice: new FormControl('',Validators.required),
    margin: new FormControl('',Validators.required),
    onHand: new FormControl('',Validators.required),
  });
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
              this.notificationService.success('Success', 'Product Updated.');
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
              this.notificationService.success('Success', 'Product Added.');
              this.formData.reset({
                description: '',
                status: '',

                type: '',
                family: '',
                brand: '',
                taxClassification: '',
                preferredVendor: '',
                uom: '',
                group: '',
                casepack: '',


                salePrice: '',
                minSalePrice: '',
                purchasedPrice: '',
                margin: '',
                onHand: '',
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
            this.router.navigate(['sales/products']);
          }
        });
      }
    });
  }


}
