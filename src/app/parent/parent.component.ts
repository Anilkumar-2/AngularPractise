import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild('anil') a:any

  @ViewChildren('ang') b: any

  test() {
    console.log(this.a.nativeElement.innerText)
    console.log(this.b)
    console.log(this.b._results[0].nativeElement.innerText)
    for(let e of this.b){
      console.log(e.nativeElement.innerText)
    }
  }


  emittedData:any;
  getFromChild!:string;
data="Anil"
data1={
  age:23,
  tech:"dotnet",  
  gender:"male"
}
parentCalling(info:any){
  this.getFromChild=info
}
}
