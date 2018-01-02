import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoSucessoComponent } from './agendamento-sucesso.component';

describe('AgendamentoSucessoComponent', () => {
  let component: AgendamentoSucessoComponent;
  let fixture: ComponentFixture<AgendamentoSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
