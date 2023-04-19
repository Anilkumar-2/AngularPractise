import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() Name1:any;
  @Input() Name:any;
  @Output() customEvent = new EventEmitter();
  meesage="Welcome to Angular"
  passtoParent() {
    this.customEvent.emit(this.meesage)
  }
  sendtoParent(){
    return this.meesage
  }
}
