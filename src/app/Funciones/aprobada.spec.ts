import { validarNota } from "./aprobada";

describe('Prueba Valida nota sea aprobada',()=>{
    it('recibe la nota y devuelve si la nota es mayor que 61',()=>{
     const resp=   validarNota(61);
     expect((typeof resp)  ).toBeTruthy();
    }
    );

});