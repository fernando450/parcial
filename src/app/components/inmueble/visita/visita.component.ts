import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Visita } from 'src/app/interfaces/visita';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})
export class VisitaComponent {
  visita: Visita = {
    cliente: '',
    fecha: new Date(),
    comentario: '',
    estado: 'POR VISITAR',
  };
  numeroReferencia: string = '';
  loading: boolean = false;

  constructor(
    private route: Router,
    private inmuebleService: InmueblesService,
    private toastr: ToastrService
  ) {}

  //Crear visita
  crearVisita() {
    this.loading = true;
    this.inmuebleService.crearVisita(this.numeroReferencia, this.visita).subscribe({
      next: () => {
        this.loading = false;
        this.toastr.success('Visita creada exitosamente','Vista Registrada');
        this.route.navigate(['/inmueble']);
      },
      error: (e) => {
        this.loading = false;
      }
    });
  }
}
