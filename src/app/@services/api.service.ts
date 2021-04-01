import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient)
  { 

  }
      // READ -- GET
      getAPI(entity: any){
        const url = 'http://erp.test/api/'+entity;
        return this.httpClient.get(url);
      }
      // CREATE -- POST
      storeAPI(data : any, entity: any){
        const url = 'http://erp.test/api/'+entity;
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(url,data, {headers:headers});
      }
      // READ -- GET
      showAPI(id : any, entity: any){
        const url = 'http://erp.test/api/'+entity+'/'+id;
        return this.httpClient.get(url);
      }
      // UPDATE -- PATCH
      editAPI(data : any, id: any, entity: any){
        const url = 'http://erp.test/api/'+entity+'/'+id;
        console.log(url);
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.patch(url,data,{headers:headers});
      }
      // DELETE -- DELETE
      deleteAPI(id : any, entity: any){
        const url = 'http://erp.test/api/'+entity+'/'+id;
        console.log(url);
        return this.httpClient.delete(url);
      }


}
