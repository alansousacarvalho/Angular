import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteStyleComponent } from './teste-style.component';

describe('TesteStyleComponent', () => {
  let component: TesteStyleComponent;
  let fixture: ComponentFixture<TesteStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
