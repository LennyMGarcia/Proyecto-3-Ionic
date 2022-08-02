import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Resultado:string;
   Num1:string;
  Num2:string;

  constructor() {}

  Calcular(){
 this.Resultado = (parseFloat(this.Num1) + parseFloat(this.Num2)).toString();
  }
}
