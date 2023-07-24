import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInputNumberComponent } from './common-input-number.component';

describe('CommonInputNumberComponent', () => {
  let component: CommonInputNumberComponent;
  let fixture: ComponentFixture<CommonInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonInputNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
