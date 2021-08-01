import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponetComponent } from './child-componet.component';

describe('ChildComponetComponent', () => {
  let component: ChildComponetComponent;
  let fixture: ComponentFixture<ChildComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
