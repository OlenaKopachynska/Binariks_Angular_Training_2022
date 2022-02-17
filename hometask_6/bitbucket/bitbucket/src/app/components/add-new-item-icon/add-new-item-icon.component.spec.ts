import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemIconComponent } from './add-new-item-icon.component';

describe('AddNewItemIconComponent', () => {
  let component: AddNewItemIconComponent;
  let fixture: ComponentFixture<AddNewItemIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewItemIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewItemIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
