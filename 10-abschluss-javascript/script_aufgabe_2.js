// sichere den Button in einer Variable
const button = document.querySelector('#calculate');
// sichere die Input Box in einer Variable
const input = document.querySelector("#input");
// sichere die Result Seite in einer Variable
const result = document.querySelector("#result");

// erstelle einen Event Listener für den Button
button.addEventListener('click', function (event) {
  // verhindere das Neuladen der Seite
  event.preventDefault();

  // überprüfe ob beide Namen eingegeben wurden
  if (document.querySelector('#name1-input').value === '' || document.querySelector('#name2-input').value === '') {
    alert('Bitte beide Namen eingeben');
    return;
  }
  // speichere die Namen aus den Input Feldern
  const name1 = document.querySelector("#name1-input").value;
  const name2 = document.querySelector("#name2-input").value;

  // berechne den love score
  const loveScore = berechneLoveScore(name1, name2);

  // zeige den love score an
  showResult(name1, name2, loveScore);
});

function berechneLoveScore(name1, name2) {
  let loveScore;

  // berechne den love score
  if ((name1 === 'Klara' && name2 === 'Jan') || (name1 === 'Jan' && name2 === 'Klara')) {
    loveScore = 100;
  } else if ((name1 === 'Mädchen' && name2 === 'Programmieren') || (name1 === 'Programmieren' && name2 === 'Mädchen')) {
    loveScore = 100;
  } else if ((name1 === 'Brad' && name2 === 'Angelina') || (name1 === 'Angelina' && name2 === 'Brad')) {
    loveScore = 0;
  } else {
    // für alle anderen Paare berechne einen zufälligen Love Score
    loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
  }

  return loveScore;
}

function showResult(name1, name2, loveScore) {
  if (loveScore > 90) {
    document.querySelector('.result-text').innerHTML = 'Ihr seid ein Perfect Match';
    document.querySelector('.result-img').src = 'https://www.icegif.com/wp-content/uploads/2022/08/icegif-879.gif';
  } else if (loveScore > 70) {
    document.querySelector('.result-text').innerHTML = 'Ihr seid ein gutes Match';
    document.querySelector('.result-img').src = 'https://media1.giphy.com/media/XvZ8PJ4DSqzSM/giphy.gif';
  } else if (loveScore > 40) {
    document.querySelector('.result-text').innerHTML = 'Könnte klappen';
    document.querySelector('.result-img').src = 'https://thumbs.gfycat.com/TintedFondAfricanporcupine-max-1mb.gif';
  } else {
    document.querySelector('.result-icon').classList.add('fa-heart-crack', 'fa-shake');
    document.querySelector('.result-icon').classList.remove('fa-heart', 'fa-beat');
    document.querySelector('.result-text').innerHTML = 'Das wird nix';
    document.querySelector('.result-img').src = 'https://media.tenor.com/MKXawzVS31kAAAAC/break-up.gif';
  }

  // schreibe die namen auf die result Seite
  document.querySelector('#name1').innerHTML = name1;
  document.querySelector('#name2').innerHTML = name2;

  // schreibe den love score in das Herz
  document.querySelector('.fa-layers-text').innerHTML = loveScore + '%';

  // verstecke die input box
  input.style.display = 'none';
  // zeige die result Seite
  result.style.display = 'block';
}

// Event Listener für den Restart Button
document.querySelector('#restart').addEventListener('click', function (event) {
  // input Felder leeren
  document.querySelector('#name1-input').value = '';
  document.querySelector('#name2-input').value = '';
  // Input Felder anzeigen
  input.style.display = 'block';
  // Restult Seite verstecken
  result.style.display = 'none';
  // Herz Icon zurücksetzen
  document.querySelector('.result-icon').classList.remove('fa-heart-crack', 'fa-shake');
  document.querySelector('.result-icon').classList.add('fa-heart', 'fa-beat');
});