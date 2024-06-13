import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramUpBarComponent } from './instagram-up-bar.component';

describe('InstagramUpBarComponent', () => {
  let component: InstagramUpBarComponent;
  let fixture: ComponentFixture<InstagramUpBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramUpBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramUpBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
