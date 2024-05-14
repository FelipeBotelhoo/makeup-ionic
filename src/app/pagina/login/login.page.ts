import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goLogin(){
    this.navCtrl.navigateForward("logincerto");
  }

  goSignin(){
    this.navCtrl.navigateForward("signin");
  }

}
