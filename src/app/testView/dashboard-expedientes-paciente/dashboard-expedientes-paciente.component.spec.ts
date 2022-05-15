import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpedientesPacienteComponent } from './dashboard-expedientes-paciente.component';

describe('DashboardExpedientesPacienteComponent', () => {
  let component: DashboardExpedientesPacienteComponent;
  let fixture: ComponentFixture<DashboardExpedientesPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExpedientesPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExpedientesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
