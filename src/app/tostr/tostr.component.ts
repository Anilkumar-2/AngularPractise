import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tostr',
  templateUrl: './tostr.component.html',
  styleUrls: ['./tostr.component.css']
})
export class TostrComponent {

  constructor( private toastr: ToastrService) {

  }
  showToastr() {
    this.toastr.success('Hi! I am the Toastr')
  }
}
