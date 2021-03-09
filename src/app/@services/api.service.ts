import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient)
  { }

  // FETCH FINANCIAL DATA FROM APIs]
  getPaymentTermsFromAPI(){
    const url = 'http://erp.test/api/paymentTerms';
    return this.httpClient.get(url);
  }

  storePaymentTermsFromAPI(data : any){
    console.log(data);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.httpClient.post('http://erp.test/api/paymentTerms',data, {headers:headers})
    .subscribe((res) => {
      console.log("result",res);
    });
  }

  showPaymentTerms(id : any){
    const url = 'http://erp.test/api/paymentTerms/'+id;
    return this.httpClient.get(url);
  }

  editPaymentTerms(data : any, id: any){
    
    const url = 'http://erp.test/api/paymentTerms/'+id;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.patch(url,data,{headers:headers});
  }

  deletePaymentTerms(id : any){
    const url = 'http://erp.test/api/paymentTerms/'+id;
    console.log(url);
    return this.httpClient.delete(url).subscribe ((res) => {
      console.log("result",res);
    });
  }


  getPurchaseOrderFromAPI(){
    const url = 'http://erp.test/api/purchaseOrder';
    return this.httpClient.get(url);
  }
  getPurchaseOrderDetailsAPI(){
    const url = 'http://erp.test/api/purchaseOrderDetail';
    return this.httpClient.get(url);
  }
  getPurchaseOrderReceivingFromAPI(){
    const url = 'http://erp.test/api/purchaseOrderReceiving';
    return this.httpClient.get(url);
  }
  getReceiptsFromAPI(){
    const url = 'http://erp.test/api/receipt';
    return this.httpClient.get(url);
  }
  getSalesInvoiceFromAPI(){
    const url = 'http://erp.test/api/salesInvoice';
    return this.httpClient.get(url);
  }
  getSalesInvoiceDetailsAPI(){
    const url = 'http://erp.test/api/salesInvoiceDetail';
    return this.httpClient.get(url);
  }
  getTaxClassFromAPI(){
    const url = 'http://erp.test/api/taxClass';
    return this.httpClient.get(url);
  }

  // FETCH INVENTORY DATA FROM APIs
  getCasePacksFromAPI(){
    const url = 'http://erp.test/api/casePack';
    return this.httpClient.get(url);
  }
  getFamilyFromAPI(){
    const url = 'http://erp.test/api/family';
    return this.httpClient.get(url);
  }
  getGroupsAPI(){
    const url = 'http://erp.test/api/group';
    return this.httpClient.get(url);
  }
  getUomsFromAPI(){
    const url = 'http://erp.test/api/uom';
    return this.httpClient.get(url);
  }


  // FETCH WAREHOUSE DATA FROM APIs
  getShipmentsFromAPI(){
    const url = 'http://erp.test/api/shipments';
    return this.httpClient.get(url);
  }
  getWarehousesFromAPI(){
    const url = 'http://erp.test/api/warehouse';
    return this.httpClient.get(url);
  }


  /*FETCH SALES DATA FROM APIs*/
  getCustomersFromAPI(){
    const url = 'http://erp.test/api/customers';
    return this.httpClient.get(url);
  }
  getBrandsFromAPI(){
    const url = 'http://erp.test/api/brands';
    return this.httpClient.get(url);
  }
  getPreferredVendorsAPI(){
    const url = 'http://erp.test/api/preferredVendor';
    return this.httpClient.get(url);
  }
  getProductsFromAPI(){
    const url = 'http://erp.test/api/product';
    return this.httpClient.get(url);
  }
  getSalesRepresentativesFromAPI(){
    const url = 'http://erp.test/api/salesRepresentative';
    return this.httpClient.get(url);
  }

}
