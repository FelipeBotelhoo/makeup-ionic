import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsuarioService, Usuario } from 'src/app/servicos/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  telefone: any;
  cpf: any;
  nome: any;
  email: any;
  senha: any;

  constructor(private usuarioService: UsuarioService, navCtrl: NavController, private router: Router, private toastControler: ToastController) { }

  ngOnInit() {

  }

  formatarTelefone() {
    if (this.telefone) {
      let digits = this.telefone.replace(/\D/g, '');
      let formattedPhone = '';

      if (digits.length > 10) {
        formattedPhone = '(' + digits.substring(0, 2) + ')' + digits.substring(2, 7) + '-' + digits.substring(7, 11);
      } else {
        formattedPhone = '(' + digits.substring(0, 2) + ')' + digits.substring(2, 6) + '-' + digits.substring(6, 10);
      }

      this.telefone = formattedPhone;
    }
  }

  formatarCpf() {
    if (this.cpf) {
      let digits = this.cpf.replace(/\D/g, '');
      let formattedCpf = '';
      formattedCpf = digits.substring(0, 3) + '.' + digits.substring(3, 6) + '.' + digits.substring(6, 9) + '-' + digits.substring(9, 11);
      this.cpf = formattedCpf;
    }
  }
  cadastrar() {
    const usuario: Usuario = {
      idUsuario: '',
      nomeUsuario: this.nome,
      telefoneUsuario: this.telefone,
      emailUsuario: this.email,
      senhaUsuario: this.senha,
      cpfUsuario: this.cpf,
      idAcesso: ''
    };

    this.usuarioService.cadastrar(usuario).subscribe(
      () => {
        // Lógica após o cadastro ser concluído com sucesso
        this.router.navigate(['/logincerto']);
        this.presentToast();
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        this.presentToastErro();
      }
    );
  }

  async presentToast() {
    const toast = await this.toastControler.create({
      message: 'Cadastrado com sucesso!',
      duration: 4000
    });

    await toast.present();
  }

  async presentToastErro() {
    const toast = await this.toastControler.create({
      message: 'Preencha todos os campos!',
      duration: 4000
    });

    await toast.present();
  }

}
