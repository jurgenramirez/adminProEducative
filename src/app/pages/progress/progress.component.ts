import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso:number =50;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarValor( valor : number){
    if(this.progreso>=100 && valor>0){
      this.progreso=100;
        return;
    }else if( this.progreso<=0 && valor<0)
    {
      this.progreso=0;
      return;
    }
      this.progreso+=valor;
  }

}
