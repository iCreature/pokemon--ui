import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoneShowComponent } from './pokemone-show.component';

describe('PokemoneShowComponent', () => {
  let component: PokemoneShowComponent;
  let fixture: ComponentFixture<PokemoneShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemoneShowComponent]
    });
    fixture = TestBed.createComponent(PokemoneShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
