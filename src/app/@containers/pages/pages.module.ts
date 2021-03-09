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


@NgModule({
  declarations: [BrandsComponent,CustomersComponent,PreferredVendorComponent,ProductComponent,SalesRepresentativeComponent, PaymentTermsComponent, PurchaseOrderComponent, PurchaseOrderDetailComponent, PurchaseOrderReceivingComponent, ReceiptComponent, SalesInvoiceComponent, SalesInvoiceDetailComponent, TaxClassComponent, CasePackComponent, FamilyComponent, GroupComponent, UomComponent, ShipmentsComponent, WarehouseComponent, PaymentTermsFormComponent],
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
    MatTooltipModule


  ]
})
export class PagesModule { }
