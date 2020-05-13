import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocitaceComponent } from './pocitace.component';

describe('PocitaceComponent', () => {
  let component: PocitaceComponent;
  let fixture: ComponentFixture<PocitaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocitaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocitaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
