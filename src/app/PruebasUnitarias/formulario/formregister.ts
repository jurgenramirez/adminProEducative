import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormularioRegister{
    form: FormGroup
    constructor(fb: FormBuilder){
        this.form=fb.group({
            nombre: ['',[Validators.required]],
            email:['',[Validators.required,Validators.email]],
            password:['',[Validators.required]],
            passwordValid:['',[Validators.required]]
            
        })
    }
}