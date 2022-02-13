import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStyleSettingsComponent } from './app-style-settings.component';

describe('AppStyleSettingsComponent', () => {
  let component: AppStyleSettingsComponent;
  let fixture: ComponentFixture<AppStyleSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppStyleSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStyleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
