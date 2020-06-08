import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contCaracteres(texto,processado){
    processado.value = "Quantidade de caracteres:" + texto.value.length;
  }

  imprimirColuna(texto,processado){
    let vetor = texto.value.split(/\r?\n/);
    let vetor2 = [];
    vetor.forEach(element => {
      vetor2 = element.split(' ');
      processado.value = processado.value + vetor2[2] + "\n";
    });

  }

}
