import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  nomes:any[]=[];

  constructor() {
    this.nomes = [
      {
        name: "Usuário"
      }
    ];
  }

}
