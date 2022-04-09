import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private temaService: TemaService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas:AlertasService
  ) { }
  ngOnInit(): void {



    if (environment.token == '') {
      this.alertas.showAlertDanger("sessão expirada");
      this.router.navigate(['/entrar'])
    }


    let id = this.route.snapshot.params['id']

    this.findByIdPostagem(id);
    this.findAllTema();
  }


 



findAllTema(){
  this.temaService.getAllTema().subscribe((resp: Tema[])=>{
    this.listaTemas=resp;
  })
}


findByIdTema(){
  this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
    this.tema=resp;
  })
}



findByIdPostagem(id:number) {
  this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
    this.postagem = resp;

  })
}



atualizarPostagem() {
  this.postagemService.editarPostagem(this.postagem).subscribe((resp: Postagem) => {
    this.postagem = resp;
    this.alertas.showAlertSuccess("editado com sucesso!")
    this.router.navigate(['/home'])
  })

}

}
