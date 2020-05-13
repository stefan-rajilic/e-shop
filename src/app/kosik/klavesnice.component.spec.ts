import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlavesniceComponent } from './klavesnice.component';

describe('KlavesniceComponent', () => {
  let component: KlavesniceComponent;
  let fixture: ComponentFixture<KlavesniceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlavesniceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlavesniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
