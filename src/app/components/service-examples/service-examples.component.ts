import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-service-examples',
  imports: [FormsModule],
  templateUrl: './service-examples.component.html',
  styleUrl: './service-examples.component.css',
 

})
export class ServiceExamplesComponent {

  n:number=2;

  calculatorService:CalculatorService=inject(CalculatorService);

  printPrime(n:number)
  {
   let result= this.calculatorService.isPrime(n);
   return result ? "Number is prime":"Number is not prime"
  }


}
