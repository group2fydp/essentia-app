import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesToGoPage } from './places-to-go.page';

describe('PlacesToGoPage', () => {
  let component: PlacesToGoPage;
  let fixture: ComponentFixture<PlacesToGoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesToGoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesToGoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
