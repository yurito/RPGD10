function gerenteEventos(evento) {
  
  switch(evento.name)
  {
    case 'AddVida':
      AdicionaRecurso(evento.atrVida);
      break;
    case 'RdzVida':
      ConsomeRecurso(evento.atrVida);
      break;
    case 'AddChakra':
      AdicionaRecurso(evento.atrChakra);
      break;
    case 'RdzChakra':
      ConsomeRecurso(evento.atrChakra);
      break;
    case 'APUP':
      levelUP(evento.destino);
      break;      
  }
  
}
