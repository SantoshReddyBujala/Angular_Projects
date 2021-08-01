import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpSingleViewComponent } from './cp-single-view.component';

describe('CpViewOnceComponent', () => {
  let component: CpSingleViewComponent;
  let fixture: ComponentFixture<CpSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
