//1.zadatak
/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}*/

/*let N = parseInt(prompt("Unesi cijeli broj N:"));
let zbroj = 0;
for (let i = 1; i <= N; i++) {
  zbroj += i;
}
console.log("Zbroj brojeva od 1 do " + N + " je: " + zbroj);*/

/*let ocjene = [4, 5, 3, 4, 2];
let zbroj = 0;
for (let i = 0; i < ocjene.length; i++) {
  zbroj += ocjene[i];
}
let prosjek = zbroj / ocjene.length;
console.log("Prosjek ocjena je: " + prosjek);*/

/*let N = parseInt(prompt("Unesi cijeli broj N:"));

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    console.log(i + " - paran");
  } else {
    console.log(i + " - neparan");
  }
}*/

/*let brojevi = [12, 7, 25, 4, 19];

let najveci = brojevi[0];

for (let i = 1; i < brojevi.length; i++) {
  if (brojevi[i] > najveci) {
    najveci = brojevi[i];
  }
}

console.log("Najveći broj je: " + najveci);*/

/*let brojevi = [12, 7, 25, 4, 19];

let trazeniBroj = parseInt(prompt("Unesi broj koji želiš pronaći:"));
let pronaden = false;

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] === trazeniBroj) {
    pronaden = true;
    break;
  }
}

if (pronaden) {
  console.log("Broj je pronađen u polju.");
} else {
  console.log("Broj nije pronađen u polju.");
}*/

/*function jePrijestupna(godina) {
  if (godina % 400 === 0) {
    return true;
  } else if (godina % 4 === 0 && godina % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

let godina = parseInt(prompt("Unesi godinu:"));

if (jePrijestupna(godina)) {
  console.log("Godina " + godina + " je prijestupna.");
} else {
  console.log("Godina " + godina + " nije prijestupna.");
}*/

/*let tekst = prompt("Unesi neki tekst:");
tekst = tekst.toLowerCase();

let samoglasnici = ["a", "e", "i", "o", "u"];
let brojac = 0;

for (let i = 0; i < tekst.length; i++) {
  if (samoglasnici.includes(tekst[i])) {
    brojac++;
  }
}
console.log("Broj samoglasnika u tekstu je: " + brojac);*/

function zbroji(a, b) {
  return a + b;
}

function oduzmi(a, b) {
  return a - b;
}

function pomnozi(a, b) {
  return a * b;
}

function podijeli(a, b) {
  if (b === 0) {
    return "Dijeljenje s nulom nije dozvoljeno!";
  }
  return a / b;
}

let broj1 = parseFloat(prompt("Unesi prvi broj:"));
let broj2 = parseFloat(prompt("Unesi drugi broj:"));

console.log("Zbroj: " + zbroji(broj1, broj2));
console.log("Razlika: " + oduzmi(broj1, broj2));
console.log("Umnožak: " + pomnozi(broj1, broj2));
console.log("Količnik: " + podijeli(broj1, broj2));
