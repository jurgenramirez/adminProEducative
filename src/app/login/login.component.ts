import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export function logear(usuario:string, passw:string){
  //consulta a base de datos
  var user =usuario;
  var pass = pass;

  if(usuario==usuario && pass==pass) return true;
  return false;
}