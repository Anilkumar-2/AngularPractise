import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isDisable:boolean= false;
public greeting="";
public greet="";
public name!:any;
onClick(event:any){
  console.log("Hello Anil")
  this.greeting="Hello Anil"
  this.greet = event.type
}
}
