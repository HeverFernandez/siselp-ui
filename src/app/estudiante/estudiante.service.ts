import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { ListaEstudiantes } from './estudiante.json';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  //listaEstudiantesService = ListaEstudiantes;

  api = URL_SERVICIOS

  constructor(
    private http: HttpClient,
  ) {

   }

  listarEstudiantes(): any{
    return ListaEstudiantes;
  }

  listarEstudiantesByEscuela(idescuela:number): Observable<any>{
    return this.http.get(this.api+"/estudiante/list?idescuela="+idescuela)
  }

}
