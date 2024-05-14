import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logincerto',
    loadChildren: () => import('./pagina/logincerto/logincerto.module').then( m => m.LogincertoPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pagina/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'addagendamento',
    loadChildren: () => import('./pagina/addagendamento/addagendamento.module').then( m => m.AddagendamentoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pagina/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pagina/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pagina/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'promotion1',
    loadChildren: () => import('./pagina/promotion1/promotion1.module').then( m => m.Promotion1PageModule)
  },
  {
    path: 'promotion2',
    loadChildren: () => import('./pagina/promotion2/promotion2.module').then( m => m.Promotion2PageModule)
  },
  {
    path: 'promotion3',
    loadChildren: () => import('./pagina/promotion3/promotion3.module').then( m => m.Promotion3PageModule)
  },
  {
    path: 'profile0',
    loadChildren: () => import('./pagina/profile0/profile0.module').then( m => m.Profile0PageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pagina/payment/payment.module').then( m => m.PaymentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
