import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question10Component } from './question-10.component';

describe('Question10Component', () => {
  let component: Question10Component;
  let fixture: ComponentFixture<Question10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
