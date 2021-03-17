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
import { PurchaseOrderFormComponent } from './financial/purchase-order-form/purchase-order-form.component';
import { PurchaseOrderDetailFormComponent } from './financial/purchase-order-detail-form/purchase-order-detail-form.component';
import { PurchaseOrderReceivingFormComponent } from './financial/purchase-order-receiving-form/purchase-order-receiving-form.component';
import { ReceiptFormComponent } from './financial/receipt-form/receipt-form.component';
import { SalesInvoiceFormComponent } from './financial/sales-invoice-form/sales-invoice-form.component';
import { SalesInvoiceDetailFormComponent } from './financial/sales-invoice-detail-form/sales-invoice-detail-form.component';
import { TaxClassFormComponent } from './financial/tax-class-form/tax-class-form.component';
import { CasePackFormComponent } from './inventory/case-pack-form/case-pack-form.component';
import { FamilyFormComponent } from './inventory/family-form/family-form.component';
import { GroupFormComponent } from './inventory/group-form/group-form.component';
import { UomFormComponent } from './inventory/uom-form/uom-form.component';
import { ShipmentsFormComponent } from './warehouse/shipments-form/shipments-form.component';
import { WarehouseFormComponent } from './warehouse/warehouse-form/warehouse-form.component';
import { BrandsFormComponent } from './sales/brands-form/brands-form.component';
import { CustomersFormComponent } from './sales/customers-form/customers-form.component';
import { PreferredVendorFormComponent } from './sales/preferred-vendor-form/preferred-vendor-form.component';
import { ProductFormComponent } from './sales/product-form/product-form.component';
import { SalesRepresentativeFormComponent } from './sales/sales-representative-form/sales-representative-form.component';

const routes: Routes = [
  /*SALES ROUTE*/
    // BRANDS
    { path: 'sales/brands', component: BrandsComponent},
    { path: 'sales/brands/form', component: BrandsFormComponent},
    { path: 'sales/brands/form/:id', component: BrandsFormComponent},
    // CUSTOMERS
    { path: 'sales/customers', component: CustomersComponent},
    { path: 'sales/customers/form', component: CustomersFormComponent},
    { path: 'sales/customers/form/:id', component: CustomersFormComponent},
    // PREFERRED_VENDOR
    { path: 'sales/preferredVendor', component: PreferredVendorComponent},
    { path: 'sales/preferredVendor/form', component: PreferredVendorFormComponent},
    { path: 'sales/preferredVendor/form/:id', component: PreferredVendorFormComponent},
    // PRODUCTS
    { path: 'sales/products', component: ProductComponent},
    { path: 'sales/products/form', component: ProductFormComponent},
    { path: 'sales/products/form/:id', component: ProductFormComponent},
    // SAELS_REPRESENTATIVE
    { path: 'sales/salesRepresentative', component: SalesRepresentativeComponent},
    { path: 'sales/salesRepresentative/form', component: SalesRepresentativeFormComponent},
    { path: 'sales/salesRepresentative/form/:id', component: SalesRepresentativeFormComponent},

  /*INVENTORY ROUTES*/
    /*CASE PACK*/
    { path: 'inventory/casePack', component: CasePackComponent},
    { path: 'inventory/casePack/form', component: CasePackFormComponent},
    { path: 'inventory/casePack/form/:id', component: CasePackFormComponent},
    /*FAMILY*/
    { path: 'inventory/family', component: FamilyComponent},
    { path: 'inventory/family/form', component: FamilyFormComponent},
    { path: 'inventory/family/form/:id', component: FamilyFormComponent},
    /*GROUP*/
    { path: 'inventory/group', component: GroupComponent},
    { path: 'inventory/group/form', component: GroupFormComponent},
    { path: 'inventory/group/form/:id', component: GroupFormComponent},
    /*UOM*/
    { path: 'inventory/uom', component: UomComponent},
    { path: 'inventory/uom/form', component: UomFormComponent},
    { path: 'inventory/uom/form/:id', component: UomFormComponent},
  

  /*FINANCIAL TERMS ROUTES*/
    // PAYMENT-TERMS
    { path: 'financial/paymentTerms', component: PaymentTermsComponent},
    { path: 'financial/paymentTerms/form', component: PaymentTermsFormComponent},
    { path: 'financial/paymentTerms/form/:id', component: PaymentTermsFormComponent},
    // PURCHASE ORDER
    { path: 'financial/purchaseOrder', component: PurchaseOrderComponent},
    { path: 'financial/purchaseOrder/form', component: PurchaseOrderFormComponent},
    { path: 'financial/purchaseOrder/form/:id', component: PurchaseOrderFormComponent},

    // PURCHASE ORDER DETAIL
    { path: 'financial/purchaseOrderDetail', component: PurchaseOrderDetailComponent},
    { path: 'financial/purchaseOrderDetail/form', component: PurchaseOrderDetailFormComponent},
    { path: 'financial/purchaseOrderDetail/form/:id', component: PurchaseOrderDetailFormComponent},

    // PURCHASE ORDER RECEIVING
    { path: 'financial/purchaseOrderReceiving', component: PurchaseOrderReceivingComponent},
    { path: 'financial/purchaseOrderReceiving/form', component: PurchaseOrderReceivingFormComponent},
    { path: 'financial/purchaseOrderReceiving/form/:id', component: PurchaseOrderReceivingFormComponent},

    // RECEIPT
    { path: 'financial/receipt', component: ReceiptComponent},
    { path: 'financial/receipt/form', component: ReceiptFormComponent},
    { path: 'financial/receipt/form/:id', component: ReceiptFormComponent},

    // SALES INVOICE
    { path: 'financial/salesInvoice', component: SalesInvoiceComponent},
    { path: 'financial/salesInvoice/form', component: SalesInvoiceFormComponent},
    { path: 'financial/salesInvoice/form/:id', component: SalesInvoiceFormComponent},

    // SALES INVOICE DETAIL
    { path: 'financial/salesInvoiceDetail', component: SalesInvoiceDetailComponent},
    { path: 'financial/salesInvoiceDetail/form', component: SalesInvoiceDetailFormComponent},
    { path: 'financial/salesInvoiceDetail/form/:id', component: SalesInvoiceDetailFormComponent},

    // TEX CLASS
    { path: 'financial/taxClass', component: TaxClassComponent},
    { path: 'financial/taxClass/form', component: TaxClassFormComponent},
    { path: 'financial/taxClass/form/:id', component: TaxClassFormComponent},

  /*WAREHOUSE ROUTES*/
    // SHIPMENTS
    { path: 'warehouse/shipments', component: ShipmentsComponent},
    { path: 'warehouse/shipments/form', component: ShipmentsFormComponent},
    { path: 'warehouse/shipments/form/:id', component: ShipmentsFormComponent},
    // WAREHOUSES
    { path: 'warehouse/warehouse', component: WarehouseComponent},
    { path: 'warehouse/warehouse/form', component: WarehouseFormComponent},
    { path: 'warehouse/warehouse/form/:id', component: WarehouseFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
