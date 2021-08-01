import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpMultiViewComponent } from './cp-multi-view.component';

describe('CpMultiViewComponent', () => {
  let component: CpMultiViewComponent;
  let fixture: ComponentFixture<CpMultiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpMultiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpMultiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
