import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaTestComponent } from './plantilla-test.component';

describe('PlantillaTestComponent', () => {
  let component: PlantillaTestComponent;
  let fixture: ComponentFixture<PlantillaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
