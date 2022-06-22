import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscuelaComponent } from './escuela/escuela.component';
import { RegistrarescuelaComponent } from './escuela/registrarescuela/registrarescuela.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path: 'estudiantes',
    component: EstudianteComponent
  },
  {
    path:'escuelas',
    component: EscuelaComponent
  },
  {
    path:'escuelas/registro',
    component: RegistrarescuelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
