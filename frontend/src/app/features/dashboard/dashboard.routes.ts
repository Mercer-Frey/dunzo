import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/dashboard/containers/dashboard-container/dashboard-container.component').then(c => c.DashboardContainer)
  },
];
