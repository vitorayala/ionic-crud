import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from '../../model/IProduto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  produto: IProduto = {
    descricao: '',
    preco: null,
    validade: null
  };

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    id = 0;

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
    // eslint-disable-next-line eqeqeq
    if (this.id != 0) {
      this.produtoService.consultar(this.id).subscribe(
        retorno => {
          this.produto = retorno;
        }
      );
    }
  }

  salvar() {
    console.log(this.produto);
    if (this.validarCampos()) {
      // eslint-disable-next-line eqeqeq
      if (this.id == 0) {
        this.inserir();
      }else{
        this.alterar();
      }
      this.router.navigate(['/home']);
    }
  }

  inserir() {
    this.produtoService.inserir(this.produto).subscribe(
      retorno => {
        this.produtoService.exibirToast(retorno.mensagem, 'success');
      }
    );
  }

  alterar() {
    this.produtoService.alterar(this.produto).subscribe(
      retorno => {
        this.produtoService.exibirToast(retorno.mensagem, 'warning');
      }
    );
  }

  validarCampos(): boolean {
    // eslint-disable-next-line eqeqeq
    if (this.produto.descricao == '') {
      this.produtoService.exibirToast('O Campo descrição é obrigatório', 'danger');
      return false;
    } else if (this.produto.preco <= 0) {
      this.produtoService.exibirToast('O Campo preço deve ser maior que Zero', 'danger');
      return false;
    } else if (this.produto.validade == null) {
      this.produtoService.exibirToast('O Campo data é obrigatório', 'danger');
      return false;
    }
    return true;
  }

}
