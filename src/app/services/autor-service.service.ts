import { Injectable } from '@angular/core';
import { Autor } from '../models/autor.interface';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
//***********
private autores:Autor[]=[
  {
    id: 1,
    nombre: 'Salvador Salazar Arrué',
    pais: 'Sonsonate, El Salvador',
    genero: 'Narraciones, novelas, poemarios y cuentos',
    year: 1899,
    foto: 'https://www.forbes.com.mx/2016/06/Salvador_Salazar_Arrue-e1465402622523.jpg',
    libros: [
      {id: 1, nombre: 'El Cristo Negro, publicado', year: 1926, portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cristo_Negro_Salarrue01.jpg/256px-Cristo_Negro_Salarrue01.jpg"},
      {id: 2, nombre:'El Señor de la Burbuja', year: 1929, portada: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598330589l/55111958._SY475_.jpg"},
      {id: 3, nombre:'cuentos de barro', year: 1933, portada: "https://m.media-amazon.com/images/I/41QZEmcDLsL.jpg"}
    ]
},
{
  id: 2,
  nombre: 'Francisco Gavidia',
  pais: 'San Miguel, El Salvador',
  genero: 'Filosofía, música e historia',
  year: 1863,
  foto: 'https://cdn.forbes.com.mx/2016/06/Captura-de-pantalla-2016-06-09-a-las-13.28.03.png',
  libros: [
    {id: 1, nombre: 'Torre de marfil', year: 1920, portada: "https://images-na.ssl-images-amazon.com/images/I/31RBga9L8GS._SX320_BO1,204,203,200_.jpg"},
    {id: 2, nombre: "La princesa Catalá", year: 1944, portada: "https://c8.alamy.com/compes/myh66d/ingles-josefina-de-baden-deutsch-prinzession-josephine-von-baden-1813-1900-polski-jozefina-badenska-italiano-giuseppina-di-baden-portugues-josefina-de-baden-catala-la-princesa-josepa-de-baden-princesa-de-hohenzollern-sigmaringen-pre-1900-283-josephinebaden-myh66d.jpg"}
  ]
},
{
  id: 3,
  nombre: 'Estiven Lindo',
  pais: 'Chalatenango, El Salvador',
  genero: 'Poema y filosofo',
  year: 1996,
  foto: 'https://lh3.googleusercontent.com/a-/AFdZucr96al58Lsr4T5yVJAe5Oy_tDG-bwGxENhwuJBcEw=s1024-p-k-no-mo',
  libros: [
    {id: 1, nombre: 'El amzuelo de Dios', year: 2005, portada: "http://hugolindo.website/imagenes/el-anzuelo-de-dios-hugo-lindo-D_NQ_NP_13371-MLC2965922439_072012-F.jpg"}
  ]
},
{
  id: 4,
  nombre: 'Álvaro Menen Desleal',
  pais: 'Santa Ana, El Salvador',
  genero: 'Novelista',
  year: 1932,
  foto: 'https://cdn.forbes.com.mx/2016/06/Captura-de-pantalla-2016-06-09-a-las-11.07.08.png',
  libros: [
    {id: 1, nombre: 'La ilustre familia androide', year: 1968, portada: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461671131l/30026011._SX318_.jpg"},
    {id: 2, nombre: 'Luz negra', year: 1960, portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/EC1QA1SXoAcvYBh.jpg/220px-EC1QA1SXoAcvYBh.jpg"},
  ]
}
];

//***********
  constructor() { }

  ListadoAutores():Autor[]{
    return this.autores;
  }

  InsertarAutor(autor:Autor){
    this.autores.push(autor);
  }

  ObtenerUno(id:number):Autor{
    
    return <Autor>this.autores.find(item=>item.id===id)

  }

}
