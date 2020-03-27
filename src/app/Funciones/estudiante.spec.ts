import { Estudiante } from "./estudiante";

describe('Prueba de promedio general',()=>{
        it('Reducce Promedio',()=>{
            const estudiante = new Estudiante();
            const resp= estudiante.restarPromedio(20);
            expect(resp).toBeGreaterThanOrEqual(61) ;  
        });
});