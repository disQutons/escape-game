import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCircleComponent } from './story-circle.component';

describe('StoryCircleComponent', () => {
  let component: StoryCircleComponent;
  let fixture: ComponentFixture<StoryCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
