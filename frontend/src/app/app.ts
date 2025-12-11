import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet/>',
})
export class App {
  private readonly http = inject(HttpClient);
  constructor() {
    this.http.get('http://localhost:3000/').subscribe(a => console.log(a));
  }
}
