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
const generateTable = function () {
  const tableArea = document.getElementById("tableArea");
  //prendo l'id "tavleArea"
  const table = document.createElement("table");
  // creo l'elemento tabella
  table.style.border = "1px solid black";
  const thead = document.createElement("thead");
  // creo l'elemento thead
  const colonnaHeading1 = document.createElement("th");
  // creo l'elemento th1
  colonnaHeading1.innerText = "immagine";
  const colonnaHeading2 = document.createElement("th");
  // creo l'elemento th2
  colonnaHeading2.innerText = "nome prodotto";
  const colonnaHeading3 = document.createElement("th");
  // creo l'elemento th3
  colonnaHeading3.innerText = "quantità";
  const colonnaHeading4 = document.createElement("th");
  // creo l'elemento th4
  colonnaHeading4.innerText = "prezzo";
  tableArea.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(colonnaHeading1);
  thead.appendChild(colonnaHeading2);
  thead.appendChild(colonnaHeading3);
  thead.appendChild(colonnaHeading4);
  for (let i = 0; i < 5; i++) {
    const riga = document.createElement("tr");
    table.appendChild(riga);
  }
  const righe = document.querySelectorAll("table tr");
  for (let b = 0; b < righe.length; b++) {
    for (let i = 0; i < 4; i++) {
      const td = document.createElement("td");
      righe[b].appendChild(td);
    }
  }
  const td = document.querySelectorAll("tr > td");
  for (let i = 0; i < td.length; i += 4) {
    let randomSrc = `https://picsum.photos/100?random=${i}`;
    const element = td[i];
    const img = document.createElement("img");
    img.src = randomSrc;
    img.style.width = "100%";
    element.appendChild(img);
  }
  for (let i = 1; i < td.length; i += 4) {
    const element = td[i];
    const randomNames = [
      "dog",
      "potato",
      "cow",
      "parrot",
      "stone",
      "watch",
      "house",
      "biolumonesance",
      "brake",
      "potato/salad",
      "trip",
      "hipopotomus",
      "mask",
      "chicken",
      "Pneumonoultramicroscopicsilicovolcanoconiosis",
      "dog",
      "potato",
      "cow",
      "parrot",
      "stone",
      "watch",
      "house",
      "biolumonesance",
      "brake",
      "potato/salad",
      "trip",
      "hipopotomus",
      "mask",
      "chicken",
    ];
    element.innerText = randomNames[i];
  }
  for (let i = 2; i < td.length; i += 4) {
    const element = td[i];
    const randomNumbers = [];
    for (let i = 0; i < td.length; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      randomNumbers.push(randomNumber);
    }
    element.innerText = randomNumbers[i];
  }
  for (let i = 3; i < td.length; i += 4) {
    const element = td[i];
    const randomPrices = [];
    for (let i = 0; i < td.length; i++) {
      const randomNumber = Math.floor(Math.random() * 20);
      const randomNumberPrice = parseInt(randomNumber) + ".00$";
      randomPrices.push(randomNumberPrice);
    }
    element.innerText = randomPrices[i];
  }
  table.style.width = "50%";
  table.style.textAlign = "center";
  const border = document.querySelectorAll("table td");
  const border1 = document.querySelectorAll("table th");
  for (let i = 0; i < border.length; i++) {
    const element = border[i];
    element.style.border = "1px solid black";
  }
};

generateTable();
/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {
  const table = document.getElementsByTagName("table")[0];
  const row1 = document.createElement("tr");
  table.appendChild(row1);
  const rows = document.querySelectorAll("table tr");
  for (let i = 0; i < 4; i++) {
    const td = document.createElement("td");
    rows[rows.length - 1].appendChild(td);
  }
  const td = document.querySelectorAll("tr > td");
  let randomSrc = `https://picsum.photos/100`;
  const imgSlot = td[td.length - 4];
  const img = document.createElement("img");
  img.src = randomSrc;
  img.style.width = "100%";
  imgSlot.appendChild(img);
  const nameSlot = td[td.length - 3];
  const randomNames = [
    "dog",
    "potato",
    "cow",
    "parrot",
    "stone",
    "watch",
    "house",
    "biolumonesance",
    "brake",
    "potato/salad",
    "trip",
    "hipopotomus",
    "mask",
    "chicken",
    "Pneumonoultramicroscopicsilicovolcanoconiosis",
    "dog",
    "potato",
    "cow",
    "parrot",
    "stone",
    "watch",
    "house",
    "biolumonesance",
    "brake",
    "potato/salad",
    "trip",
    "hipopotomus",
    "mask",
    "chicken",
  ];
  nameSlot.innerText = randomNames[td.length - 3];
  const quantitySlot = td[td.length - 2];
  const randomNumbers = [];
  const randomquantity = Math.floor(Math.random() * 10);
  randomNumbers.push(randomquantity);
  quantitySlot.innerText = randomNumbers[0];
  const priceSlot = td[td.length - 1];
  const randomPrices = [];
  const randomNumber = Math.floor(Math.random() * 20);
  const randomNumberPrice = parseInt(randomNumber) + ".00$";
  randomPrices.push(randomNumberPrice);
  priceSlot.innerText = randomPrices[0];
  const border = document.querySelectorAll("table td");
  const border1 = document.querySelectorAll("table th");
  for (let i = 0; i < border.length; i++) {
    const element = border[i];
    element.style.border = "1px solid black";
  }
};

addRow();

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
/* 
const hideAllImages = function () {
  const images = document.querySelectorAll("table img");
  for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.style.opacity = "0";
  }
};

hideAllImages(); */

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
const changeColorWithRandom = function () {
  // Funzione per generare un colore random in formato esadecimale
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 12457845).toString(16);
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
