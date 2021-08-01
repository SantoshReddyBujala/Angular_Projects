import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpConditionalViewComponent } from './cp-conditional-view.component';

describe('CpConditionalViewComponent', () => {
  let component: CpConditionalViewComponent;
  let fixture: ComponentFixture<CpConditionalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpConditionalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpConditionalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
