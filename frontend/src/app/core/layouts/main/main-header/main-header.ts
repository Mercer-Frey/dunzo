import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROOT_ROUTES } from '@core/models/root.routes';
import { Button } from '@shared/components/button/button';

@Component({
  selector: 'app-main-header',
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    Button
  ],
  templateUrl: './main-header.html',
})
export class MainHeader {
  protected readonly ROOT_ROUTES = ROOT_ROUTES;
}
