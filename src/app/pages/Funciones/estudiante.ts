
//Promedio general de estudiante.

export class Estudiante{
    promedio: number;
    constructor(){
        this.promedio =100;
    }

    restarPromedio(rs :number){
        if(rs>=this.promedio){
                this.promedio=0;
        }else{
            this.promedio = this.promedio -rs;
        }

        return this.promedio;

    }
    
}