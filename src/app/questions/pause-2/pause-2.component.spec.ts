import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pause2Component } from './pause-2.component';

describe('Pause2Component', () => {
  let component: Pause2Component;
  let fixture: ComponentFixture<Pause2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pause2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pause2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
