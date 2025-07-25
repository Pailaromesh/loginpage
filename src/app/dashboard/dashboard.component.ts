import { Component ,Injectable,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart,registerables,ChartOptions,ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Observable } from 'rxjs';  

export interface User {
  username: string;
  name: string;
  email: string;
  phone: number;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {

  
  data: User[]=[];
  error: string | null = null;
  loading:boolean=true;
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  labledata:string[]=[];
  realdata:number[]=[];
  colordata:string[]=[];
  
    RenderChat(labledata:any,valuedata:any,colordata:any){
      const myChart  = new Chart('barchart',{
  type:'bar',
  data:{
  labels:labledata,
  datasets:[{
    data:valuedata,
    // backgroundColor:colordata,
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
  }]
  } 
      }); 
    }

    chat(labledata:any,valuedata:any,colordata:any){
      const myChart  = new Chart('linechart',{
  type:'line',
  data:{
  labels:labledata,
  datasets:[{
    data:valuedata,
    // backgroundColor:colordata,
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
  }]
  } 
      }); 
    }

  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  // public polarAreaChartLabels: string[] = this.labledata?.slice(0, 5);
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 110, 500, 100, 40, 120 ] }
    // { data: this.realdata}
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

    polarAreachat(labledata:any,valuedata:any,colordata:any){
      const myChart  = new Chart('polar',{
  type:'pie',
  data:{
  labels:labledata,
  datasets:[{
    data:valuedata,
    // backgroundColor:colordata,
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
  } 
      }); 
    }
    public pieChartOptions: ChartOptions<'pie'> = {
      responsive: false,
    };
    // public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
    public pieChartLabels = ["data","data1","data3"];
    public pieChartDatasets = [ {
      data: [500,100,400]
    } ];
    public pieChartLegend = true;
    public pieChartPlugins = [];
   
    
    constructor(private http: HttpClient) {}
       ngOnInit() {

        this.getUsers().subscribe(
          
              (response:User[]) => {
                
                this.data = response; // Handle the response data
                if(this.data!=null){
                  this.data.map(_=>{
                    this.labledata.push(_.username);
                   const myda= isNaN(parseFloat(_.phone.toString()))? 0:parseFloat(_.phone.toString());
                    this.realdata.push(myda);
                    this.colordata.push(_.name);
  
                  })
                }
              },
              (err) => {
                this.error = err.message; // Handle error
                this.loading=false;
              }
            );

            Chart.register(...registerables);
         
          
           
            setTimeout(()=>{

              this.RenderChat(this.labledata,this.realdata,this.colordata);
            },2000);
            setTimeout(()=>{

              this.chat(this.labledata,this.realdata,this.colordata);
            },2000);
            setTimeout(()=>{

              this.polarAreachat(this.labledata,this.realdata,this.colordata);
            },2000);
      }
      getUsers(): Observable<any> {
      return this.http.get<any[]>(this.apiUrl);
      }
  
}
