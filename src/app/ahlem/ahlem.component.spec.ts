import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhlemComponent } from './ahlem.component';

describe('AhlemComponent', () => {
  let component: AhlemComponent;
  let fixture: ComponentFixture<AhlemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhlemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhlemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
