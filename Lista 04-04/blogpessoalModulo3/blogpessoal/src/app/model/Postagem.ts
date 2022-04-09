import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{

public id: number;

public titulo: string;

public descricao: string;

public anexo: string;

public data: Date;

public tema: Tema;

public usuario: Usuario;
}

//  "strictPropertyInitialization": false, =----- embaixo do strict tsconfig.json