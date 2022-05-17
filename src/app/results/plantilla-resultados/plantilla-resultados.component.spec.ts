import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaResultadosComponent } from './plantilla-resultados.component';

describe('PlantillaResultadosComponent', () => {
  let component: PlantillaResultadosComponent;
  let fixture: ComponentFixture<PlantillaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
