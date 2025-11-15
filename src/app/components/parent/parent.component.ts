import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, ProductComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  data="Data from the parent"
  message=""

  receiveData(data:string)
  {
      this.message=data;  
  }

}
