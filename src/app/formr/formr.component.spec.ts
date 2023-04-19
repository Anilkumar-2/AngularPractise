import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrComponent } from './formr.component';

describe('FormrComponent', () => {
  let component: FormrComponent;
  let fixture: ComponentFixture<FormrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
