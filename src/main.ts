import '@angular/compiler';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';


if ((window as any).ENABLE_PROD_MODE) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [provideAnimations()]
});
