import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuCrearComponent } from './inmu-crear.component';

describe('InmuCrearComponent', () => {
  let component: InmuCrearComponent;
  let fixture: ComponentFixture<InmuCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InmuCrearComponent]
    });
    fixture = TestBed.createComponent(InmuCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
