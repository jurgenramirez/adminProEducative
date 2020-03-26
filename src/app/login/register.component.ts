import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//confima que ambas constra?as son iguales
export function validarPassword(pas1:string, pas2:string){
  if(pas1==pas2) return true;
  return false;
}


