import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';



import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, provideState } from '@ngrx/store';// provide state in key value fair 
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { studentReducer } from './state/student-reduce';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './interceptor/custom.interceptor';
import { provideToastr } from 'ngx-toastr';
// import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

// reduc or 
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideClientHydration(),
     provideStore(),
     provideState({name:"staundetsRecods",reducer:studentReducer}),
     provideStoreDevtools({maxAge:25,logOnly:false}), provideAnimationsAsync(),provideHttpClient(withInterceptors([customInterceptor])),provideToastr() ]//, provideCharts(withDefaultRegisterables())
    
    
};
