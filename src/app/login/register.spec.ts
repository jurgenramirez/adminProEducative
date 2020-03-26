import { validarPassword } from "./register.component";


describe('Prueba de Registro',()=>{
    it('Validacion de password',()=>{
            const resp= validarPassword("s1","s1");
            expect( typeof resp).toBeTruthy();
    });
});