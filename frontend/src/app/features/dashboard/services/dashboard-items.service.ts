import { Injectable, signal } from '@angular/core';
import { DashboardData } from '@features/dashboard/models/dashboard-item.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardItemsService {
  private readonly _data = signal<DashboardData>({
    serverStatus: {
      image: {
        src: 'images/status.png',
        width: '400',
        height: '262',
        alt: 'A signal symbol'
      },
      title: 'Server Status'
    },
    supportTickets: {
      image: {
        src: 'images/list.png',
        width: '315',
        height: '250',
        alt: 'A list of items'
      },
      title: 'Support Tickets'
    },
    traffic: {
      image: {
        src: 'images/list.png',
        width: '300',
        height: '289',
        alt: 'A globe'
      },
      title: 'Traffic'
    },
  });

  readonly dashboardItemsData = this._data.asReadonly();
}
