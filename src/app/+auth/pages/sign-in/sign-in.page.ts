import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Path } from '@core/structs';
import {MatFormFieldControl} from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotificationsService } from 'angular2-notifications';
import { BehaviorSubject } from 'rxjs';
import { getItem, StorageItem } from '@app/@core/utils';
// import { AuthService } from '@app/+auth/services/auth.service';
import { AuthService } from '@app/@services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  hide = true;
  returnUrl: string='';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private notificationService:NotificationsService,
  ) {
   
  }
  formData = new FormGroup({
    username:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  onClickSignIn(): void {
  
    if(this.formData.valid){
      console.log(this.formData.get('username')?.value);
      this.authService.login(JSON.stringify(this.formData.value)).subscribe(res =>{
        if(res.hasOwnProperty('success')){
          localStorage.setItem('user',this.formData.get('username')?.value);
          // login successful so redirect to return url
          this.router.navigateByUrl(this.returnUrl).then(() => {
            window.location.reload();
          });
        }else if(res.hasOwnProperty('noUserExist')){
          this.notificationService.error('Error', 'No such User Exist. Check your username');
        }
        else if(res.hasOwnProperty('passwordMissmatch')){
          this.notificationService.error('Error', 'Incorrect Password');
        }
        else{
          this.notificationService.error('Error', 'Server Error Occurred');
        }
      });
    }else{
      this.notificationService.error('Error', 'Incomplete Form.');
    }
   
  }

}
