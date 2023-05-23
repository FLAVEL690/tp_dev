import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharingImagePage } from './sharing-image.page';

describe('SharingImagePage', () => {
  let component: SharingImagePage;
  let fixture: ComponentFixture<SharingImagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SharingImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
