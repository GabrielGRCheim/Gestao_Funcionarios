import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======

>>>>>>> a2cfdc2d73ac0b80bab9da3a48a8ee3562cf87df
import {routes} from './app.routes';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmationService, MessageService} from "primeng/api";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(),
<<<<<<< HEAD
    importProvidersFrom(FormsModule),
=======
>>>>>>> a2cfdc2d73ac0b80bab9da3a48a8ee3562cf87df
    MessageService,
    ConfirmationService
  ]
};