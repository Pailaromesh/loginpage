import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {
  data:any=[];
  // Observable example
  objaData:any=
  [
    {
    name:'romesh',
    address:'Hyd'
    
    },
    {
      name:'romesh',
      address:'Hyd'
      
     }
    ];
      obs$= new Observable<any>((o)=>{
        o.next(this.objaData),
        o.error("hey its an error!! check it !!")
      });
      ngOnInit(): void {
        debugger
        {
          this.obs$.subscribe(

            (response) => {
              console.log(response)
              this.data = response; // Handle the response data
            },
            (err) => {
              // this.error = err.message; // Handle error
              console.log(err.message);
              // this.loading=false;
            },
       
            ()=>{console.log("completed")
            }
      )
      debugger
      console.log(this.data);
        }
      }
}




// import { Component,OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { objaData,Person } from './data';
// // import { subscribe } from 'diagnostics_channel';

// @Component({
//   selector: 'app-observable',
//   standalone: true,
//   imports: [],
//   templateUrl: './observable.component.html',
//   styleUrl: './observable.component.css'
// })
// export class ObservableComponent implements OnInit {
  
//   data:[]=[];
//   // data:Person[]=[];
//   // Observable example
 
//       obs$= new Observable((subscribe)=>{
//       // obs$= new Observable<Person[]>((subscribe)=>{
//         subscribe.next(objaData),
//         subscribe.error("hey its an error!! check it !!")
//       });
//       ngOnInit(): void {
//         debugger
//         {
//           this.obs$.subscribe(

//             // (response:Person[]) => {
//             response => {
//               console.log(response)
//               this.data = response; // Handle the response data
//             },
//             (err) => {
//               // this.error = err.message; // Handle error
//               console.log(err.message);
//               // this.loading=false;
//             },
       
//             ()=>{console.log("completed")
//             }
//       )
//       // debugger
//       // console.log(this.data);
//         }
//       }
// }

