function AdicionaRecurso(recurso) {

 var planilha = SpreadsheetApp.getActive().getSheets()[0];
 
 recurso.atual = planilha.getRange(recurso.atual);
 recurso.max = planilha.getRange(recurso.max);
 recurso.nome = planilha.getRange(recurso.nome).getValue().split(" ");
 
 var input = Browser.inputBox('Insira o valor de '+ recurso.nome[0].toUpperCase() +' adicionado\(a\)',
      ' (número inteiro sem sinal, por exemplo:  30):',
      Browser.Buttons.OK_CANCEL);
        if (input == 'cancel') {
          return;
  }
      
    var rcv = Number(input);
    if (isNaN(rcv) || rcv < 0 ) {
    Browser.msgBox('Vamos parar de palhaçadinha? \uD83D\uDE21',
        Utilities.formatString('Por favor, digite um número positivo! Isso \u2192 "%s"  não é válido!', input),
        Browser.Buttons.OK);
    return;
  }
  
   var add = (recurso.atual.getValue() + rcv);
   
   if(add > recurso.max.getValue())
     add = recurso.max.getValue();
   
   recurso.atual.setValue(add);
   

}
