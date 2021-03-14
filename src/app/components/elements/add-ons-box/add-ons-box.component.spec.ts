import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsBoxComponent } from './add-ons-box.component';

describe('AddOnsBoxComponent', () => {
  let component: AddOnsBoxComponent;
  let fixture: ComponentFixture<AddOnsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
