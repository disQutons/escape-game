import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAppBarComponent } from './gallery-app-bar.component';

describe('GalleryAppBarComponent', () => {
  let component: GalleryAppBarComponent;
  let fixture: ComponentFixture<GalleryAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryAppBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
