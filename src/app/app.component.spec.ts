import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe("prueba sencilla de una función",function(){
  var a;

  it ("probando una funcionalidad cualquiera",function(){
    a = true;
    expect(a).toBe(true);
  })
})
