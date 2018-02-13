function ConsomeRecurso(recurso) {

 var planilha = SpreadsheetApp.getActive().getSheets()[0];
   
 recurso.atual = planilha.getRange(recurso.atual);
 recurso.nome = planilha.getRange(recurso.nome).getValue().split(" ");  
 
 var input = Browser.inputBox('Insira o valor de '+ recurso.nome[0].toUpperCase() +' gasto\(a\)',
      ' (número inteiro sem sinal, por exemplo:  20):',
      Browser.Buttons.OK_CANCEL);
        if (input == 'cancel') {
          return;
  }
      
  var dmg = Number(input);
    if (isNaN(dmg) || dmg < 0 ) {
    Browser.msgBox('Vamos parar de palhaçadinha? \uD83D\uDE21',
        Utilities.formatString('Por favor, digite um número positivo! Isso \u2192 "%s"  não é válido!', input),
        Browser.Buttons.OK);
    return;
  }
    
  var resto = (recurso.atual.getValue() - dmg);
    
   if(resto < 0){
     resto = 0;
     Browser.msgBox("Estás muerto! \uD83D\uDC80")
   }
   
   recurso.atual.setValue(resto);
   
}
