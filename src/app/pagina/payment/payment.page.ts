import { Component, OnInit } from '@angular/core';
import { MercadoPagoService } from 'src/app/servicos/mercado-pago.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private mercadoPagoService: MercadoPagoService) { }

  ngOnInit() {
  }

  createPreference() {
    const items = [
      {
        title: 'Product 1',
        quantity: 1,
        currency_id: 'BRL',
        unit_price: 10.5,
      },
      // Adicione mais itens se necessário
    ];

    const preference = {
      items,
    };

    this.mercadoPagoService.createPreference(preference)
      .subscribe(
        response => {
          console.log('Preference created', response);
          // Manipule a resposta de criação da preferência aqui
        },
        error => {
          console.error('Error creating preference', error);
          // Manipule o erro aqui
        }
      );
  }
}
