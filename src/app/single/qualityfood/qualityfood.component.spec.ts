import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityfoodComponent } from './qualityfood.component';

describe('QualityfoodComponent', () => {
  let component: QualityfoodComponent;
  let fixture: ComponentFixture<QualityfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityfoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
