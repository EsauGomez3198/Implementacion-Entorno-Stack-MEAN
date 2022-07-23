import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeAutoresComponent } from './listado-de-autores/listado-de-autores.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AutorComponent } from './autor/autor.component';
import { FormsModule } from '@angular/forms';
import { LibroComponent } from './libro/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeAutoresComponent,
    NavBarComponent,
    AutorComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
