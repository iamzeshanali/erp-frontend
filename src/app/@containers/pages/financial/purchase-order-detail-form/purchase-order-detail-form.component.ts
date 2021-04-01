import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-purchase-order-detail-form',
  templateUrl: './purchase-order-detail-form.component.html',
  styleUrls: ['./purchase-order-detail-form.component.scss']
})
export class PurchaseOrderDetailFormComponent implements OnInit {

  moduleName = "payment Terms";
  entityName = 'receipt';
  targent_prop = "";
  fetchedData: any;
  brandsData: any;
  productsData: any;
  invoiceNumber: any;
  receiptNumber:any;
  response: any;

  dummyDataForm: any[]=[];

  editRoute : boolean = false;
  isBlankActive = false;
  success:boolean=false;
  error:boolean=false;

  @Input() salesInvoiceNumber: any;
  @Input() editData: any;
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteSalesInvoice: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(){
    this.formData.patchValue({
      purchaseOrder: this.salesInvoiceNumber
    });
    this.formData.patchValue({
      product: this.editData?.product,
      brand: this.editData?.brand,
      dueDate: this.editData?.dueDate,
      quantity: this.editData?.quantity,
      price: this.editData?.unitPrice,
      total: this.editData?.total,
      discount: this.editData?.discount,
      discountType: this.editData?.discountType,
    });
  }
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router, private notificationService:NotificationsService)
  {
    
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
    this.ApiService.getAPI('brands').subscribe( data => {
      this.brandsData = data;
    });
    this.ApiService.getAPI('products').subscribe( data => {
      this.productsData = data;
    });
  }

  formData = new FormGroup({
    product:new FormControl('',Validators.required),
    brand: new FormControl('',Validators.required),
    dueDate: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    total: new FormControl('',Validators.required),
    discount: new FormControl('',Validators.required),
    discountType: new FormControl('',Validators.required),
    purchaseOrder:new FormControl(''),
  })
  onSubmit(){
    console.log(this.formData.value);
    if(this.formData.valid){
      this.formSubmitted.emit(this.formData.value);
      this.formData.patchValue({
        product: '',
        brand: '',
        dueDate: '',
        quantity: '',
        price: '',
        total: '',
        discount: '',
        discountType: '',
      });
      this.notificationService.success('Success', 'Purchase order Document Created.');
    } else{
      this.notificationService.error('Error', 'Incomplete Form.');
    } 
  }
  DeletePaymentTerm(){
    this.deleteSalesInvoice.emit(this.formData.get('product')?.value);
  }

}
