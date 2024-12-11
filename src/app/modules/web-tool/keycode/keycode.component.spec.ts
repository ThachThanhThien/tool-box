import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycodeComponent } from './keycode.component';

describe('KeycodeComponent', () => {
  let component: KeycodeComponent;
  let fixture: ComponentFixture<KeycodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeycodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
