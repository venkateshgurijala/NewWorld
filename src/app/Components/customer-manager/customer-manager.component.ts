import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.scss']
})
export class CustomerManagerComponent implements OnInit {

  constructor(private router:Router) { }
  loginMethod(){
    this.router.navigate(['/','login']);
  }
  registrationMethod(){
    this.router.navigate(['/','registration']);
  }
  ngOnInit(): void {
  }

}
