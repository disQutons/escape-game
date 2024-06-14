import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPostListComponent } from './instagram-post-list.component';

describe('InstagramPostListComponent', () => {
  let component: InstagramPostListComponent;
  let fixture: ComponentFixture<InstagramPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
