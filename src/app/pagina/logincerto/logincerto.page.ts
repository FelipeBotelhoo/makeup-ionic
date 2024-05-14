import { UsuarioService } from 'src/app/servicos/usuario.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-logincerto',
  templateUrl: './logincerto.page.html',
  styleUrls: ['./logincerto.page.scss'],
})
export class LogincertoPage implements OnInit {

  dados ={
    emailUsuario:'',
    senhaUsuario:'',
    idAcesso:''
  }
   mensage:string ='';

  constructor(private service: UsuarioService, private navCtrl:NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  logar(form: NgForm){
    const usuario = form.value;

    let users: any[] = [];
    
    if (usuario.emailUsuario == '') { this.alerta('Preencha o Email'); } 
    else if (usuario.senhaUsuario == '') { this.alerta('Preencha a Senha'); } 
    else { this.service.getEmail(usuario.emailUsuario, usuario.senhaUsuario).subscribe(response =>{
         //populo o array users com os dados enviado pelo api.php
          users.push(response);
          // uma variável para tratar senha
          let senhaUsuario = users.map(user => user.senhaUsuario); 
          let idA : any = users.map(user => user.idAcesso);
          let idUser : any =users.map(user => user.idUsuario);
          let emailUsuario = users.map(user => user.emailUsuario);
     
          // se a senha veio indefinida
          if (senhaUsuario.every(isUndefined) || emailUsuario.every(isUndefined)) {
            this.alerta('Email ou senha inválidos');
          } else {

             if( idA == 3){

                 localStorage.setItem('userId', idUser );
                 this.navCtrl.navigateForward('/tabs/tabs/tab1');

            } else{
              this.alertaLogin('Se você for um funcionario ou administrador, por favor entre no site ou pelo serviço desktop.');
            }
            
          }
          // função para testar os retornos indefinidos
          function isUndefined(value: any) {
            return value === undefined;
          }
        })
    }
  }
  
  alerta(texto:string){
    this.toastCtrl.create({
      message: texto,
      duration: 2000,
      color: 'danger'
    }).then(toast =>{
      toast.present();
    })
  }

  alertaLogin(texto:string){
    this.toastCtrl.create({
      message: texto,
      duration: 5000,
      color: 'danger'
    }).then(toast =>{
      toast.present();
    })
  }
}


