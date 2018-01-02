import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAgendaComponent } from './grid-agenda.component';

describe('GridAgendaComponent', () => {
  let component: GridAgendaComponent;
  let fixture: ComponentFixture<GridAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
