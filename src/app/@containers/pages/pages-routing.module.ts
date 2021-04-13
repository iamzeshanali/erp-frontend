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
import { AuthGuard } from '@app/@core/guards';
import { ActivateGuard } from '@app/@core/guards/activate.guard';
import { AuthService } from '@app/+auth/services/auth.service';
import { DashboardPage } from './home/dashboard/dashboard.page';
import { SignInPage } from '@app/+auth/pages/sign-in/sign-in.page';

const routes: Routes = [
  /*SALES ROUTE*/
    // SIGNIN_PAGE
    { path: '', component: SignInPage},

    // DASHBOARD_PAGE
    { path: 'dashboard', component: DashboardPage, canActivate: [AuthGuard]},
    // BRANDS
    { path: 'sales/brands', component: BrandsComponent, canActivate: [AuthGuard]},
    { path: 'sales/brands/form', component: BrandsFormComponent, canActivate: [AuthGuard]},
    { path: 'sales/brands/form/:id', component: BrandsFormComponent, canActivate: [AuthGuard]},
    // CUSTOMERS
    { path: 'sales/customers', component: CustomersComponent, canActivate: [AuthGuard]},
    { path: 'sales/customers/form', component: CustomersFormComponent, canActivate: [AuthGuard]},
    { path: 'sales/customers/form/:id', component: CustomersFormComponent, canActivate: [AuthGuard]},
    // PREFERRED_VENDOR
    { path: 'sales/preferredVendor', component: PreferredVendorComponent, canActivate: [AuthGuard]},
    { path: 'sales/preferredVendor/form', component: PreferredVendorFormComponent, canActivate: [AuthGuard]},
    { path: 'sales/preferredVendor/form/:id', component: PreferredVendorFormComponent, canActivate: [AuthGuard]},
    // PRODUCTS
    { path: 'sales/products', component: ProductComponent, canActivate: [AuthGuard]},
    { path: 'sales/products/form', component: ProductFormComponent, canActivate: [AuthGuard]},
    { path: 'sales/products/form/:id', component: ProductFormComponent, canActivate: [AuthGuard]},
    // SAELS_REPRESENTATIVE
    { path: 'sales/salesRepresentative', component: SalesRepresentativeComponent, canActivate: [AuthGuard]},
    { path: 'sales/salesRepresentative/form', component: SalesRepresentativeFormComponent, canActivate: [AuthGuard]},
    { path: 'sales/salesRepresentative/form/:id', component: SalesRepresentativeFormComponent, canActivate: [AuthGuard]},

  /*INVENTORY ROUTES*/
    /*CASE PACK*/
    { path: 'inventory/casePack', component: CasePackComponent, canActivate: [AuthGuard]},
    { path: 'inventory/casePack/form', component: CasePackFormComponent, canActivate: [AuthGuard]},
    { path: 'inventory/casePack/form/:id', component: CasePackFormComponent, canActivate: [AuthGuard]},
    /*FAMILY*/
    { path: 'inventory/family', component: FamilyComponent, canActivate: [AuthGuard]},
    { path: 'inventory/family/form', component: FamilyFormComponent, canActivate: [AuthGuard]},
    { path: 'inventory/family/form/:id', component: FamilyFormComponent, canActivate: [AuthGuard]},
    /*GROUP*/
    { path: 'inventory/group', component: GroupComponent, canActivate: [AuthGuard]},
    { path: 'inventory/group/form', component: GroupFormComponent, canActivate: [AuthGuard]},
    { path: 'inventory/group/form/:id', component: GroupFormComponent, canActivate: [AuthGuard]},
    /*UOM*/
    { path: 'inventory/uom', component: UomComponent, canActivate: [AuthGuard]},
    { path: 'inventory/uom/form', component: UomFormComponent, canActivate: [AuthGuard]},
    { path: 'inventory/uom/form/:id', component: UomFormComponent, canActivate: [AuthGuard]},
  

  /*FINANCIAL TERMS ROUTES*/
    // PAYMENT-TERMS
    { path: 'financial/paymentTerms', component: PaymentTermsComponent, canActivate: [AuthGuard]},
    { path: 'financial/paymentTerms/form', component: PaymentTermsFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/paymentTerms/form/:id', component: PaymentTermsFormComponent, canActivate: [AuthGuard]},
    // PURCHASE ORDER
    { path: 'financial/purchaseOrder', component: PurchaseOrderComponent, canActivate: [AuthGuard]},
    { path: 'financial/purchaseOrder/form', component: PurchaseOrderFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/purchaseOrder/form/:id', component: PurchaseOrderFormComponent, canActivate: [AuthGuard]},

    // PURCHASE ORDER DETAIL
    { path: 'financial/purchaseOrderDetail', component: PurchaseOrderDetailComponent, canActivate: [AuthGuard]},
    { path: 'financial/purchaseOrderDetail/form', component: PurchaseOrderDetailFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/purchaseOrderDetail/form/:id', component: PurchaseOrderDetailFormComponent, canActivate: [AuthGuard]},

    // PURCHASE ORDER RECEIVING
    { path: 'financial/purchaseOrderReceiving', component: PurchaseOrderReceivingComponent, canActivate: [AuthGuard]},
    { path: 'financial/purchaseOrderReceiving/form', component: PurchaseOrderReceivingFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/purchaseOrderReceiving/form/:id', component: PurchaseOrderReceivingFormComponent, canActivate: [AuthGuard]},

    // RECEIPT
    { path: 'financial/receipt', component: ReceiptComponent, canActivate: [AuthGuard]},
    { path: 'financial/receipt/form', component: ReceiptFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/receipt/form/:id', component: ReceiptFormComponent, canActivate: [AuthGuard]},

    // SALES INVOICE
    { path: 'financial/salesInvoice', component: SalesInvoiceComponent, canActivate: [AuthGuard]},
    { path: 'financial/salesInvoice/form', component: SalesInvoiceFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/salesInvoice/form/:id', component: SalesInvoiceFormComponent, canActivate: [AuthGuard]},

    // SALES INVOICE DETAIL
    { path: 'financial/salesInvoiceDetail', component: SalesInvoiceDetailComponent, canActivate: [AuthGuard]},
    { path: 'financial/salesInvoiceDetail/form', component: SalesInvoiceDetailFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/salesInvoiceDetail/form/:id', component: SalesInvoiceDetailFormComponent, canActivate: [AuthGuard]},

    // TEX CLASS
    { path: 'financial/taxClass', component: TaxClassComponent, canActivate: [AuthGuard]},
    { path: 'financial/taxClass/form', component: TaxClassFormComponent, canActivate: [AuthGuard]},
    { path: 'financial/taxClass/form/:id', component: TaxClassFormComponent, canActivate: [AuthGuard]},

  /*WAREHOUSE ROUTES*/
    // SHIPMENTS
    { path: 'warehouse/shipments', component: ShipmentsComponent, canActivate: [AuthGuard]},
    { path: 'warehouse/shipments/form', component: ShipmentsFormComponent, canActivate: [AuthGuard]},
    { path: 'warehouse/shipments/form/:id', component: ShipmentsFormComponent, canActivate: [AuthGuard]},
    // WAREHOUSES
    { path: 'warehouse/warehouse', component: WarehouseComponent, canActivate: [AuthGuard]},
    { path: 'warehouse/warehouse/form', component: WarehouseFormComponent, canActivate: [AuthGuard]},
    { path: 'warehouse/warehouse/form/:id', component: WarehouseFormComponent, canActivate: [AuthGuard]}

    //HOME
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PagesRoutingModule { }
