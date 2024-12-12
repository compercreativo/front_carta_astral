import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pause3Component } from './pause-3.component';

describe('Pause3Component', () => {
  let component: Pause3Component;
  let fixture: ComponentFixture<Pause3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pause3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pause3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
