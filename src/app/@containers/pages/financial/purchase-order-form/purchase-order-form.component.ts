import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-purchase-order-form',
  templateUrl: './purchase-order-form.component.html',
  styleUrls: ['./purchase-order-form.component.scss']
})
export class PurchaseOrderFormComponent implements OnInit {

  isBlankActive = false;
  moduleName = "purchaseOrderForm";
  entityName = 'purchaseOrder';
  targent_prop = "";

  paymentTermsData: any;
  vendorsData: any;
  purchaseInvoiceDetailData: any;
  purchaseInvoiceReceivingData: any;
  warehouseShipmentsData: any;
  editData:any;
  docNumber:any;
  newTab:any = 0;
  tableData: any;
  invoiceNumber: any;
  tableColumns: any[] = [];
  detailFormData: any[] = [];
  fetchedData: any;
  fetchedDataDetail: any[]=[];
  salesInvoiceDetailFormData: any[] = [];

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
  ];

  @ViewChild(DtableComponent) parentPaginator!: DtableComponent;
  @ViewChild(DtableComponent) parentSort!: DtableComponent;

  parentEventHandlerFunction(valueEmitted: any){
    
    if(valueEmitted == 1){
      this.newTab = 1;
    }else if(valueEmitted != 1){
      this.editData = this.detailFormData.find(x=> x.product == valueEmitted);
      this.newTab = 1;
    }
    else{
      this.newTab = 0;
    }
  }
  pushToArray(valueEmitted: any){
    this.detailFormData.push(valueEmitted);
    this.newTab = 0;

        this.tableColumns = Object.keys(this.detailFormData[0]);
        this.tableData = new MatTableDataSource<object>(this.detailFormData);

        this.tableData.paginator =  this.parentPaginator.paginator;
        this.tableData.sort =  this.parentSort.sort;
  }
  deleteFromArray(valueEmitted:any)
  {
    var index;
    index = this.detailFormData.findIndex(x=> x.product == valueEmitted);
    this.detailFormData = this.detailFormData.splice(index,1);
    this.detailFormData.forEach((item, index) => {
      if(item == valueEmitted){
        this.detailFormData.splice(index,1);
      }
    });
    this.newTab = 0;
  }
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router, private notificationService: NotificationsService) {
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      this.ApiService.getAPI(this.entityName).subscribe( data => {
    
        if(data.hasOwnProperty('error')){
          
          this.docNumber = "PO-"+1;
        }else{
          this.fetchedData = data;
          this.invoiceNumber = this.fetchedData[this.fetchedData.length-1].id + 1;
          this.docNumber = "PO-"+this.invoiceNumber;
        }

        if(ROUTE_ID)
        {
          this.editRoute = true;
  
          const termData = this.fetchedData.find((x: { invoiceNumber: string; }) => x.invoiceNumber === ROUTE_ID);
       
          this.formData.patchValue({
            vendor: termData?.vendor,
            status: termData?.status,
            date: termData?.date,
            documentNumber: termData?.documentNumber,
            invoiceNumber: termData?.invoiceNumber,

            paymentTerm: termData?.paymentTerm,
            total: termData?.total,
            discount: termData?.discount,
            discountType: termData?.discountType,
            totalAfterDiscount: termData?.totalAfterDiscount,
            finalPrice: termData?.finalPrice,

            shippingAddress: termData?.shippingAddress,
            shippingAddress2: termData?.shippingAddress2,
            shippingState: termData?.shippingState,
            shippingCity: termData?.shippingCity,
            shippingCountry: termData?.shippingCountry,
            shippingZip: termData?.shippingZip,
            shippingCode: termData?.shippingCode,         
          });
          
          this.ApiService.getAPI('purchaseOrderDetail').subscribe(data => {
            this.fetchedData = data;
            if(this.fetchedData.length>0){

              for (let index = 0; index < this.fetchedData.length; index++) {
                if(this.fetchedData[index].salesInvoice == termData?.invoiceNumber){
                  this.fetchedDataDetail.push(this.fetchedData[index]);
                  this.salesInvoiceDetailFormData.push(this.fetchedData[index]);
                }
              }
              if(this.fetchedDataDetail.length > 0){
                this.tableColumns = Object.keys(this.fetchedDataDetail[0]);
                this.tableData = new MatTableDataSource<object>(this.fetchedDataDetail);
    
                this.tableData.paginator =  this.parentPaginator.paginator;
                this.tableData.sort =  this.parentSort.sort;
              }else{
                this.tableData = 0;
              }
              
            }else{
              this.tableData = 0;
            }
            
          });
        }else{
          this.formData.patchValue({
            invoiceNumber: this.docNumber,
           });
        }
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
    this.ApiService.getAPI('paymentTerms').subscribe( data => {
      this.paymentTermsData = data;
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
    invoiceNumber: new FormControl(''),

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

    purchaseOrderDetail: new FormControl(''),
  });

  onSubmit(){
    this.formData.patchValue({
      purchaseOrderDetail: this.detailFormData,
     });
     console.log(JSON.stringify(this.formData.value));
   if(this.formData.valid)
   {
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      if (ROUTE_ID) {
        
         this.ApiService.editAPI(JSON.stringify(this.formData.value), ROUTE_ID, this.entityName)
         .subscribe((res) => {
           console.log(res);
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.notificationService.success('Success', 'Purchase Order Updated.');
          }else{
            this.notificationService.error('Error', 'Server Error Occur.');
          }
         });
      }else if(!ROUTE_ID){
        console.log(this.formData.value);
        this.ApiService.storeAPI(JSON.stringify(this.formData.value), this.entityName)
        .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.notificationService.success('Success', 'Purchase Order Added.');
            this.formData.reset({
              vendor:'',
              status: '',
              date: '',
              documentNumber: '',
              invoiceNumber: '',

              paymentTerm: '',
              total: '',
              discount: '',
              discountType: '',
              totalAfterDiscount: '',
              finalPrice: '',

              shippingAddress: '',
              shippingAddress2: '',
              shippingState: '',
              shippingCity: '',
              shippingCountry: '',
              shippingZip: '',
              shippingCode: '',  
            });
          }else{
            this.notificationService.error('Error', 'Server Error Occured.');
          }
        });
        
      }
    });
    
  }
  else if(this.formData.invalid)
   {
    this.notificationService.error('Error', 'You should review Sales Invoice.');
   }
}
  Delete(){
    this.route.paramMap.subscribe( params => {
      const ROUTE_ID = params.get('id');
      
      if (ROUTE_ID) {
        this.ApiService.deleteAPI(ROUTE_ID, this.entityName)
        .subscribe((res) => {
          if(res.hasOwnProperty('success')){
            this.success = true;
            this.router.navigate(['financial/purchaseOrder/']);
          }
        });
      }
    });
  }

}
