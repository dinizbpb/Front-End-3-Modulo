import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private html:HttpClient) { 

  }




  Entrar(userLogin:UserLogin):Observable<UserLogin>{
    return this.html.post<UserLogin>(' https://blogpessoalbrunodiniz.herokuapp.com/usuarios/logar',userLogin);
  }



  Cadastrar(user:User):Observable<User>{
    return this.html.post<User>(' https://blogpessoalbrunodiniz.herokuapp.com/usuarios/cadastrar',user);

  }


  logado(){
    let ok:boolean=false;


    if(environment.token!=''){
      ok=true;
    }

    return ok;
  }

}
