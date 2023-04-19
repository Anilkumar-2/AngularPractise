import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  onCalculate(a:number ,b:number )
  {
    return a + b
  }
}
