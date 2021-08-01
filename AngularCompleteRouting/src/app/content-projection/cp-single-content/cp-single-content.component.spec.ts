import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpSingleContentComponent } from './cp-single-content.component';

describe('CpSingleContentComponent', () => {
  let component: CpSingleContentComponent;
  let fixture: ComponentFixture<CpSingleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpSingleContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpSingleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
