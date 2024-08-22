import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallUserCardComponent } from './small-user-card.component';

describe('SmallUserCardComponent', () => {
  let component: SmallUserCardComponent;
  let fixture: ComponentFixture<SmallUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallUserCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
