import { Component } from '@angular/core';
import { BComponent } from "../b/b.component";
import {CommonModule} from "@angular/common"

@Component({
  selector: 'app-a',
  imports: [BComponent,CommonModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  data:String="Data from Parent";
  count:number=0;

  increment()
  {
    this.count++;
  }

  changeData(newValue:String)
  {
     this.data=newValue;
  }

}
