import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    usuario: '',
    senha: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }


  entrar(){
    this.authService.entrar(this.login.usuario, this.login.senha).subscribe(
      retorno => {
        this.authService.exibirToast('Bem-vindo', 'success');
        this.router.navigate(['/home']);
      }
    );
  }
}
