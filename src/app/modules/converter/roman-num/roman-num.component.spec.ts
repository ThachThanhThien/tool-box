import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumComponent } from './roman-num.component';

describe('RomanNumComponent', () => {
  let component: RomanNumComponent;
  let fixture: ComponentFixture<RomanNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanNumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomanNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
