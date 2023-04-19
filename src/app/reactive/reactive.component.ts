import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
regForm: FormGroup
constructor(private toastr: ToastrService) {
  this.regForm= new FormGroup(
    {
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword:new FormControl(null, [Validators.required]),
      gender:new FormControl(),
      subscribe:new FormControl()
    },this.passwordMatch
  )
}
passwordMatch(rf:any) {
  let p = rf.controls['password'].value
  let cp = rf.controls['confirmPassword'].value
  if(p===cp)
  {
    return null
  }
  else{
    return {
      'passwordMatch':true
    }
  }

}
show() {
  console.log(this.regForm.value)
  this.showToastr()
}
showToastr() {
  this.toastr.success('Regetsration successful!!')
}
}
