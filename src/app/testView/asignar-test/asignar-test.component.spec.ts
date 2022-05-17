import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarTestComponent } from './asignar-test.component';

describe('AsignarTestComponent', () => {
  let component: AsignarTestComponent;
  let fixture: ComponentFixture<AsignarTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
