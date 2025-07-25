import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../newStore/state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): Observable<User[]> {
    // Simulating an HTTP request to get a user
    return of([
        
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Sam Green', age: 22 },
        { id: 4, name: 'Alice Brown', age: 28 },
        { id: 5, name: 'Bob White', age: 35 },
        { id: 6, name: 'ram', age: 37 },
        { id: 7, name: 'sam', age: 45 },
        { id: 8, name: 'rom', age: 25 },
        { id: 9, name: 'aaaa', age: 40 },
        { id: 10, name: 'Bbbb', age: 37 },
        { id: 11, name: 'ccc', age: 39 },
        { id: 12, name: 'dddd', age: 31 },
        { id: 13, name: 'eeee', age: 22 },
        { id: 14, name: 'ffffff', age: 55 },
    
   ] );
  }
}