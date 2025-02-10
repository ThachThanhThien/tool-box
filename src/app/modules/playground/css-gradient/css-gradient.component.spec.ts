import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGradientComponent } from './css-gradient.component';

describe('CssGradientComponent', () => {
  let component: CssGradientComponent;
  let fixture: ComponentFixture<CssGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
