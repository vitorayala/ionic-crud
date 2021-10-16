import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IAuth } from 'src/model/IAuth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost/backend/';
  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  entrar(usuario, senha): Observable<any> {
    return this.http.post(this.url + 'auth', { usuario, senha }).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirToast(erro, 'danger'))
    );
  }

  async exibirToast(erro, cor) {
    const toast = await this.toastController.create(
      {
        message: erro,
        duration: 3000,
        color: cor,
        position: 'bottom'
      }
    );
    toast.present();
}

}
