import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nomeUsuario: any;

  promotions: any[] = [];

  constructor(private navCtrl: NavController, private usuarioService: UsuarioService) {
    // Exemplo de dados das promoções
    this.promotions = [
      {
        id:1,
        image: 'https://images.pexels.com/photos/14375801/pexels-photo-14375801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Evento Dia de Los Muertos',
        description: 'Preparesse para comemorar 02/11! Desconto de 20% ao trazer uma amiga!',
      },
      {
        id:2,
        image: 'https://images.pexels.com/photos/14437584/pexels-photo-14437584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Brilhe no Verão',
        description: ' Durante todo o mês de janeiro, oferecemos um desconto exclusivo de 25% em todos os nossos serviços de maquiagem.',
      },
      {
        id:3,
        image: 'https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Beauty Day',
        description: 'Um dia inteiro dedicado a cuidar da sua beleza? Sim, é possível com a Makeup Queen! Apresentamos a promoção "Beauty Day", uma experiência de luxo que combina diversos serviços de maquiagem em um pacote especial.',
      },
    ];
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

  goPromotion(id:any){
    if(id==1){
      this.navCtrl.navigateForward('promotion1');
    }else if(id==2){
      this.navCtrl.navigateForward('promotion2');
    }else{
      this.navCtrl.navigateForward('promotion3');
    }
  }
  }
