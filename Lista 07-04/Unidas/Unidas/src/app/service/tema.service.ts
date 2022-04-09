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
    private http:HttpClient
    ) { }


    token={
      headers:new HttpHeaders().set('Authorization',environment.token)
    }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://unidasheroku.herokuapp.com/temas', this.token);
  }

  getByNomeTema(nomes: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`https://unidasheroku.herokuapp.com/temas/nomes/${nomes}`, this.token);
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://unidasheroku.herokuapp.com/temas/${id}`, this.token);
  }

  createTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://unidasheroku.herokuapp.com/temas', tema, this.token)
  }


  editTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://unidasheroku.herokuapp.com/temas', tema, this.token);
  }


  deleteTema(id: number) {
    return this.http.delete(`https://unidasheroku.herokuapp.com/temas/${id}`, this.token)
  }


}