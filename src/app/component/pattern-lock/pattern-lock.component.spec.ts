import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternLockComponent } from './pattern-lock.component';

describe('PatternLockComponent', () => {
  let component: PatternLockComponent;
  let fixture: ComponentFixture<PatternLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternLockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
