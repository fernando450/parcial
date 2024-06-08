import { Component } from '@angular/core';
import { inmueble } from 'src/app/interfaces/inmuebles';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  referencia: string = '';
  inmueble: inmueble | null = null;
  mensajeError: string | null = null;
  loading: boolean = false;


  constructor(private inmuebleService: InmueblesService) {}

  buscar() {
    this.loading = true;
    this.inmuebleService.getInmueble(this.referencia).subscribe(
      inmueble => {
        this.loading = false;
        this.inmueble = inmueble;
        this.mensajeError = inmueble ? null : 'Inmueble no encontrado';
      },
      error => {
        this.loading = false;
        this.inmueble = null;
        this.mensajeError = 'Error al buscar el inmueble';
      }
    );
  }
}
