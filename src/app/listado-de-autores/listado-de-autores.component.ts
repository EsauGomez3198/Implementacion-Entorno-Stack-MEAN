import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-de-autores',
  templateUrl: './listado-de-autores.component.html',
  styleUrls: ['./listado-de-autores.component.css']
})
export class ListadoDeAutoresComponent implements OnInit {

  titulo:string='Administración de autores'

  autores:any[]=[
    {
      id:1,
      nombre:'Claudia Lars',
      pais:'El Salvador',
      genero:'Cuentos',
      year:1930,
      libros:[
        {id:1,nombre:'Estrellas en el pozo',year:1950},
        {id:2,nombre:'Cuentos de miedo',year:1960}
      ]
  },
  {
    id:2,
    nombre:'Alfredo Espino',
    pais:'El Salvador',
    genero:'Cuentos',
    year:1920,
    libros:[
      {id:1,nombre:'Cuentos de barro',year:1950}
    ]
}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
