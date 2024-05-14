import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Promotion1Page } from './promotion1.page';

describe('Promotion1Page', () => {
  let component: Promotion1Page;
  let fixture: ComponentFixture<Promotion1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Promotion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
