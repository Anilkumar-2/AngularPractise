import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  a:number=0
  b:number=0
  c:number=0
  constructor(private sharedService: SharedService){

  }
  onCalculate()
  {
    this.c = this.sharedService.onCalculate(this.a , this.b )
  }
}
