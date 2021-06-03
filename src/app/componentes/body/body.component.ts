import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  comentarios: any [] = [{
    nombre: "Hugo Copca",
    alias: "@hugo",
    comentario: "Framework Angular sigue creciendo."
  },
  {
    nombre: "John Papa",
    alias:  "@JP",
    comentario: "Gracias por ver"
  }];

  nombre: any;
  comentario: any;

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentario(){
    console.log(this.nombre);
    console.log(this.comentario);
    
    let comentarioAux = {
      nombre: this.nombre,
      alias: `@ ${this.nombre}`,
      comentario: this.comentario
    }
    this.comentarios.push(comentarioAux);
  }

  eliminar(indice: any){
    this.comentarios.splice(indice, 1);
  }
}
