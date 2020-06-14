import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListpageComponent } from './hotel-listpage.component';

describe('HotelListpageComponent', () => {
  let component: HotelListpageComponent;
  let fixture: ComponentFixture<HotelListpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelListpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
