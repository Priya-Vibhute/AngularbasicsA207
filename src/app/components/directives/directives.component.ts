import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-directives',
  imports: [CommonModule, ProductComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  colors=["red","yellow","green"]

  students=[
    {id:1,name:"Nisha",subjects:["Maths","Science"]},
    {id:2,name:"Anisha",subjects:["english","History"]},
    {id:3,name:"Ankita",subjects:["Geography"]}
  ]

  loggedIn=false;

  toggleLogin()
  {
    this.loggedIn=!this.loggedIn;
  }

}
