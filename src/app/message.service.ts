import { Injectable } from '@angular/core';


@Injectable({
     providedIn: 'root', // Makes the service available throughout the application
  })
  export class MessageService {
    getMessage(): string {
      return 'Hello from MessageService!';
    }
  }