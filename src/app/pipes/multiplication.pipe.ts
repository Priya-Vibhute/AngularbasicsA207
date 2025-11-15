import { Pipe, PipeTransform } from '@angular/core';

// <p>{{2 | multiplication :5}}</p>

@Pipe({
  name: 'multiplication'
})
export class MultiplicationPipe implements PipeTransform {

  transform(value: number, ...args:number[]): unknown {
    return value * args[0];
  }

}
