import {Nota} from './asignacionNota';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';

describe('Prueba de Emitter al asignar nota',()=>{
    let nota: Nota;

    beforeEach(()=>  nota = new Nota() );
    it('Prueba de boton emiter, cuando se le asigna una nota a un alumno, que debe ser mayor o igual que 0',()=>{
        let nuevoHp=0;    
        nota.hpCambia.subscribe(hp=>{
                nuevoHp=hp;
            });
            nota.recibirValor(1000);

        expect(nuevoHp).toBe(0);
    });

    it('Prueba de boton emiter, cuando se le asigna una nota a un alumno',()=>{
        let nuevoHp=0;    
        nota.hpCambia.subscribe(hp=>{
                nuevoHp=hp;
            });
            nota.recibirValor(1000);

        expect(nuevoHp).toBe(0);
    });

    it('Validacion de nota, valida que un alumno tenga la nota aprobada mayor de 61',()=>{
        let nuevoHp=0;    
        nota.hpCambia.subscribe(hp=>{
                nuevoHp=hp;
            });
            nota.recibirValor(39);

        expect(nuevoHp).toBe(61);
    });
});