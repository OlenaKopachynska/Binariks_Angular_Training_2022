import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemInfoEditComponent } from './todo-item-info-edit.component';

describe('TodoItemInfoEditComponent', () => {
  let component: TodoItemInfoEditComponent;
  let fixture: ComponentFixture<TodoItemInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemInfoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
