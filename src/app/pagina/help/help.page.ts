import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  faqData: any[] = [
    {
      category: 'Cadastro e Agendamento',
      questions: [
        {
          question: 'Como posso baixar o aplicativo Makeup Queen?',
          answer: 'Você pode baixar o aplicativo Makeup Queen gratuitamente na App Store (para dispositivos iOS) ou na Google Play Store (para dispositivos Android).',
          expanded: false
        },
        {
          question: 'Como posso me cadastrar no Makeup Queen?',
          answer: 'Após baixar o aplicativo, abra-o e siga as instruções para criar sua conta.',
          expanded: false
        },
        // Mais perguntas e respostas...
      ],
    },
    {
      category: 'Serviços de Maquiagem',
      questions: [
        {
          question: 'Quais são os serviços oferecidos pelo Makeup Queen?',
          answer: 'O Makeup Queen oferece uma variedade de serviços de maquiagem, incluindo maquiagem para eventos especiais, maquiagem para noivas, maquiagem para festas, etc.',
          expanded: false
        },
        {
          question: 'Como faço para agendar um serviço de maquiagem?',
          answer: 'Depois de se cadastrar no aplicativo Makeup Queen, você poderá acessar o calendário de disponibilidade de nossas maquiadoras e fazer a reserva do serviço desejado.',
          expanded: false
        },
        // Mais perguntas e respostas...
      ],
    },
    // Mais categorias de perguntas e respostas...
  ];

  toggleFaq(faq: any) {
    faq.expanded = !faq.expanded;
  }
}
