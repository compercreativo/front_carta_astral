import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pause6Component } from './pause-6.component';

describe('Pause6Component', () => {
  let component: Pause6Component;
  let fixture: ComponentFixture<Pause6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pause6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pause6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
