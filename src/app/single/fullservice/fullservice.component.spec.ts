import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullserviceComponent } from './fullservice.component';

describe('FullserviceComponent', () => {
  let component: FullserviceComponent;
  let fixture: ComponentFixture<FullserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
