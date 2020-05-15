import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItComponent } from './session-it.component';

describe('SessionItComponent', () => {
  let component: SessionItComponent;
  let fixture: ComponentFixture<SessionItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
