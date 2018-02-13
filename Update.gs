function onEdit(event)
{
  var planilha = SpreadsheetApp.getActiveSpreadsheet(); 
  var s = event.source.getActiveSheet(); 
  var exp = event.range; 
  var nomePersonagem = SpreadsheetApp.getActive().getName().split(" ");
    nomePersonagem = nomePersonagem[nomePersonagem.length -1];
   
   if( exp.getA1Notation() === 'B31')
       Update(planilha,exp);
  
}

function Update(planilha,exp)
{
    raiseParam.forEach(function(valor, chave){
        
       if(NeededEXP(planilha.getRange(valor.atual).getValue(), valor.multiplicador) <= exp.getValue())
            Browser.msgBox('Posicao desse cara: ' +planilha.getRange(valor.atual).getRow() + ' nome desse cara: ' + planilha.getRange(valor.nome).getValue()); 
          });

}
