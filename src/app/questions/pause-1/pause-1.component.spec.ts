import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pause1Component } from './pause-1.component';

describe('Pause1Component', () => {
  let component: Pause1Component;
  let fixture: ComponentFixture<Pause1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pause1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pause1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
