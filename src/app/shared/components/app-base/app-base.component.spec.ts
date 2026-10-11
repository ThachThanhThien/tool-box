import { Component, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBaseComponent } from './app-base.component';

@Component({
  standalone: true,
  template: ''
})
class TestAppBaseComponent extends AppBaseComponent {
  constructor(injector: Injector) {
    super(injector);
  }
}

describe('AppBaseComponent', () => {
  let component: TestAppBaseComponent;
  let fixture: ComponentFixture<TestAppBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAppBaseComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestAppBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
