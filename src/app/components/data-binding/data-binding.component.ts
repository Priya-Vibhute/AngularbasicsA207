import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
   
  name="Manisha"
  student={
    id:101,
    name:"Anjani",
    subjects:["Maths","Science","English"]
  }

  onBtnClick()
  {
    alert("Button Clicked")
  }

  pColor='green'

  // changeColor('red')
  changeColor(color:string)
  {
     this.pColor=color;
  }

  radiusSize="100"

  changeRadiusSize(size:string)
  {
    this.radiusSize=size
  }

}
