import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityRecognizerPage } from './celebrity-recognizer.page';

describe('CelebrityRecognizerPage', () => {
  let component: CelebrityRecognizerPage;
  let fixture: ComponentFixture<CelebrityRecognizerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityRecognizerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityRecognizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
