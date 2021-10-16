import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IProduto } from 'src/model/IProduto.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  URL = 'http://localhost/PHP_API/produto/';
  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  listar(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  inserir(produto): Observable<any> {
    return this.http.post(this.URL + 'inserir/', produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  consultar(id): Observable<IProduto> {
    return this.http.get<IProduto>(this.URL + id).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  alterar(produto): Observable<any> {
    return this.http.put(this.URL + 'alterar/', produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  deletar(id): Observable<any> {
    return this.http.delete(this.URL + 'excluir/', id).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  async exibirToast(mensagem, cor) {
      const toast = await this.toastController.create(
        {
          message: mensagem,
          duration: 3000,
          color: cor,
          position: 'bottom'
        }
      );
      toast.present();
  }

  exibeErro(erro): Observable<any>{
    console.log(erro);
    return null;
  }
}
