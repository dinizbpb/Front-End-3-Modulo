import { Postagem } from "./Postagem";

export class Tema{

public id: number;

public nome: string;

public postagem:Postagem[];

}



//  "strictPropertyInitialization": false, =----- embaixo do strict tsconfig.json