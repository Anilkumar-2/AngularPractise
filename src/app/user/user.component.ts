import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor( private userService: SharedService, private router:Router, private route:ActivatedRoute ){}
  showSkills(){
    this.router.navigate(['userskills'], {relativeTo: this.route});
  }
  showDetails() {
    this.router.navigate(['userdetails'], {relativeTo: this.route});
  }
}
