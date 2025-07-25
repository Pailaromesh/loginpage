import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private route:Router) { }
  //this.route.navigate('url');
}
