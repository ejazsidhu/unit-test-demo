import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress:number=0;
  total:number=100
  title = 'angular-unit-testing-demo';
  constructor(){
    setInterval(() => (this.progress<100)?this.progress=this.progress+5:this.progress=0, 1000);
  }
}