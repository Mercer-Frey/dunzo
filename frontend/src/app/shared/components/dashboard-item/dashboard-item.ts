import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DashboardItemModel } from '@features/dashboard/models/dashboard-item.model';

@Component({
  selector: 'app-dashboard-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './dashboard-item.html',
})
export class DashboardItem {
  readonly data = input.required<DashboardItemModel>();
}
