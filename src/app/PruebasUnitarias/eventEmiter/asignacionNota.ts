import { EventEmitter } from '@angular/core';


export class Nota {
    hp: number;
    hpCambia = new EventEmitter<number>();
    constructor(){
        this.hp=100;
    }
    recibirValor(danio: number){
        if(danio>= this.hp){
            this.hp=0;
        }else{
            this.hp = this.hp-danio;
        }
        this.hpCambia.emit(this.hp);
    }

}