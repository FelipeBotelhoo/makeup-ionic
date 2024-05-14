import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion3',
  templateUrl: './promotion3.page.html',
  styleUrls: ['./promotion3.page.scss'],
})
export class Promotion3Page implements OnInit {
  promotions: any[] = [];

  constructor() { 
    this.promotions = [
      {
        image: 'https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Brilhe no Verão',
        description: 'Está pronto para brilhar neste verão? Na Makeup Queen, temos uma promoção especial para você se destacar durante a estação mais quente do ano! Durante todo o mês de janeiro, oferecemos um desconto exclusivo de 25% em todos os nossos serviços de maquiagem. '+
        'Deixe nossa equipe de maquiadoras profissionais realçar sua beleza natural e criar looks deslumbrantes que combinem com a vibe ensolarada do verão. Seja para uma festa na praia, um encontro romântico à noite ou apenas para se sentir confiante em qualquer ocasião, estamos aqui para ajudar você a brilhar! '+
        
        'Aproveite esta oportunidade para experimentar novas tendências de maquiagem, realçar seus pontos fortes e se divertir com cores vibrantes. Deixe-nos criar um visual fresco e radiante que reflete a energia contagiante do verão. Agende seu horário conosco e desfrute de um desconto exclusivo de 25% em qualquer serviço escolhido. '+
        
        'Prepare-se para brilhar no verão com a Makeup Queen. Nossas maquiadoras estão ansiosas para ajudar você a criar looks incríveis e iluminados que farão você se destacar em qualquer ocasião. Não perca esta oportunidade e agende seu horário hoje mesmo!'
      },
    ];
  }

  ngOnInit() {
  }

}
