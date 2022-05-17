import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBipolarComponent } from './test-bipolar.component';

describe('TestBipolarComponent', () => {
  let component: TestBipolarComponent;
  let fixture: ComponentFixture<TestBipolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBipolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBipolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
