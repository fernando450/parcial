import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userRegister } from 'src/app/interfaces/userRegister';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  nombre: string = '';
  identificacion: string = '';
  direccion: string = '';
  telefono: string = '';
  correo: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) { }

  addUser(){
    //Validar que los campos del user no este nulos
    if(
      this.nombre == '' ||
      this.identificacion == '' ||
      this.direccion == '' ||
      this.telefono == '' ||
      this.correo == '' ||
      this.password == ''
    ){
      this.toastr.error('Todos los campos son obligatorios');
      return;
    }

    const user: userRegister ={
      nombre: this.nombre,
      identificacion: this.identificacion,
      direccion: this.direccion,
      telefono: this.telefono,
      correo: this.correo,
      password:  this.password,
      estado: true
    }

    this.loading = true;
    //Realizar la peticion
    this._userService.signIn(user).subscribe({
      next: () => {
        this.toastr.success('Usuario creado con exito','Usuario Registrado');
        this.loading = false;
        this.router.navigate(['/login']);
        this.nombre = '';
        this.identificacion = '';
        this.direccion = '';
        this.telefono = '';
        this.correo = '';
        this.password = '';
      },
      error: (e : HttpErrorResponse) => {
        this.loading = false;
      }
    })
  }
}
