import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app/state/newStore/reducer';



// bootstrapApplication(AppComponent, //appConfig,
//   {
//   providers: [
//     StoreModule.forRoot({ appState: appReducer }) as any
//   ]
// })
//   .catch((err) => console.error(err));

  bootstrapApplication(AppComponent,appConfig
   )
    .catch((err) => console.error(err));
