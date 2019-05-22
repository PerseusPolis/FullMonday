import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightPage } from './spotlight.page';

describe('SpotlightPage', () => {
  let component: SpotlightPage;
  let fixture: ComponentFixture<SpotlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotlightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
