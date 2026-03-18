import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNookipediaApi } from './services/nookipedia.tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNookipediaApi({
      apiKey: 'e474b790-c856-4733-a1cb-d8d48a4a4b13',
      apiVersion: '1.7.0',
    }),
  ]
};
