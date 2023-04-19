import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostrComponent } from './tostr.component';

describe('TostrComponent', () => {
  let component: TostrComponent;
  let fixture: ComponentFixture<TostrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TostrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TostrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
