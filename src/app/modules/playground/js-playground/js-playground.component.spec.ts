import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPlaygroundComponent } from './js-playground.component';

describe('JsPlaygroundComponent', () => {
  let component: JsPlaygroundComponent;
  let fixture: ComponentFixture<JsPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsPlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
