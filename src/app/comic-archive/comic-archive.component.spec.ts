import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicArchiveComponent } from './comic-archive.component';

describe('ComicArchiveComponent', () => {
  let component: ComicArchiveComponent;
  let fixture: ComponentFixture<ComicArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
