import { Component, input } from '@angular/core';
import { TrafficData } from '@features/dashboard/models/traffic-data.model';

@Component({
  selector: 'app-dashboard-traffic',
  imports: [],
  templateUrl: './dashboard-traffic.component.html',
})
export class DashboardTraffic {
  readonly trafficData = input.required<TrafficData[]>();
  readonly maxTraffic = input.required<TrafficData['value']>();
}
