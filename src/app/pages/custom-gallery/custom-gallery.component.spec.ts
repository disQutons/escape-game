import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGalleryComponent } from './custom-gallery.component';

describe('CustomGalleryComponent', () => {
  let component: CustomGalleryComponent;
  let fixture: ComponentFixture<CustomGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
