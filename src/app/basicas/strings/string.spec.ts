import { mensaje } from "./string";

describe('Pruebas de String',()=>{
    it('debe de regresar un string',()=>{
     const resp=   mensaje('Fernando');
     expect((typeof resp)  ).toBe('string');
    }
    
    );

});