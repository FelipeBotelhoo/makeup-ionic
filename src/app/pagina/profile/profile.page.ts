import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input() u!: Usuario;
  usuarios: Usuario[] = [];
  
  nome: any;
  email: any;
  telefoneUsuario: any;
  senha: any;
  cpf: any;
  editingEnabled: boolean = false;
  
  constructor(private navCtrl: NavController, private service: UsuarioService, private toastController: ToastController) { }
  
  dados: Usuario = {
    nomeUsuario: '',
    emailUsuario: '',
    telefoneUsuario: '',
    cpfUsuario: '',
    senhaUsuario: '',
    idUsuario: '',
    idAcesso: ''
  };
  ngOnInit() {
    const userId = localStorage.getItem('userId');
  
    if (userId) {
      this.service.getDados(userId).subscribe(
        (response: Usuario) => {
          this.dados = response;
          

    /*   console.log(this.dados); */
    });
    }
    }

    formatarTelefone() {
      const telefone = this.dados.telefoneUsuario;
      if (telefone) {
        const digits = telefone.replace(/\D/g, '');
        let formattedPhone = '';
    
        if (digits.length > 10) {
          formattedPhone = '(' + digits.substring(0, 2) + ') ' + digits.substring(2, 7) + '-' + digits.substring(7, 11);
        } else {
          formattedPhone = '(' + digits.substring(0, 2) + ') ' + digits.substring(2, 6) + '-' + digits.substring(6, 10);
        }
    
        this.dados.telefoneUsuario = formattedPhone;
      }
    }
    

  enableEditing() {
    this.editingEnabled = true;
  }

  atualizar(form: NgForm) {
  
      this.service.update(this.dados, this.dados.idUsuario).subscribe(
        (response: any) => {
          // Dados atualizados com sucesso
          console.log('Dados atualizados com sucesso:', response);
          this.presentToast();
        },
        (error: any) => {
          // Erro ao atualizar os dados
          console.error('Erro ao atualizar os dados:', error);
        }
      );
      this.editingEnabled = false;

    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Dados atualizados com sucesso!',
        duration: 4000
      });
  
      await toast.present();
    }
  }
