import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectiveService {
  style1 = {
    color: 'black',
    'background-color': 'plum',
    'font-size': '30px',
    'text-align': 'left',
    margin: '50px',
  };

  style2 = {
    color: 'plum',
    'background-color': 'black',
    'font-size': '50px',
    'text-align': 'center',
    margin: '25px',
  };

  styles(s: String) {
    switch (s) {
      case 'S1':
        return this.style1;

      case 'S2':
        return this.style2;

      default:
        return;
    }
  }
}
