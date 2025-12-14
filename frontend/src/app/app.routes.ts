import { Routes } from '@angular/router';
import { ROOT_ROUTES } from '@core/models/root.routes';

export const routes: Routes = [
  {
    path: ROOT_ROUTES.DASHBOARD,
    loadComponent: () => import('@core/layouts/main/main-layout/main-layout').then(c => c.MainLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('@features/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
      }
    ]
  },
  {
    path: ROOT_ROUTES.MANAGEMENT,
    loadComponent: () => import('@core/layouts/main/main-layout/main-layout').then(c => c.MainLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('@features/management/management.routes').then(m => m.managementRoutes)
      }
    ]
  },
];
