import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSnippetComponent } from './js-snippet.component';

describe('JsSnippetComponent', () => {
  let component: JsSnippetComponent;
  let fixture: ComponentFixture<JsSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsSnippetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
