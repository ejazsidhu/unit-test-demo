import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"],
})
export class ProgressBarComponent implements OnChanges {
  @Input() progress: number;
  @Input() total: number;
  color: string = "";

  constructor() {}
  ngOnChanges(){
    if (!this.progress) this.progress = 0;

    if (this.total === 0) {
      this.total = this.progress;
    } else if (!this.total) {
      this.total = 100;
    }

    if(this.progress>this.total){
      this.progress=100;
      this.total=100;
    }

    this.progress=(this.progress/this.total)*100;

    if(this.progress<55){
      this.color="red";
    }
    else if(this.progress>=55 && this.progress<75){
      this.color="yellow";
    }
    else this.color="green"

  }
  
   
}
