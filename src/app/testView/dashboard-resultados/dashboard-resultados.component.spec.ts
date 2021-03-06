import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResultadosComponent } from './dashboard-resultados.component';

describe('DashboardResultadosComponent', () => {
  let component: DashboardResultadosComponent;
  let fixture: ComponentFixture<DashboardResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
