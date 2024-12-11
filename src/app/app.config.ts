import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Enables zone change detection with event coalescing
    provideRouter(routes), // Provides the router using the defined routes
    provideHttpClient() // Provides the HTTP client for making requests
  ]
};
