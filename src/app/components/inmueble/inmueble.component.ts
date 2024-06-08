import { Component, OnInit } from '@angular/core';
import { inmueble } from 'src/app/interfaces/inmuebles';
import { InmueblesService } from 'src/app/services/inmuebles.service';


@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {

  listaInmuebles: inmueble[] = [];

  constructor(
    private _inmuebleService: InmueblesService,
  ) { }

  ngOnInit(): void {
    this.getInmueble();
  }

  getInmueble(){
    this._inmuebleService.getInmuebles().subscribe(data => {
      this.listaInmuebles = data;
      console.log(data);
    });
  }

}
