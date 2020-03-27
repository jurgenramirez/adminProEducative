import { FormularioRegister } from "./formregister";
import { FormBuilder } from '@angular/forms';


describe(' Register',()=>{
    let componente: FormularioRegister
    beforeEach(()=>{
            componente= new FormularioRegister(new FormBuilder());
    });
    it('Debe de crear formulario con cuatro campos, nombre, email,password,confirmacion password',()=>{
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
        expect(componente.form.contains('nombre')).toBeTruthy();
        expect(componente.form.contains('passwordValid')).toBeTruthy();
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

     it('Validiacion de contrase?as',()=>{
        const control = componente.form.get('password');
        const control2 = componente.form.get('passwordValid');
        control.setValue('123');
        control2.setValue('123');
        expect(control.value).toBe(control2.value);
 
     });


});