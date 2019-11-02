import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyPlanPage } from './safety-plan.page';

describe('SafetyPlanPage', () => {
  let component: SafetyPlanPage;
  let fixture: ComponentFixture<SafetyPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
