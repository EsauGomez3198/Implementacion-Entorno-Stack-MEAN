import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeAutoresComponent } from './listado-de-autores/listado-de-autores.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AutorComponent } from './autor/autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibroComponent } from './libro/libro.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeAutoresComponent,
    NavBarComponent,
    AutorComponent,
    LibroComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
