/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  document.querySelector("h1").innerText = "Iniziamo a manipolare il DOM";
};
changeTitle();
/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  document.getElementsByTagName("h1")[0].classList.add("myHeading");
};
addClassToTitle();
/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  document
    .querySelectorAll("div>p")
    .forEach((p) => (p.innerText = "Ciao mamma guarda come mi diverto."));
};
changePcontent();
/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const a = document.querySelectorAll("a:not(footer a)");
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    element.href = "https://www.google.com";
  }
};
changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const newLi = document.createElement("li");
  newLi.innerText = "4rd new";
  document.getElementById("secondList").appendChild(newLi);
};
addToTheSecond();
/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const newP = document.createElement("p");
  newP.innerText = " Ciao sono un nuovo paragrafo";
  document.querySelector("div").appendChild(newP);
};
addParagraph();
/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  document.querySelector("ul").style.opacity = "0";
};
hideFirstUl();
/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  document
    .querySelectorAll("ul")
    .forEach((ul) => (ul.style.backgroundColor = "green"));
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
const titolo = document.querySelector("h1");
const makeItClickable = function () {
  // Aggiungi un evento di click all'elemento h1
  titolo.addEventListener("click", function () {
    // Rimuovi l'ultimo carattere dalla stringa del testo utilizzando slice
    titolo.textContent = titolo.textContent.slice(0, -1);
  });
};
makeItClickable();
/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
document.querySelector("footer").addEventListener("click", function () {
  const link = document.querySelector("footer a");
  /*   const url = link.a; */
  alert("URL del link: " + link.href);
});

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
const changeColorWithRandom = function () {
  // Funzione per generare un colore random in formato esadecimale
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 2550214).toString(16);
  }

  // Seleziona l'elemento h2 con id "changeMyColor"
  const h2Element = document.getElementById("changeMyColor");

  // Aggiungi un listener per il click sull'elemento
  h2Element.addEventListener("click", function () {
    // Ottieni un colore random
    const randomColor = getRandomColor();
    // Cambia il colore del testo dell'h2
    h2Element.style.color = randomColor;
  });
};

// Chiamata alla funzione per attivare il cambio colore al click
changeColorWithRandom();
