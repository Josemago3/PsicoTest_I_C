import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpedientesComponent } from './dashboard-expedientes.component';

describe('DashboardExpedientesComponent', () => {
  let component: DashboardExpedientesComponent;
  let fixture: ComponentFixture<DashboardExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExpedientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
