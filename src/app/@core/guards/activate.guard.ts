import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@app/@services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor( private router: Router, private authService: AuthService)
  { 

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      
        return true;
      
      // if(this.authService.isAdmin()){
      //   return true;
      // }else{
      //   // if not logged in redirects to sign-in page with the return url
      //   this.router.navigate(['sign-in'], {
      //     queryParams: { returnUrl: state.url },
      //   });
      //   return false;
      // }
  
    
  }
  
}
