import { HttpInterceptorFn } from '@angular/common/http';

// export const customInterceptor: HttpInterceptorFn = (req, next) => {
// debugger
//   const token =  localStorage.getItem("token");
//   const clonerequest=req.clone({
//     setHeaders:{
//       Authorization :`bearer ${token}`
//     }
//   })
//   return next(req);
// };
import { inject } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token");

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(clonedRequest).pipe(
    tap((event) => {
      // Optional: handle successful responses here
      // console.log('HTTP Response:', event);
    }),
    catchError((error) => {
      // Optional: handle errors globally
      if (error.status === 401) {
        console.error("Unauthorized: Redirecting to login...");
        // Optionally: redirect to login
      } else if (error.status === 403) {
        console.error("Forbidden: Access denied");
      } else {
        console.error("HTTP Error:", error);
      }
      return throwError(() => error); // forward error
    })
  );
};

// angular 17 it have create array function before this is one serivce 
// every http resquest created in side  export const customInterceptor: HttpInterceptorFn = (req, next) => {
// next method excuted for http request 
// we need to register in  app.config file like below
// import our interceptor
     //provideStoreDevtools({maxAge:25,logOnly:false}), provideAnimationsAsync(),provideHttpClient(withInterceptors([customInterceptor]))
     