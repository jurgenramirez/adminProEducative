import { promedio } from "./promedio";

describe('Pruebas de Promedio',()=>{
    it('debe de retornar un numero',()=>{
        var arr=[61,61,61,61];
     const resp=   promedio(arr);
     expect((typeof resp)  ).toBe('number');
    }
    
    );

});