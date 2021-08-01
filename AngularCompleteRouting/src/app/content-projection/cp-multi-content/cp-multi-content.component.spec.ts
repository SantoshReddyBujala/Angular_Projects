import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpMultiContentComponent } from './cp-multi-content.component';

describe('CpMultiContentComponent', () => {
  let component: CpMultiContentComponent;
  let fixture: ComponentFixture<CpMultiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpMultiContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpMultiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
