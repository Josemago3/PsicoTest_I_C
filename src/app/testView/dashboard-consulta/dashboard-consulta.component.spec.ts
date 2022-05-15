import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultaComponent } from './dashboard-consulta.component';

describe('DashboardConsultaComponent', () => {
  let component: DashboardConsultaComponent;
  let fixture: ComponentFixture<DashboardConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
