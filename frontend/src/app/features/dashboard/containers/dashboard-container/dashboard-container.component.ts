import { Component, inject } from '@angular/core';
import { DashboardService } from '@features/dashboard/services/dashboard.service';
import { DashboardSupportTickets } from '@features/dashboard/components/dashboard-support-tickets/dashboard-support-tickets.component';
import { DashboardServerStatus } from '@features/dashboard/components/dashboard-server-status/dashboard-server-status.component';
import { DashboardTraffic } from '@features/dashboard/components/dashboard-traffic/dashboard-traffic.component';
import { DashboardItemsService } from '@features/dashboard/services/dashboard-items.service';
import { DashboardItem } from '@shared/components/dashboard-item/dashboard-item';

@Component({
  selector: 'app-dashboard-container',
  imports: [
    DashboardSupportTickets,
    DashboardServerStatus,
    DashboardTraffic,
    DashboardItem
  ],
  templateUrl: './dashboard-container.component.html',
})
export class DashboardContainer {
  private readonly dashboardService = inject(DashboardService);
  protected readonly trafficData = this.dashboardService.dummyTrafficData;
  protected readonly maxTraffic = this.dashboardService.maxTraffic;
  protected readonly currentStatus = this.dashboardService.currentStatus;
  private readonly dashboardItemsService = inject(DashboardItemsService);
  protected readonly dashboardItemsData = this.dashboardItemsService.dashboardItemsData;
}