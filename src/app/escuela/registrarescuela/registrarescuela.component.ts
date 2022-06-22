import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Escuela } from '../escuela';
import { EscuelaService } from '../escuela.service';

@Component({
  selector: 'app-registrarescuela',
  templateUrl: './registrarescuela.component.html'
})
export class RegistrarescuelaComponent implements OnInit {

  titulo:String = "Registrar escuela";
  escuela: Escuela = new Escuela();

  constructor(private escuelaService: EscuelaService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  public registrarEscuela(): void{
    this.escuelaService.registrarEscuela(this.escuela).subscribe(
      // response => this.router.navigate(['/escuelas'])
      escuela => {
        this.router.navigate(['/escuelas'])
        Swal.fire('La escuela se ha registro satisfactoriamente')
      }
    )
  }

}
