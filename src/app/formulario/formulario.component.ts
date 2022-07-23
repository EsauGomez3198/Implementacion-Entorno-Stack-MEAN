import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo:string='Clase 06 - Formularios'


  // Definir objeto formgroup

  miFormulario!: FormGroup;

  constructor() { 

    this.miFormulario = new FormGroup({

      'nombre': new FormControl(''),
      'email': new FormControl('')

    })

  }




  ngOnInit(): void {
    
  }
  enviarDatos(){
    
  }
}
