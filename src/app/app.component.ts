import { Component,OnInit } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { _domain } from './baseUrl';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  currentUrl="";
  title = "it's my sample!";
   routesub: any;
  constructor(private router:Router){}
  ngOnInit(): void {
   debugger
   this.routesub = this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      this.currentUrl = event.url;
    }
  });
  }
}
