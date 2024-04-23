import {Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'brevo/home',
    pathMatch: 'full',
  },
  {
    path: 'brevo/home',
    loadChildren: () =>
      import('./home/home.routes').then((m) => m.registerRoutes),
  },
]
