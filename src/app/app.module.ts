import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EscuelaComponent } from './escuela/escuela.component';
import { InicioComponent } from './inicio/inicio.component';
import { EscuelaService } from './escuela/escuela.service';
import { RegistrarescuelaComponent } from './escuela/registrarescuela/registrarescuela.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudianteComponent,
    EscuelaComponent,
    InicioComponent,
    RegistrarescuelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EscuelaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
