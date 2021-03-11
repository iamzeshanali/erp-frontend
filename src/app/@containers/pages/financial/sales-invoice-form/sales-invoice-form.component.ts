import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
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
    customer: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl(''),
    invoiceNumber: new FormControl(''),

    paymentTerm: new FormControl(''),
    profitinPercentage: new FormControl(''),
    profitinDollars: new FormControl(''),

    total: new FormControl(''),
    discountinPercentage: new FormControl(''),
    discountinDollars: new FormControl(''),
    totalAfterDiscount: new FormControl(''),
    totalTax: new FormControl(''),
    finalPrice: new FormControl(''),

    shippingAddress: new FormControl(''),
    shippingAddress2: new FormControl(''),
    shippingState: new FormControl(''),
    shippingCity: new FormControl(''),
    shippingCountry: new FormControl(''),
    shippingZip: new FormControl(''),
    shippingCode: new FormControl(''),

    salesRepresentative: new FormControl(''),
    warehouse: new FormControl(''),

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
