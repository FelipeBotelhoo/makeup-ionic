import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Promotion2Page } from './promotion2.page';

describe('Promotion2Page', () => {
  let component: Promotion2Page;
  let fixture: ComponentFixture<Promotion2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Promotion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
