import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  constructor() { }

  ngOnInit() {
  }

  public confirmarCompra():void{

  }
}
