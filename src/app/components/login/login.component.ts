import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userLogin } from 'src/app/interfaces/userLogin';
import { UserService } from 'src/app/services/user.service';
import { FormControl, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';

  correoControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
  ]);

  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
  ) {}

  login()  {
    // Validamos que el usuario ingrese datos
    if (this.correo == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }
    const user: userLogin ={
      correo: this.correo,
      password: this.password
    }

    this.loading = true;

    this._userService.logIn(user).subscribe({
      next: (data) => {
        this.router.navigate(['/dashboard']);
        this.loading = false;
        this.toastr.success('Bienvenido','Exitoso');
        localStorage.setItem('token',data.token)
      },
      error: (e : HttpErrorResponse) => {
        this.loading = false;
      }
    })

  }

}
