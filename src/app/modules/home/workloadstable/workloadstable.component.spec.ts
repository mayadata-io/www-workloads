import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadstableComponent } from './workloadstable.component';

describe('WorkloadstableComponent', () => {
  let component: WorkloadstableComponent;
  let fixture: ComponentFixture<WorkloadstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
