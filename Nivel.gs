function levelUP(nivel) {
  
 var planilha = SpreadsheetApp.getActive().getSheets()[0];
 var user = SpreadsheetApp.getActive().getName().split(" ")
  
 nivel.atual = planilha.getRange(nivel.atual);
 nivel.xp = planilha.getRange(nivel.xp);
 nivel.desejado = nivel.atual.getValue() + 1;
 nivel.nome = planilha.getRange(nivel.nome).getValue()//.split(" ");
 

 
 var expNecessario = NeededEXP(nivel.atual.getValue(),nivel.multiplicador);
 
     if(expNecessario <=  nivel.xp.getValue()){
     
       nivel.atual.setValue(nivel.atual.getValue() + 1);
       nivel.xp.setValue(nivel.xp.getValue() - expNecessario);       
       
     }
     else{
     
       Browser.msgBox(' Minha querida ' + user[user.length-1] + ' \u2764',
       'Tu não tem EXP \u2728 suficiente para fazer upgrade em ' + nivel.nome + '.'+
       ' EXP atual: ' + nivel.xp.getValue() +
       ' EXP necessário: ' + expNecessario, Browser.Buttons.OK);
       
     }
     // Update(planilha,nivel.xp);
}

function NeededEXP(a, m){

  return Math.round((a * (Math.pow(m, 2))) * 2.5);
}

