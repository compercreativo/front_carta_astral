import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question9Component } from './question-9.component';

describe('Question9Component', () => {
  let component: Question9Component;
  let fixture: ComponentFixture<Question9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
