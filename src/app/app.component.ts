import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myfirstangular';
  name: string="Anil";
  path: string= "../assets/img4.jpg"
  // d: string = new Date().toDateString();
  // x=5;
  // tests () {
  //   return this.x;
  // }
  // t: string = new Date().toDateString() ;
  // timerId= setInterval(()=>
  // {
  //   this.t = new Date().toLocaleString();
  // },1000)
}
