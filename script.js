// funzione per generare 16 numeri casuali da 1 a 100
function generaNumeri (numeroCasuale){
  var numeroCasuale = 0;
  for (var i = 0; i < 16; i++) {
  var numeroCasuale = Math.floor(Math.random()*100) + 1;
  }
  console.log(numeroCasuale[i]);
  return numeroCasuale;

}
generaNumeri(numeroCasuale);
