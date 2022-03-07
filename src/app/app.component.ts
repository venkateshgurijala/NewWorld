import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'coding';
  constructor (private router:Router){
  }
  CustomerMethod(){
    this.router.navigate(['/','customer-manager']);
  }
 
}
