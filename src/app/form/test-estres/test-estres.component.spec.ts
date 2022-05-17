import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEstresComponent } from './test-estres.component';

describe('TestEstresComponent', () => {
  let component: TestEstresComponent;
  let fixture: ComponentFixture<TestEstresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEstresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
