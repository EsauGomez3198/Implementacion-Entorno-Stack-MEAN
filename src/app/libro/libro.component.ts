import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../models/libro.interface';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  
  @Input() libro!:Libro;
  
  constructor() { }

  ngOnInit(): void {
  }

}
