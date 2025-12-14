import { Component } from '@angular/core';
import { MainHeader } from '@core/layouts/main/main-header/main-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    MainHeader,
    RouterOutlet
  ],
  templateUrl: './main-layout.html',
})
export class MainLayout {

}
