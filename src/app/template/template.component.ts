import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
name!:string
email!:string
show(){
console.log('Name:',this.name,'Email:',this.email)
}
}
