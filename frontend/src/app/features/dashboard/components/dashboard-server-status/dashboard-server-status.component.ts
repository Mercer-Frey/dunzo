import { Component, input } from '@angular/core';
import { SERVER_STATUSES, ServerStatus } from '@features/dashboard/models/server-status.model';

@Component({
  selector: 'app-dashboard-server-status',
  imports: [],
  templateUrl: './dashboard-server-status.component.html',
})
export class DashboardServerStatus {
  readonly currentStatus = input.required<ServerStatus>();
  protected readonly SERVER_STATUSES = SERVER_STATUSES;
}
