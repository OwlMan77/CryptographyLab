import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordEncodeComponent } from './keyword-encode.component';

describe('KeywordEncodeComponent', () => {
  let component: KeywordEncodeComponent;
  let fixture: ComponentFixture<KeywordEncodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordEncodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
