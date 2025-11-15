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

  loggedIn=false;

  toggleLogin()
  {
    this.loggedIn=!this.loggedIn;
  }

}
