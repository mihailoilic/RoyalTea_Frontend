import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverAreaComponent } from './cover-area.component';

describe('CoverAreaComponent', () => {
  let component: CoverAreaComponent;
  let fixture: ComponentFixture<CoverAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
