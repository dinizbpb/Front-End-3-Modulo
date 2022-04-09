import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }



token={
  headers: new HttpHeaders().set('Authorization',environment.token)
}


getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('http://localhost:8080/temas',this.token)
}



getByIdTema(id:number):Observable<Tema>{
  return this.http.get<Tema>(`http://localhost:8080/temas/${id}`,this.token);
}

getByDescricaoTema(descricao:string):Observable<Tema[]>{
  return this.http.get<Tema[]>(`http://localhost:8080/temas/descricao/${descricao}`,this.token)
}

criarTema(tema: Tema):Observable<Tema>{
return this.http.post<Tema>('http://localhost:8080/temas',tema,this.token)

}



editarTema(tema: Tema):Observable<Tema>{
  return this.http.put<Tema>('http://localhost:8080/temas',tema,this.token);
}




// !!!atencao aqui tem que usar esse acento aqui oh crases na area do endereço   ````
deleteTema(id: number){
  return this.http.delete(`http://localhost:8080/temas/${id}`,this.token)
}





}
