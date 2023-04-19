import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
data:string="Hi anil"
num:any=40
title= "Welcome anil kumar"
date=new Date();
employee= {
  "name":"anil",
  "age":"23"
}
}
