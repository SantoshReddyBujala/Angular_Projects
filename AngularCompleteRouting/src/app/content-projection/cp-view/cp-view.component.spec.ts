import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpViewComponent } from './cp-view.component';

describe('CpViewTwoComponent', () => {
  let component: CpViewComponent;
  let fixture: ComponentFixture<CpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
