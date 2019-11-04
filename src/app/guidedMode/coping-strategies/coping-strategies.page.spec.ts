import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopingStrategiesPage } from './coping-strategies.page';

describe('CopingStrategiesPage', () => {
  let component: CopingStrategiesPage;
  let fixture: ComponentFixture<CopingStrategiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopingStrategiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopingStrategiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
