import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScndpageComponent } from './scndpage.component';

describe('ScndpageComponent', () => {
  let component: ScndpageComponent;
  let fixture: ComponentFixture<ScndpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScndpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScndpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
