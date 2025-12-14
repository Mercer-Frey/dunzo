import { Routes } from '@angular/router';

export const managementRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/management/containers/management-container/management-container').then(c => c.ManagementContainer)
  },
];
