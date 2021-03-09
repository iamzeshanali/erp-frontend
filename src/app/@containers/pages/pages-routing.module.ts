import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrandsComponent} from "@containers/pages/sales/brands/brands.component";
import {PreferredVendorComponent} from "@containers/pages/sales/preferred-vendor/preferred-vendor.component";
import {CustomersComponent} from "@containers/pages/sales/customers/customers.component";
import {ProductComponent} from "@containers/pages/sales/product/product.component";
import {SalesRepresentativeComponent} from "@containers/pages/sales/sales-representative/sales-representative.component";
import {CasePackComponent} from "@containers/pages/inventory/case-pack/case-pack.component";
import {FamilyComponent} from "@containers/pages/inventory/family/family.component";
import {GroupComponent} from "@containers/pages/inventory/group/group.component";
import {UomComponent} from "@containers/pages/inventory/uom/uom.component";
import {PaymentTermsComponent} from "@containers/pages/financial/payment-terms/payment-terms.component";
import {PurchaseOrderComponent} from "@containers/pages/financial/purchase-order/purchase-order.component";
import {PurchaseOrderDetailComponent} from "@containers/pages/financial/purchase-order-detail/purchase-order-detail.component";
import {PurchaseOrderReceivingComponent} from "@containers/pages/financial/purchase-order-receiving/purchase-order-receiving.component";
import {ReceiptComponent} from "@containers/pages/financial/receipt/receipt.component";
import {SalesInvoiceComponent} from "@containers/pages/financial/sales-invoice/sales-invoice.component";
import {SalesInvoiceDetailComponent} from "@containers/pages/financial/sales-invoice-detail/sales-invoice-detail.component";
import {TaxClassComponent} from "@containers/pages/financial/tax-class/tax-class.component";
import {ShipmentsComponent} from "@containers/pages/warehouse/shipments/shipments.component";
import {WarehouseComponent} from "@containers/pages/warehouse/warehouse/warehouse.component";
import { PaymentTermsFormComponent } from './financial/payment-terms-form/payment-terms-form.component';

const routes: Routes = [
  /*SALES ROUTE*/
  { path: 'sales/brands', component: BrandsComponent},
  { path: 'sales/customers', component: CustomersComponent},
  { path: 'sales/preferredVendor', component: PreferredVendorComponent},
  { path: 'sales/products', component: ProductComponent},
  { path: 'sales/salesRepresentative', component: SalesRepresentativeComponent},

  /*INVENTORY ROUTES*/
  { path: 'inventory/casePack', component: CasePackComponent},
  { path: 'inventory/family', component: FamilyComponent},
  { path: 'inventory/group', component: GroupComponent},
  { path: 'inventory/uom', component: UomComponent},

  /*FINANCIAL ROUTES*/
  { path: 'financial/paymentTerms', component: PaymentTermsComponent},
  { path: 'financial/paymentTerms/form', component: PaymentTermsFormComponent},
  { path: 'financial/paymentTerms/form/:id', component: PaymentTermsFormComponent},

  { path: 'financial/purchaseOrder', component: PurchaseOrderComponent},
  { path: 'financial/purchaseOrderDetail', component: PurchaseOrderDetailComponent},
  { path: 'financial/purchaseOrderReceiving', component: PurchaseOrderReceivingComponent},
  { path: 'financial/receipt', component: ReceiptComponent},
  { path: 'financial/salesInvoice', component: SalesInvoiceComponent},
  { path: 'financial/salesInvoiceDetail', component: SalesInvoiceDetailComponent},
  { path: 'financial/taxClass', component: TaxClassComponent},

  /*WAREHOUSE ROUTES*/
  { path: 'warehouse/shipments', component: ShipmentsComponent},
  { path: 'warehouse/warehouse', component: WarehouseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
