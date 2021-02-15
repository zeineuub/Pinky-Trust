import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-in-company',
    loadChildren: () => import('./pages/sign-in-company/sign-in-company.module').then( m => m.SignInCompanyPageModule)
  },
  {
    path:"company/id",
    loadChildren: () => import('./pages/modal-company/modal-company.module').then( m => m.ModalCompanyPageModule)


  },
  {
    path: 'modal-company',
    loadChildren: () => import('./pages/modal-company/modal-company.module').then( m => m.ModalCompanyPageModule)
  },

  {
    path: 'modal-intership',
    loadChildren: () => import('./pages/modal-intership/modal-intership.module').then( m => m.ModalIntershipPageModule)
  },
  {
    path: 'sign-up-company',
    loadChildren: () => import('./pages/sign-up-company/sign-up-company.module').then( m => m.SignUpCompanyPageModule)
  },
  {
    path: 'list-intership',
    loadChildren: () => import('./pages/list-intership/list-intership.module').then( m => m.ListIntershipPageModule)
  },

  {
    path: 'intership-item-detail',
    loadChildren: () => import('./pages/intership-item-detail/intership-item-detail.module').then( m => m.IntershipItemDetailPageModule)
  },
  {
    path: 'user-info/:id',
    loadChildren: () => import('./pages/user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
