function onEdit(event)
{
  var planilha = SpreadsheetApp.getActiveSpreadsheet();  
  var s = event.source.getActiveSheet();  
  var exp = event.range;  
  var nomePersonagem = SpreadsheetApp.getActive().getName().split(" ");
    nomePersonagem = nomePersonagem[nomePersonagem.length -1];
   
   if( exp.getA1Notation() === 'B31')
       Update(s);
  
}

function Update(planilha)
{
    var exp = planilha.getRange(Exp);
    
    raiseParam.forEach(function(valor, chave)
    {
        var valorParam = planilha.getRange(valor.atual).getValue();
        var linha =  planilha.getRange(valor.atual).getRow();
        var col =  planilha.getRange(valor.atual).getColumn(); 
        var bg = planilha.getRange(linha,col+1);
        
             if(NeededEXP(valorParam, valor.multiplicador) <= exp.getValue())
                  bg.setFormula(bgUP);     

             else
                  bg.clearContent();             
    });
    
     Browser.msgBox("Planilha atualizada!");
}

