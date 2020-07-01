import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public show:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  contCaracteres(texto,processado){
    processado.value = '';
    processado.value = "Quantidade de caracteres:" + texto.value.length;
  }

  imprimirColuna(texto,processado,coluna,separador){
    let vetor = texto.value.split(/\r?\n/);
    let vetor2 = [];
    processado.value = '';
    if(separador.value === ''){
      separador.value = ' ';
    }
    vetor.forEach(element => {
      vetor2 = element.split(separador.value);
      processado.value = processado.value + vetor2[Number(coluna.value)] + "\n";
    });

  }

  aplicarRegex(texto,processado,regex){

    const String2Regex = str => {
      // Main regex
      const main = str.match(/\/(.+)\/.*/)[1]

      // Regex options
      const options = str.match(/\/.+\/(.*)/)[1]

      // Return compiled regex
      return new RegExp(main, options)
    }

    processado.value = ' ';
    const regexp = new RegExp( String2Regex(regex.value));
    processado.value = texto.value.toString().match(regexp).toString();
    //alert(processado.value);
  }

  mostrar(){
    this.show = !this.show;
  }
  mostrar2(){
    this.show2 = !this.show2;
  }
  mostrar3(){
    this.show3 = !this.show3;
  }

}
