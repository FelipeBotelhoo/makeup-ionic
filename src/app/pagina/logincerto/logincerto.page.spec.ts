import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogincertoPage } from './logincerto.page';

describe('LogincertoPage', () => {
  let component: LogincertoPage;
  let fixture: ComponentFixture<LogincertoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogincertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
