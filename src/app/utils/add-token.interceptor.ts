import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          'x-token': token
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let mensajeError = '¡Ocurrió un error desconocido!';
        console.log(error);
        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente o de red
          mensajeError = `Error: ${error.error.message}`;
        } else {
          // Error del lado del servidor
          switch (error.status) {
            case 400:
              mensajeError = error.error.message;
              break;
            case 401:
              mensajeError = 'Acceso no autorizado. Por favor, inicia sesión nuevamente.';
              this.router.navigate(['/login']);
              break;
            case 404:
              mensajeError = error.error.message;
              break;
            case 500:
              mensajeError = 'Error interno del servidor. Por favor, intenta nuevamente más tarde.';
              break;
            default:
              mensajeError = `Upps.. Contactar al administrador. GRACIAS`;
          }
        }

        this.toastr.error(mensajeError, 'Error');
        return throwError(() => new Error(mensajeError));
      })
    );
  }
}
