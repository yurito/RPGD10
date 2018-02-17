function levelUP(nivel) {
  
 var planilha = SpreadsheetApp.getActive().getSheets()[0];
 var user = SpreadsheetApp.getActive().getName().split(" ")
  
 nivel.atualPos = planilha.getRange(nivel.atual);
 nivel.xp = planilha.getRange(nivel.xp);
 nivel.desejado = nivel.atualPos.getValue() + 1;
 nivel.nome = planilha.getRange(nivel.nome).getValue()//.split(" ");
  
 var expNecessario = NeededEXP(nivel.atualPos.getValue(),nivel.multiplicador);
 
     if(expNecessario <=  nivel.xp.getValue()){
     
       nivel.atualPos.setValue(nivel.atualPos.getValue() + 1);
       nivel.xp.setValue(nivel.xp.getValue() - expNecessario);       
          Update(planilha);
     }  
}

function NeededEXP(a, m){    
    if(a == 0)
      a = 1;
  return Math.round((a * (Math.pow(m, 2))) * 2.5);
}
