import { Routes,RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';


 export const routes: Routes =
  [
   
    //  { path: 'app-usernew',title:"user ", component: UsernewComponent,canActivate: [AuthGuard]  },
     { path: 'app-observable',title:"user ", component: ObservableComponent },
     { path: 'app-dashboard',title:"dashboard ", component: DashboardComponent },

    //  { path: 'app-login',title:"user ", component: LoginComponent },
     { path: '',title:"login ", component: LoginComponent ,

      children: [
        {
          path: 'app-dashboard',
          component: DashboardComponent,  // Your component for dashboard
        },
        // Add more routes as necessary
      ],

     },
     { path: '**', redirectTo: '' }
    //  { path: 'register',title:"user ", component: LoginComponent },
    //  { path: '', redirectTo: '/login', pathMatch: 'full' } 
  ];
export const routing = RouterModule.forRoot(routes);
