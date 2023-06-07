// sichere den Button in einer Variable
const button = document.querySelector("#calculate");

// erstelle einen Event Listener für den Button
button.addEventListener("click", function (event) {
  // speichere die Namen aus den Input Feldern
  const name1 = document.querySelector("#name1-input").value;
  const name2 = document.querySelector("#name2-input").value;

  // erstelle einen Alert der einen Text mit den Namen und dem Love Score anzeigt
  alert(name1 + " und " + name2 + " matchen zu 100%!");
});