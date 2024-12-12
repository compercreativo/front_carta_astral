import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question8Component } from './question-8.component';

describe('Question8Component', () => {
  let component: Question8Component;
  let fixture: ComponentFixture<Question8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
