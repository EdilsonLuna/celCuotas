const textP = document.getElementById('h1Text');
function randomTrueOrFalse() {
    return Math.random() < 0.5;
}
if(randomTrueOrFalse()){
    textP.textContent = 'SU CRÉDITO HA SIDO APROBADO';
}else{
    textP.textContent = 'SU CRÉDITO NO HA SIDO APROBADO';
}
  