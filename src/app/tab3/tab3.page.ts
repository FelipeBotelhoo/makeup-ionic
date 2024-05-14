import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nomeUsuario: any;

  constructor(private navCtrl: NavController, private usuarioService: UsuarioService, private toastController: ToastController) {}

  goProfile(){
    this.navCtrl.navigateForward('profile');
  }

  goAgendamento(){
    this.navCtrl.navigateForward('tabs/tabs/tab2');
  }

  exit() {
    this.navCtrl.navigateForward('');
    this.presentToast();
    localStorage.removeItem('userId');
  }

  goAbout(){
    this.navCtrl.navigateForward('about');
  }

  goHelp(){
    this.navCtrl.navigateForward('help');
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.usuarioService.getNomeUsuario(userId).subscribe(
        nomeUsuario => {
          console.log('Nome de usuário:', nomeUsuario);
          this.nomeUsuario = nomeUsuario;
        },
        error => {
          console.log('Erro ao obter o nome do usuário:', error);
        }
      );
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Até mais tarde, '+this.nomeUsuario,
      duration: 4000
    });

    await toast.present();
  }

}
