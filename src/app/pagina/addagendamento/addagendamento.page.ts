import { Routes, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { Agenda, AgendaService } from 'src/app/servicos/agenda.service';
import { Maquiagem, MaquiagemService } from 'src/app/servicos/maquiagem.service';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-addagendamento',
  templateUrl: './addagendamento.page.html',
  styleUrls: ['./addagendamento.page.scss'],
})
export class AddagendamentoPage implements OnInit {

  funcionarios: any[] = [];

  maquiagens: any[] = [];

  @Input() a!: Agenda;

  modal = true;

  visualizar = false;

  botao = false;

  pagamento = false;

  dados = {
    idUsuario: '',
    funcionario: '',
    dataAgenda: '',
    horario: '',
    maquiagem: '',
    pagamento: '',
    situacao: '',
    valor: '',
  };

  constructor(private navParams: NavParams,private toastCtrl: ToastController, private route: ActivatedRoute, private modalCtrl: ModalController, 
    private service: AgendaService , private navCtrl:NavController, private maquiagemService: MaquiagemService, private elementRef: ElementRef, private usuarioService: UsuarioService) { }

  ngOnInit() {
    if(this.dados != null){
      this.botao=true;
    }
    this.dados.idUsuario = localStorage.getItem('userId') || '';
    if (this.navParams.get('a')) {
      this.visualizar = true;
      this.botao = false;
      this.dados = this.navParams.get('a');
      if(this.dados.situacao === 'Pendente'){
        this.pagamento = true;
      }else{
        this.pagamento = false;
      }
    }

    this.usuarioService.getFuncionariosIdAcesso(2).subscribe(response => {
      this.funcionarios = response;
    });
    
    this.route.queryParams.subscribe(params => {
      if(params && params['menu']){
        this.modal = false;
      }
    });

    this.maquiagemService.getAll().subscribe(response => {
      this.maquiagens = response;
    });

    const agendarButton = this.elementRef.nativeElement.querySelector('#agendarBtn');
    agendarButton.addEventListener('click', () => {
    });

   this.atualizarValorMaquiagem();

  this.ionViewDidEnter();

   
  }

  ionViewDidEnter() {
    this.atualizarValorMaquiagem();
  }

  fecharModal(){
    // fecha o modal
    this.modalCtrl.dismiss();
  }


  enviando(form: NgForm){

     function isUndefined(value: any) {
      return value === undefined;
    }
    const agenda = form.value;
    if (this.dados.idUsuario === '' || this.dados.idUsuario === null) {
      this.mensagem('preencha o idUsuario');
    } else if (this.dados.funcionario === '' || this.dados.funcionario === null) {
      this.mensagem('Escolha o funcionário');
    }  else if (this.dados.dataAgenda === '' || this.dados.dataAgenda === null) {
      this.mensagem('Escolha uma data');
    }  else if (this.dados.horario === '' || this.dados.horario === null) {
      this.mensagem('Escolha um horário');
    }  else if (this.dados.maquiagem === '' || this.dados.maquiagem === null) {
      this.mensagem('Escolha a maquiagem');
    }  else if (this.dados.pagamento === '' || this.dados.pagamento === null) {
      this.mensagem('Escolha a forma de pagamento');
    }

    else if (this.visualizar){
      this.service.update(agenda, this.a.idAgenda).subscribe(response =>{
         // fechar o modal
        
          this.modalCtrl.dismiss(response);
        })
    }
  }

  retorno(){
    this.navCtrl.back();
    }
    
  mensagem(msg:string){
    this.toastCtrl.create ({
      message: msg,
      duration: 3000,
      color: 'danger'
    }).then(toast =>{
      toast.present();
    })
  }

  formatarData() {
    const data = this.dados.dataAgenda;
    if (data.length === 2 || data.length === 5) {
      this.dados.dataAgenda += '/';
    }
  }
  
  formatarHorario() {
    const horario = this.dados.horario;
    if (horario.length === 2) {
      this.dados.horario += ':';
    }
  }

  validarNumeros(event: KeyboardEvent) {
    const tecla = event.key;
    const regex = /[0-9]/;
  
    if (!regex.test(tecla)) {
      event.preventDefault();
    }
  }  

  enviarAgendamento(form: NgForm) {
    
    if (this.dados.idUsuario === '' || this.dados.idUsuario === null) {
      this.mensagem('preencha o idUsuario');
    } else if (this.dados.funcionario === '' || this.dados.funcionario === null) {
      this.mensagem('escolha o funcionário');
    }  else if (this.dados.dataAgenda === '' || this.dados.dataAgenda === null) {
      this.mensagem('escolha a data');
    }  else if (this.dados.horario === '' || this.dados.horario === null) {
      this.mensagem('escolha um horário');
    }  else if (this.dados.maquiagem === '' || this.dados.maquiagem === null) {
      this.mensagem('escolha a maquiagem');
    }  else if (this.dados.pagamento === '' || this.dados.pagamento === null) {
      this.mensagem('escolha a forma de pagamento');
    } else 
      if(!this.visualizar){
    const maquiagemSelecionada = this.maquiagens.find(m => m.nomeMaquiagem === this.dados.maquiagem);
    const valorMaquiagem = maquiagemSelecionada ? maquiagemSelecionada.valor : 0;
  
    const agenda: Agenda = {
      ...form.value,
      valor: valorMaquiagem
    };

   
  
    if (form.valid) {
      this.service.create(agenda).subscribe(response => {
        
        if (this.modal) {
          window.location.reload();
          this.modalCtrl.dismiss(response);

        } else {
          this.retorno();
          this.presentToast();
        }
      });
    }
  }
  }
  
  

  atualizarValorMaquiagem() {
    const maquiagemSelecionada = this.maquiagens.find(m => m.nomeMaquiagem === this.dados.maquiagem);
    if (maquiagemSelecionada) {
      this.dados.valor = maquiagemSelecionada.valor;
    } else {
      this.dados.valor = '';
    }
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Agendamento concluído! Clique na data agendada para prosseguir com o pagamento',
      duration: 6000
    });

    await toast.present();
  }

  efetuarPagamento(){
    this.navCtrl.navigateForward('payment');
  }
  
}
