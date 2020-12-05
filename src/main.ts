import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

fetch('/assets/config/config.json')
  .then((response) => response.json())
  .then((response) => {
    if (response.environment.production) {
      enableProdMode()
    }

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err))
  });
