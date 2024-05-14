import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile0Page } from './profile0.page';

describe('Profile0Page', () => {
  let component: Profile0Page;
  let fixture: ComponentFixture<Profile0Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Profile0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
