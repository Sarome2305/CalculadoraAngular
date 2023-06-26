import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  numero1: number=0;
  numero2: number=0;
  resultado: number=0;

  sumar():void{
    this.resultado=this.numero1+this.numero2;

  }

  restar():void{
    this.resultado=this.numero1-this.numero2;

  }

  multiplicar() :void{
    this.resultado=this.numero1*this.numero2;

  }

  dividir() :void{
    this.resultado=this.numero1/this.numero2;

  }

  porcentaje() :void{
    this.resultado=this.numero1*this.numero2/100;

  }
  raiz() :void{
    this.resultado= Math.sqrt(this.resultado)

  }
  raiz1(): void {
    this.resultado = Math.sqrt(this.numero1);
  }
  
  limpiar():void{
    this.numero1 =0;
    this.numero2 =0;
    this.resultado=0; 
    
  }
}
