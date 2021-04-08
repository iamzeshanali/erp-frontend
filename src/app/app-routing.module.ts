import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './+auth/services/auth.service';
import { NotFoundPage } from './@containers/not-found/not-found.page';
import { AuthGuard, NoAuthGuard } from './@core/guards';
import { ActivateGuard } from './@core/guards/activate.guard';
import { Path } from './@core/structs';
import { AppComponent } from './app.component';

const routes: Routes = [
  // ===== Uncomment if Path.Home is different from empty =====
  // { path: '', redirectTo: Path.Home, pathMatch: 'full' },

  
  // Public
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('@containers/home/home.module').then((m) => m.HomeModule),
  // },

  //   {
  //   path: '',
  //   component: AppComponent
  // },
  // Auth
  {
    path: Path.Auth,
    // canActivate: [NoAuthGuard],
    loadChildren: () => import('./+auth/auth.module').then((m) => m.AuthModule),
  },

  // // App
  // {
  //   path: Path.App,
  //   redirectTo: `${Path.App}`,
  //   pathMatch: 'full',
  // // },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('@containers/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  // {
  //   path: 'settings',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./+settings/settings.module').then((m) => m.SettingsModule),
  // },
  // {
  //   path: 'user',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./+user/user.module').then((m) => m.UserModule),
  // },
  {
    path: 'app',
    canActivate: [AuthGuard],
    component: AppComponent
  },
  
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./+auth/auth.module').then((m) => m.AuthModule),
  },

  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
      import('@containers/not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
