import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion1',
  templateUrl: './promotion1.page.html',
  styleUrls: ['./promotion1.page.scss'],
})
export class Promotion1Page implements OnInit {
  promotions: any[] = [];

  constructor() { 
    this.promotions = [
      {
        image: 'https://images.pexels.com/photos/14375801/pexels-photo-14375801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Evento Dia de Los Muertos',
        description: 'Prepare-se para comemorar o Dia de los Muertos com estilo! Na Makeup Queen, temos uma promoção especial para você e sua amiga. No dia 2 de novembro, traga uma amiga para desfrutar de um desconto exclusivo de 20% em nossos serviços de maquiagem! '+

        'O Dia de los Muertos é uma celebração colorida e vibrante que homenageia aqueles que partiram, celebrando sua memória com alegria e gratidão. E não há maneira melhor de se preparar para essa data especial do que realçar sua beleza com a ajuda das nossas talentosas maquiadoras. '+
        
        'Nossa equipe de maquiadoras da Makeup Queen está pronta para criar looks incríveis e personalizados, inspirados na rica tradição do Dia de los Muertos. Seja você uma calavera ou queira destacar suas características favoritas, nossas maquiadoras irão garantir que você esteja deslumbrante e pronta para celebrar. '+
        
        'Aproveite esta oportunidade única de compartilhar essa experiência com sua amiga. Traga-a para se juntar a você em nosso salão de maquiagem e ambas receberão um desconto especial de 20% em qualquer serviço selecionado. É uma maneira perfeita de passar um tempo divertido juntas, enquanto se preparam para a ocasião. '+
        
        'Lembre-se de agendar seu horário com antecedência para garantir sua vaga e aproveitar ao máximo essa promoção. Entre no espírito festivo do Dia de los Muertos e venha nos visitar no Makeup Queen, o seu salão de maquiagem de confiança. '+
        
        'Celebre o Dia de los Muertos com estilo e beleza na Makeup Queen! Esperamos ansiosamente por você e sua amiga para tornar essa data especial ainda mais memorável. Aproveite o desconto de 20% e embarque nessa jornada de cores e celebração conosco!'
      },
    ];
  }

  ngOnInit() {
  }

}
