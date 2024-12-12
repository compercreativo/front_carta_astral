import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pause4Component } from './pause-4.component';

describe('Pause4Component', () => {
  let component: Pause4Component;
  let fixture: ComponentFixture<Pause4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pause4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pause4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
