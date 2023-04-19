import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { employee } from './employee';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent{
  marks!:number;
  count:number=0;
  value!:any;
  res!:string;
  displayName = false;
  flag!:number;
  status!:boolean;
  public color: string = "blue";
  public movies = ["RRR", "Vikram", "Dasara", "KGF"];
  state!: string;
  public Telangana = ["Mahaboobnagar", "Hyderabad", "Warangal", "Khammam"];
  public Andrapradesh = ["Kurnool", "Kadapa", "Nellore", "Vizag"];
  //emp1:any;
  emp:Employee[] = [
    new Employee( 103981, "Anil","Developer", true),
    new Employee( 103982,  "Indu", "Testing", false ),
    new Employee( 103983,  "Ezil", "Developer", true),
    new Employee( 103984,  "Naresh", "IT", true)
  ]
  toggleState(index:number){
    this.emp[index].empActive=!this.emp[index].empActive;
  }

  Result () {
    if( this.marks <40 && this.marks>=0)
    {
      this.flag=1;
      this.res="Fail"
    }
    else if ( this.marks>=40 && this.marks<=70 )
    {
      this.flag=2;
      this.res="Pass"
    }
    else if( this.marks>70 && this.marks<=100)
    {
      this.flag=3;
      this.res="Distinction"
    }
    else {
      this.flag=4;
      this.res="Enter valid marks"
    }
  }
  events(a:any){
    console.log(a.target.value)
  }

  states  = ['Telangana', 'Andrapradesh'];
  cities:any = [];

  selectedState = '';
  selectedCity = '';
  onStateChange() {
    if (this.selectedState == 'Telangana') {
      this.cities = ['Mahaboobnagar', 'Hyderabad', 'Warangal', 'Khammam'];
    } else if (this.selectedState == 'Andrapradesh') {
      this.cities = ['Kurnool', 'Kadapa', 'Nellore','Vizag'];
    }
  }
  cutMeth(e:any)
  {
    console.log("Cuting:",e)
  }
  copyMeth(e:any)
  {
    console.log("Copying:",e)
  }
  pasteMeth(e:any)
  {
    console.log("Pasting:",e)
  }
  items = [
    {
      Id:1, Name:"anil"
    },
    {
      Id:2, Name:"akish"
    }
  ]
}
