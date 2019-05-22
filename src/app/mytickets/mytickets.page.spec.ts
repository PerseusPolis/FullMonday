import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyticketsPage } from './mytickets.page';

describe('MyticketsPage', () => {
  let component: MyticketsPage;
  let fixture: ComponentFixture<MyticketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyticketsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyticketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
