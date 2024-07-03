import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterchefComponent } from './masterchef.component';

describe('MasterchefComponent', () => {
  let component: MasterchefComponent;
  let fixture: ComponentFixture<MasterchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterchefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
