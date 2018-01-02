import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoErroComponent } from './agendamento-erro.component';

describe('AgendamentoErroComponent', () => {
  let component: AgendamentoErroComponent;
  let fixture: ComponentFixture<AgendamentoErroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoErroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
