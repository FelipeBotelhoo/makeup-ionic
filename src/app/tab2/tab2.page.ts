import { Agenda, AgendaService } from '../servicos/agenda.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { AddagendamentoPage } from '../pagina/addagendamento/addagendamento.page';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  agendas: Agenda[] = [];
  @Input() a!: Agenda;
botao = false;
  constructor(
    private service: AgendaService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  dados: Agenda = {
    idAgenda: '',
    idUsuario: '',
    funcionario: '',
    dataAgenda: '',
    horario: '',
    maquiagem: '',
    pagamento: '',
    situacao: '',
    valor: ''
  };

  ngOnInit() {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.service.getDados(userId).subscribe(
        (response: Agenda[]) => {
          if (response.length > 0) {
            this.agendas = response;
          }
          console.log(this.agendas); // Verificar se os dados foram obtidos corretamente
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  async novoAgendamento() {
    const modal = await this.modalCtrl.create({
      component: AddagendamentoPage,
      componentProps: {
        this: this.botao = true,
        idUsuario: localStorage.getItem('userId')
      }
    });
  
    modal.onDidDismiss().then(({ data }) => {
      if (data) {
        // Atualize os agendamentos caso haja retorno de dados
        this.agendas.push(data);
      }
    });
  
    return await modal.present();
  }

  visualizar(a: Agenda) {
    this.modalCtrl.create({
      component: AddagendamentoPage,
      componentProps: { 
        idUsuario: this.dados.idUsuario, // Passando o idUsuario como parâmetro
      a: a
       }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({ data }) => {
      if (data) {
        // Se houver dados de retorno, atualize os agendamentos
        const index = this.agendas.findIndex(item => item.idAgenda === data.idAgenda);
        if (index > -1) {
          this.agendas[index] = data;
        }
      }
    })
  }
}
