import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formr',
  templateUrl: './formr.component.html',
  styleUrls: ['./formr.component.css']
})
export class FormrComponent {
myForm: FormGroup;
constructor(private fb:FormBuilder){
  this.myForm=this.fb.group(
    {
      username:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]]
    }
  )
}
onFormSubmit(){
  if (this.myForm) {
    console.log(this.myForm.value)
  }
}
}
