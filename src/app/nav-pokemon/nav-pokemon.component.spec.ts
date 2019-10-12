import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPokemonComponent } from './nav-pokemon.component';

describe('NavPokemonComponent', () => {
  let component: NavPokemonComponent;
  let fixture: ComponentFixture<NavPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
