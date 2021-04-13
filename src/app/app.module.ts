import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FooterModule } from '@components/footer/footer.module';
import { HeaderModule } from '@components/header/header.module';
import { environment } from '../environments/environment';
import { JwtInterceptor, ServerErrorInterceptor } from './@core/interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from "@app/+user/user.module";

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {SecondaryHeaderModule} from "@components/secondary-header/secondary-header.module";
import {DynamicModule} from "@components/dynamic/dynamic.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthModule } from './+auth/auth.module';
import { AuthGuard } from './@core/guards';
import { ActivateGuard } from './@core/guards/activate.guard';
// import { AuthService } from './+auth/services/auth.service';
import { AuthService } from './@services/auth.service';
import { PagesModule } from './@containers/pages/pages.module';
import { SignInPage } from './+auth/pages/sign-in/sign-in.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    HeaderModule,
    SecondaryHeaderModule,
    FooterModule,
    UserModule,
    DynamicModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    AuthModule,
    PagesModule,
    SimpleNotificationsModule.forRoot()
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    AuthGuard, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
