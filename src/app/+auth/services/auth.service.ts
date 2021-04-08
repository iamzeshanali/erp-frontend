import { Injectable } from '@angular/core';
import { getItem, removeItem, setItem, StorageItem } from '@app/@core/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router)
  { 

  }

  get isLoggedIn() {
    return this.isLoggedIn$.asObservable();
  }

  signIn(data:any){
   
      const url = 'http://erp.test/api/login';
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
     return this.httpClient.post(url,data, {headers:headers}).subscribe(res => {
        if(res.hasOwnProperty('success')){
          console.log(res);
          this.isLoggedIn$.next(true);
          this.router.navigate(['']);
        }else{
          return res;
        }
      });

   
  }

  login(data : any){
    console.log(data);
    const url = 'http://erp.test/api/login';
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(url,data, {headers:headers});
  }
  signOut(): void {
    this.isLoggedIn$.next(false);
  }
}
