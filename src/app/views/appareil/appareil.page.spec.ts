import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppareilPage } from './appareil.page';

describe('AppareilPage', () => {
  let component: AppareilPage;
  let fixture: ComponentFixture<AppareilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppareilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
