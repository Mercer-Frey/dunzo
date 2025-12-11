import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { APP_ENV } from '@env/env';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
      <router-outlet/>
      @if (ENV) {
          <p class="text-4xl"> hi prod</p>

      } @else {
          <p class="text-9xl">{{ hello()?.message }}</p>

      }
  `,
})
export class App {
  protected readonly ENV = APP_ENV.production;
  private readonly http = inject(HttpClient);
  protected readonly hello = toSignal(this.http.get<{ message: string }>(APP_ENV.apiUrl));
}
