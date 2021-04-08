import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './+auth/services/auth.service';
import { SeoService } from './@core/services/seo';
import { ThemeService } from './@core/services/theme';
import { Path } from './@core/structs';
// import { AuthService } from './@services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$!: boolean;

  constructor(
    private router: Router,
    private seoService: SeoService,
    private themeService: ThemeService,
    private authService: AuthService,
  ) {
    
  }

  ngOnInit(): void {
   var user = localStorage.getItem('user');
   
   if(user){
    this.isLoggedIn$ = true;
   }else{
    this.isLoggedIn$ = false;
   }
   

    this.seoService.init();
    this.themeService.init();
  }

  onLogout(): void {
    localStorage.removeItem("user");
    this.router.navigate([`/${Path.SignIn}`]).then(() => {
      window.location.reload();
    });
  }
}
