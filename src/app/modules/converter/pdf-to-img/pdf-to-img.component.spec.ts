import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToImgComponent } from './pdf-to-img.component';

describe('PdfToImgComponent', () => {
  let component: PdfToImgComponent;
  let fixture: ComponentFixture<PdfToImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfToImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfToImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
