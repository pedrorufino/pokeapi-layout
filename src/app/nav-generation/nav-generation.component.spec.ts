import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGenerationComponent } from './nav-generation.component';

describe('NavGenerationComponent', () => {
  let component: NavGenerationComponent;
  let fixture: ComponentFixture<NavGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
