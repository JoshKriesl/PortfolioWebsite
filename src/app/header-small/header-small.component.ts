import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-small',
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.scss']
})
export class HeaderSmallComponent{

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
