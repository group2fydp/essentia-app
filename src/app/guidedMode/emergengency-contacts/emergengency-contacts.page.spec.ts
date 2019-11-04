import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergengencyContactsPage } from './emergengency-contacts.page';

describe('EmergengencyContactsPage', () => {
  let component: EmergengencyContactsPage;
  let fixture: ComponentFixture<EmergengencyContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergengencyContactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergengencyContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
