import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[]
  tituloPostagem: string;


  tema: Tema = new Tema();
  listaTemas: Tema[]
  idTema: number
  descricaoTema:string;




  usuario: Usuario = new Usuario();
  idUsuario = environment.id;


  key = 'data'
  reverse = true;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {



    if (environment.token == '') {
      this.alertas.showAlertDanger("sessão expirada");
      this.router.navigate(['/entrar'])
    }

   

    this.findAllTemas();
    this.findAllPostagem();


  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }


  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }


  findAllPostagem() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    })
  }



  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  findByTituloPostagem() {
    if (this.tituloPostagem === '') {
     this.findAllPostagem();
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPostagem).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp;
      })
    }
  }

  findByDescricaoTema() {
    if (this.descricaoTema === ''){
      this.findAllTemas()
    } else {
      this.temaService.getByDescricaoTema(this.descricaoTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }


  publicarPostagem() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.id = this.idUsuario;
    this.postagem.usuario = this.usuario;

    this.postagemService.criarPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.findAllPostagem();
    })

  }

}
