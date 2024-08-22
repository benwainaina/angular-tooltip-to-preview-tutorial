import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumUserCardComponent } from './medium-user-card.component';

describe('MediumUserCardComponent', () => {
  let component: MediumUserCardComponent;
  let fixture: ComponentFixture<MediumUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumUserCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
