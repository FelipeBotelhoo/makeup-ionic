import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Promotion3Page } from './promotion3.page';

describe('Promotion3Page', () => {
  let component: Promotion3Page;
  let fixture: ComponentFixture<Promotion3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Promotion3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
