import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {BrandsComponent} from "@containers/pages/sales/brands/brands.component";
import {DynamicModule} from "@components/dynamic/dynamic.module";
import {CustomersComponent} from "@containers/pages/sales/customers/customers.component";
import {PreferredVendorComponent} from "@containers/pages/sales/preferred-vendor/preferred-vendor.component";
import {ProductComponent} from "@containers/pages/sales/product/product.component";
import {SalesRepresentativeComponent} from "@containers/pages/sales/sales-representative/sales-representative.component";
import { PaymentTermsComponent } from './financial/payment-terms/payment-terms.component';
import { PurchaseOrderComponent } from './financial/purchase-order/purchase-order.component';
import { PurchaseOrderDetailComponent } from './financial/purchase-order-detail/purchase-order-detail.component';
import { PurchaseOrderReceivingComponent } from './financial/purchase-order-receiving/purchase-order-receiving.component';
import { ReceiptComponent } from './financial/receipt/receipt.component';
import { SalesInvoiceComponent } from './financial/sales-invoice/sales-invoice.component';
import { SalesInvoiceDetailComponent } from './financial/sales-invoice-detail/sales-invoice-detail.component';
import { TaxClassComponent } from './financial/tax-class/tax-class.component';
import { CasePackComponent } from './inventory/case-pack/case-pack.component';
import { FamilyComponent } from './inventory/family/family.component';
import { GroupComponent } from './inventory/group/group.component';
import { UomComponent } from './inventory/uom/uom.component';
import { ShipmentsComponent } from './warehouse/shipments/shipments.component';
import { WarehouseComponent } from './warehouse/warehouse/warehouse.component';
import { PaymentTermsFormComponent } from './financial/payment-terms-form/payment-terms-form.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule } from '@angular/material/tooltip';
import { PurchaseOrderFormComponent } from './financial/purchase-order-form/purchase-order-form.component';
import { PurchaseOrderReceivingFormComponent } from './financial/purchase-order-receiving-form/purchase-order-receiving-form.component';
import { ReceiptFormComponent } from './financial/receipt-form/receipt-form.component';
import { SalesInvoiceFormComponent } from './financial/sales-invoice-form/sales-invoice-form.component';
import { SalesInvoiceDetailFormComponent } from './financial/sales-invoice-detail-form/sales-invoice-detail-form.component';
import { TaxClassFormComponent } from './financial/tax-class-form/tax-class-form.component';
import { PurchaseOrderDetailFormComponent } from './financial/purchase-order-detail-form/purchase-order-detail-form.component';
import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [BrandsComponent,CustomersComponent,PreferredVendorComponent,ProductComponent,SalesRepresentativeComponent, PaymentTermsComponent, PurchaseOrderComponent, PurchaseOrderDetailComponent, PurchaseOrderReceivingComponent, ReceiptComponent, SalesInvoiceComponent, SalesInvoiceDetailComponent, TaxClassComponent, CasePackComponent, FamilyComponent, GroupComponent, UomComponent, ShipmentsComponent, WarehouseComponent, PaymentTermsFormComponent, PurchaseOrderFormComponent, PurchaseOrderReceivingFormComponent, ReceiptFormComponent, SalesInvoiceFormComponent, SalesInvoiceDetailFormComponent, TaxClassFormComponent, PurchaseOrderDetailFormComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DynamicModule,
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    SimpleNotificationsModule.forRoot(
      {
        position: ["top","right"],
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true,
      }
    ),


  ]
})
export class PagesModule { }
