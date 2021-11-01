import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContarService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  URL = 'http://localhost/backend/contar';

  constructor(
    private http: HttpClient, // requisições http
    private toastController: ToastController, // Toast
    private alertController: AlertController // Alert
  ) { }

  contar(): Observable<any> {
    console.log('Contar');
    return this.http.get(this.URL).pipe(
      map(retorno => retorno),
      catchError(error => this.exibirErroAlerta(error))
    );
  }

  async exibirErroAlerta(erro) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erro',
      // subHeader: 'Erro ao consultar a API',
      message: 'Erro ao consultar a API <br>' + erro.message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async exibirErroToast(erro) {
    console.log('Erro', erro);
      const toast = await this.toastController.create(
        {
          message: 'Erro ao consultar a API <br>' + erro.message,
          duration: 2000,
          color: 'danger',
          position: 'bottom'
        }
      );
      toast.present();
  }
}
