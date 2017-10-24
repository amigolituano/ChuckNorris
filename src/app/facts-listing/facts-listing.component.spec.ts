import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsListingComponent } from './facts-listing.component';

describe('FactsListingComponent', () => {
  let component: FactsListingComponent;
  let fixture: ComponentFixture<FactsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
