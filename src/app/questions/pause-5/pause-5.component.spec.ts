import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pause5Component } from './pause-5.component';

describe('Pause5Component', () => {
  let component: Pause5Component;
  let fixture: ComponentFixture<Pause5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pause5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pause5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
