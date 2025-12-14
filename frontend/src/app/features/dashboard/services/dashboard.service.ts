import { computed, Injectable, signal } from '@angular/core';
import { TrafficData } from '@features/dashboard/models/traffic-data.model';
import { SERVER_STATUSES, ServerStatus } from '@features/dashboard/models/server-status.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  readonly currentStatus = signal<ServerStatus>(SERVER_STATUSES.ONLINE);
  private readonly _dummyTrafficData = signal<TrafficData[]>([
    { id: 'd1', value: 433 },
    { id: 'd2', value: 260 },
    { id: 'd3', value: 290 },
    { id: 'd4', value: 410 },
    { id: 'd5', value: 397 },
    { id: 'd6', value: 488 },
    { id: 'd47', value: 589 },
  ]);
  readonly dummyTrafficData = this._dummyTrafficData.asReadonly();
  readonly maxTraffic = computed(() => Math.max(...this._dummyTrafficData().map(d => d.value)));
}
