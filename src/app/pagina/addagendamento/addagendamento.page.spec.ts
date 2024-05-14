import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddagendamentoPage } from './addagendamento.page';

describe('AddagendamentoPage', () => {
  let component: AddagendamentoPage;
  let fixture: ComponentFixture<AddagendamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddagendamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
