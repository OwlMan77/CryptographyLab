import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordDecodeComponent } from './keyword-decode.component';

describe('KeywordDecodeComponent', () => {
  let component: KeywordDecodeComponent;
  let fixture: ComponentFixture<KeywordDecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordDecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
