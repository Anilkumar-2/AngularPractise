import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
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
