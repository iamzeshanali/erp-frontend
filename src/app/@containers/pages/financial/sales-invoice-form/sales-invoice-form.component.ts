import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-sales-invoice-form',
  templateUrl: './sales-invoice-form.component.html',
  styleUrls: ['./sales-invoice-form.component.scss']
})
export class SalesInvoiceFormComponent implements OnInit {

  isBlankActive = false;
  entityName = 'salesInvoiceForm';
  targent_prop = "";
  moduleName:any ="salesInvoiceForm"
  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;

  paymentTermsData: any;
  customersData: any;
  salesRepresentativeData: any;
  warehouseShipmentsData: any;
  shipmentData: any;
  warehousesData: any;
  

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
      'name' : 'posted'
    }
    ,
    {
      'name' : 'cancel'
    }
  ]


  @ViewChild(DtableComponent) parentPaginator!: DtableComponent;
  @ViewChild(DtableComponent) parentSort!: DtableComponent;

  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router,private notificationService: NotificationsService) {
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

    this.tableData = new MatTableDataSource<object>();
    this.ApiService.getAPI('salesInvoiceDetail').subscribe( data =>
    {
      this.dataSource = data;
      this.testData = data;

      this.tableColumns = Object.keys(this.dataSource[0]);
      
      this.tableData = new MatTableDataSource<object>(this.dataSource);
      this.tableData.paginator =  this.parentPaginator.paginator;
      this.tableData.sort =  this.parentSort.sort;

    });

   }
  ngOnInit(): void {
    this.ApiService.getAPI('paymentTerms').subscribe( data => {
      this.paymentTermsData = data;
    });
    this.ApiService.getAPI('customers').subscribe( data => {
      this.customersData = data;
    });
    this.ApiService.getAPI('shipments').subscribe( data => {
      this.warehouseShipmentsData = data;
    });
    this.ApiService.getAPI('salesRepresentative').subscribe( data => {
      this.salesRepresentativeData = data;
    });
    this.ApiService.getAPI('warehouse').subscribe( data => {
      this.warehousesData = data;
    });
  }

   setBlankActive()
   {
    if(this.isBlankActive){
      this.isBlankActive = false;
      this.targent_prop = "";
    }else{
      this.isBlankActive = true;
      this.targent_prop = "_blank";
    }
  }
  
  formData = new FormGroup
  ({
    customer: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    invoiceNumber: new FormControl('', Validators.required),

    paymentTerm: new FormControl('', Validators.required),
    profitinPercentage: new FormControl('', Validators.required),
    profitinDollars: new FormControl('', Validators.required),

    total: new FormControl('', Validators.required),
    discountinPercentage: new FormControl('', Validators.required),
    discountinDollars: new FormControl('', Validators.required),
    totalAfterDiscount: new FormControl('', Validators.required),
    totalTax: new FormControl('', Validators.required),
    finalPrice: new FormControl('', Validators.required),

    shippingAddress: new FormControl('', Validators.required),
    shippingAddress2: new FormControl('', Validators.required),
    shippingState: new FormControl('', Validators.required),
    shippingCity: new FormControl('', Validators.required),
    shippingCountry: new FormControl('', Validators.required),
    shippingZip: new FormControl('', Validators.required),
    shippingCode: new FormControl('', Validators.required),

    salesRepresentative: new FormControl('', Validators.required),
    warehouse: new FormControl('', Validators.required),

  });

  onSubmit()
  {
   
   if(this.formData.valid)
   {
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if (ROUTE_ID) {
        
         this.ApiService.editAPI(JSON.stringify(this.formData.value), ROUTE_ID, this.entityName)
         .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.notificationService.success('Success', 'Sales Invoice Updated.');
            this.router.navigate(['financial/paymentTerms/']);
          }else{
            this.notificationService.error('Error', 'Server Error Occur.');
          }
         });
      }else if(!ROUTE_ID){
        console.error(this.formData.value);
        this.ApiService.storeAPI(JSON.stringify(this.formData.value), this.entityName)
        .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.notificationService.success('Success', 'Sales Invoice Added.');
            this.formData.reset({
              customer: '',
              status: '',
              date: '',
              invoiceNumber: '',

              paymentTerm: '',
              profitinPercentage: '',
              profitinDollars: '',

              total: '',
              discountinPercentage: '',
              discountinDollars: '',
              totalAfterDiscount: '',
              totalTax: '',
              finalPrice: '',

              shippingAddress: '',
              shippingAddress2: '',
              shippingState: '',
              shippingCity: '',
              shippingCountry: '',
              shippingZip: '',
              shippingCode: '',

              salesRepresentative: '',
              warehouse: ''
            });
          }else{
            this.notificationService.error('Error', 'Server Error Occured.');
          }
        });
        
      }
    });
    
   }else if(this.formData.invalid)
   {
    this.notificationService.error('Error', 'You should review Sales Invoice.');
   }
   
    
    
  }

  Delete()
  {
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
