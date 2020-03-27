import { FormularioLogin } from "./formulario/formulariologin";
import {FormBuilder} from '@angular/forms';

 describe('Login de Acceso',()=>{
    let componente: FormularioLogin;
    beforeEach(()=>{
            componente = new FormularioLogin(new FormBuilder());

    });
    it('Debe de crear un formulario con dos campos, email y password',()=>{
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();

    });
    it('Email, debe ser obligatorio',()=>{
       const control = componente.form.get('email');
       control.setValue('');
       expect(control.valid).toBeFalsy();

    });
    it('Email, debe ser un correo valido',()=>{
        const control = componente.form.get('email');
        control.setValue('jurgenramirez@gmail.com');
        expect(control.valid).toBeTruthy();
 
     });


});