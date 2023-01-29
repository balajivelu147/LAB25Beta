import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle = true;
status = 'Enable'; 

enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
}

}
