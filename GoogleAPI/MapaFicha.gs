var raiseParam = [];

/*global Multiplicador*/

var Exp = 'B31';
var vida =  { atual: 'F2', max: 'B2', nome: 'E2'}
var chakra = { atual: 'F3', max: 'B3', nome: 'E3'}

var atrDestreza =  { atual: 'B6',nome: 'A6', xp: Exp, multiplicador: Multiplicador.Atributo}; 
var atrForca =  { atual: 'B7',nome: 'A7', xp: Exp, multiplicador: Multiplicador.Atributo}; 
var atrVigor =  { atual: 'B8',nome: 'A8', xp: Exp, multiplicador: Multiplicador.Atributo}; 

var atrAparencia =  { atual: 'F6',nome: 'E6', xp: Exp, multiplicador: Multiplicador.Atributo}; 
var atrCarisma =  { atual: 'F7',nome: 'E7', xp: Exp, multiplicador: Multiplicador.Atributo}; 
var atrManipulacao =  { atual: 'F8',nome: 'E8', xp: Exp, multiplicador: Multiplicador.Atributo}; 

var atrInteligencia =  { atual: 'J6',nome: 'I6', xp: Exp, multiplicador: Multiplicador.Atributo};  
var atrRaciocinio =  { atual: 'J7',nome: 'I7', xp: Exp, multiplicador: Multiplicador.Atributo};
var atrPercepcao =  { atual: 'J8',nome: 'I8', xp: Exp, multiplicador: Multiplicador.Atributo}; 

var habProntidao = { atual: 'B12',nome: 'A12', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habEsporte = { atual: 'B13',nome: 'A13', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habBriga = { atual: 'B14',nome: 'A14', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habEsquiva = { atual: 'B15',nome: 'A15', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habEmpatia = { atual: 'B16',nome: 'A16', xp: Exp, multiplicador: Multiplicador.Habilidade};
var habAtuacao = { atual: 'B17',nome: 'A17', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habIntimidacao = { atual: 'B18',nome: 'A18', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habLabia = { atual: 'B19',nome: 'A19', xp: Exp, multiplicador: Multiplicador.Habilidade};
var haMedicina = { atual: 'B20',nome: 'A20', xp: Exp, multiplicador: Multiplicador.Habilidade};
var habCiencia = { atual: 'B21',nome: 'A21', xp: Exp, multiplicador: Multiplicador.Habilidade}; 

var habEmpAnimais = { atual: 'F12',nome: 'E12', xp: Exp, multiplicador: Multiplicador.Habilidade} 
var habArmasBrancas = { atual: 'F13',nome: 'E13', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habArremesso = { atual: 'F14',nome: 'E14', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habLideranca = { atual: 'F15',nome: 'E15', xp: Exp, multiplicador: Multiplicador.Habilidade};
var habInvestigacao = { atual: 'F16',nome: 'E16', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habFurtividade = { atual: 'F17',nome: 'E17', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habSobrevivencia = { atual: 'F18',nome: 'E18', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habSeguranca = { atual: 'F19',nome: 'E19', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habOficios = { atual: 'F20',nome: 'E20', xp: Exp, multiplicador: Multiplicador.Habilidade}; 
var habOcultismo = { atual: 'F21',nome: 'E21', xp: Exp, multiplicador: Multiplicador.Habilidade}; 

var outConsciencia = { atual: 'J12',nome: 'I12', xp: Exp, multiplicador: Multiplicador.OutrasC}; 
var outAutoControle = { atual: 'J13',nome: 'I13', xp: Exp, multiplicador: Multiplicador.OutrasC}; 
var outCoragem = { atual: 'J14',nome: 'I14', xp: Exp, multiplicador: Multiplicador.OutrasC}; 
var espVontade = { atual: 'B23',nome: 'A23', xp: Exp, multiplicador: Multiplicador.fVontade}; 


raiseParam.push(atrDestreza);
raiseParam.push(atrForca);
raiseParam.push(atrVigor);
raiseParam.push(atrAparencia);
raiseParam.push(atrCarisma);
raiseParam.push(atrManipulacao);
raiseParam.push(atrInteligencia);
raiseParam.push(atrRaciocinio);
raiseParam.push(atrPercepcao);

raiseParam.push(habProntidao);
raiseParam.push(habEsporte);
raiseParam.push(habBriga);
raiseParam.push(habEsquiva);
raiseParam.push(habEmpatia);
raiseParam.push(habAtuacao);
raiseParam.push(habIntimidacao);
raiseParam.push(habLabia);
raiseParam.push(haMedicina);
raiseParam.push(habCiencia);

raiseParam.push(habEmpAnimais);
raiseParam.push(habArmasBrancas);
raiseParam.push(habArremesso);
raiseParam.push(habLideranca);
raiseParam.push(habInvestigacao);
raiseParam.push(habFurtividade);
raiseParam.push(habSobrevivencia);
raiseParam.push(habSeguranca);
raiseParam.push(habOficios);
raiseParam.push(habOcultismo);

raiseParam.push(outConsciencia);
raiseParam.push(outAutoControle);
raiseParam.push(outCoragem);
raiseParam.push(espVontade);
