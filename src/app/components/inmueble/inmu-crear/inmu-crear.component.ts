import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inmueble } from 'src/app/interfaces/inmuebles';
import { ErrorService } from 'src/app/services/error.service';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-inmu-crear',
  templateUrl: './inmu-crear.component.html',
  styleUrls: ['./inmu-crear.component.css']
})
export class InmuCrearComponent {
  //Inmueble
  inmueble: inmueble = {
    numero_referencia: '',
    tipo: '',
    superficie: 0,
    nuevo: false,
    direccion: '',
    precio: 0,
    estado: 'EN VENTA',
    propietario: {
      nombre: '',
      correo: '',
      celular_contacto: '',
      telefono_contacto: ''
    },
    caracteristicas: {
      numero_habitaciones: 0,
      numero_banos: 0,
      piscina: false,
      acondicionado: false,
      parqueadero: false,
      servicios: {
        gas: false,
        electrico: false,
        acueducto: false
      },
      otro: ''
    },
    oficina: '',
    visitas: []
  };
  //
  loading: boolean = false;
  constructor(
    private _inmuebleService: InmueblesService,
    private toastr: ToastrService,
    private router: Router,
    private _errorService: ErrorService,
  ) { }
   // crear inmueble
  crearInmueble(){
    this.loading = true;
    this._inmuebleService.crearInmueble(this.inmueble).subscribe({
      next: () => {
        this.toastr.success('Inmueble Creado con Exito','Inmueble');
        this.loading = false;
        this.router.navigate(['/inmueble']);
      },
      error: (e : HttpErrorResponse) => {
        this.loading = false;
      }
    });
  }
}
