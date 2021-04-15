import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TranslationDetailComponent } from './translation-detail.component';

describe('TranslationDetailComponent', () => {
  let component: TranslationDetailComponent;
  let fixture: ComponentFixture<TranslationDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
