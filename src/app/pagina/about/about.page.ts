import { Component, OnInit } from '@angular/core';
import { MaquiagemService } from 'src/app/servicos/maquiagem.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  maquiagens: any[] = [];

  constructor(private service: MaquiagemService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.maquiagens = response;
    });
  }

}
