import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewComponentComponent } from './preview-component.component';

describe('PreviewComponentComponent', () => {
  let component: PreviewComponentComponent;
  let fixture: ComponentFixture<PreviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
