import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsByCategoryComponent } from './facts-by-category.component';

describe('FactsByCategoryComponent', () => {
  let component: FactsByCategoryComponent;
  let fixture: ComponentFixture<FactsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
