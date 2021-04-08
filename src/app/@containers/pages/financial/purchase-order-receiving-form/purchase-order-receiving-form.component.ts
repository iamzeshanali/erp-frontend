import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-purchase-order-receiving-form',
  templateUrl: './purchase-order-receiving-form.component.html',
  styleUrls: ['./purchase-order-receiving-form.component.scss']
})
export class PurchaseOrderReceivingFormComponent implements OnInit {

  moduleName = "payment Terms";
  entityName = 'receipt';
  targent_prop = "";
  fetchedData: any;
  brandsData: any;
  productsData: any;
  invoiceNumber: any;
  receiptNumber:any;
  response: any;
  nextID:any;

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
    
    if(this.editData != null){
      this.formData.patchValue({
        id: this.editData?.id,
        product: this.editData?.product,
        brand: this.editData?.brand,
        dueDate: this.editData?.dueDate,
        quantity: this.editData?.quantity,
        total: this.editData?.total,
        discount: this.editData?.discount,
        discountType: this.editData?.discountType,
        purchaseOrder: this.editData?.purchaseOrder
      });
    }else{
      this.formData.patchValue({
        id: this.nextID,
        product: '',
        brand: '',
        dueDate: '',
        quantity: '',
        total: '',
        discount: '',
        discountType: '',
        purchaseOrder: this.salesInvoiceNumber
      });
    }
    
  }
  constructor(private ApiService:ApiService, private route: ActivatedRoute, private router: Router, private notificationService:NotificationsService)
  {
    this.ApiService.getAPI('purchaseOrderReceiving').subscribe(data => {
      this.fetchedData = data;
       this.nextID = this.fetchedData[this.fetchedData.length-1].id+1;
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
    this.ApiService.getAPI('brands').subscribe( data => {
      this.brandsData = data;
    });
    this.ApiService.getAPI('products').subscribe( data => {
      this.productsData = data;
    });
  }

  formData = new FormGroup({
    id:new FormControl(''),
    product:new FormControl('',Validators.required),
    brand: new FormControl('',Validators.required),
    dueDate: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
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
    this.deleteSalesInvoice.emit(this.formData.get('id')?.value);
  }

}
