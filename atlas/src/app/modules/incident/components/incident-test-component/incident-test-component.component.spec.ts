import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTestComponentComponent } from './incident-test-component.component';

describe('IncidentTestComponentComponent', () => {
  let component: IncidentTestComponentComponent;
  let fixture: ComponentFixture<IncidentTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentTestComponentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
