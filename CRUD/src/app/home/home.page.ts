import { Component, OnInit } from '@angular/core';
import { ContarService } from '../services/contar.service';
import { ProdutoService } from '../services/produto.service';
import { Observable } from 'rxjs';
import { IProduto } from '../../model/IProduto.model';
import { delay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  quantidade = 0;
  listaProduto: Observable<IProduto[]>;
  // deletarProduto: Observable<any>;

  produto: IProduto = {
    descricao: '',
    preco: null,
    validade: null
  };

  id = 0;

  constructor(
    private contarService: ContarService,
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.contarService.contar().subscribe(
      (dados) => {
        this.quantidade = dados.quantidade;
        console.log('Quantidade', this.quantidade);
      }
    );
    // this.atualizar();
    this.listaProduto = this.produtoService.listar().pipe(delay(1000));
  }

  // ngOnInit() {
  //   this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  //   console.log(this.id);
  //   // eslint-disable-next-line eqeqeq
  //   if (this.id != 0) {
  //     this.produtoService.consultar(this.id).subscribe(
  //       retorno => {
  //         this.produto = retorno;
  //       }
  //     );
  //   }
  // }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  mostraAdd = true;

  onDrag(event) {
    //console.log(event.detail.ratio);
    this.mostraAdd = !(event.detail.ratio > 0.5);
  }

  mostrarBotao(){
    this.mostraAdd = true;
  }

  atualizar(){
    this.listaProduto = this.produtoService.listar().pipe(delay(3000));
  }

  editar(id){
    this.router.navigate(['/cadastro/' + id]);
    this.atualizar();
    this.mostrarBotao();
  }

  deletar(id){
    // id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    // eslint-disable-next-line eqeqeq
    if (id != 0) {
      this.produtoService.deletar(id).subscribe(
        retorno => {
          this.produto = retorno;
        }
      );
    }
    this.atualizar();
    this.mostrarBotao();
  }

}
