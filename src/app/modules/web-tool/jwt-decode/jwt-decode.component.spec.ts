import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtDecodeComponent } from './jwt-decode.component';

describe('JwtDecodeComponent', () => {
  let component: JwtDecodeComponent;
  let fixture: ComponentFixture<JwtDecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JwtDecodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JwtDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
