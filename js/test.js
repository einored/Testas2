/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)*/
console.log('-----1-----'); 
const a = 10;
const b = 2;
if(a > b)
    console.log(`a(${a}) > b(${b}), a didesnis`);
else if(a < b)
    console.log(`a(${a}) < b(${b}), b didesnis`);
else
    console.log(`a(${a}) == b(${b}), skaiciai lygus`);

/*2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)*/
console.log('-----2-----'); 
const skNuo = 1;
const skIki = 10;
for (let i = skNuo; i <= skIki; i++) {
    console.log(i);    
}

/*3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)*/
console.log('-----3-----'); 
const nuo = 0;
const iki = 10;
const zingsnis = 2;
for (let i = nuo; i <= iki; i += zingsnis){
    console.log(i); 
}

/*4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)*/
console.log('-----4-----'); 
const randomNuo = 1;
const randomIki = 10;
const arrLength = 5;
for (let i = 0; i < arrLength; i++) {
        console.log(Math.floor(Math.random() * (randomIki - randomNuo + 1) ) + randomNuo);
}

/*5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)*/
console.log('-----5-----'); 
const randNuo = 1
const randIki = 10;
let randSk = Math.floor(Math.random() * (randIki - randNuo + 1) ) + randNuo;
while (randSk !== 5){
    console.log(randSk);
    randSk = Math.floor(Math.random() * (randIki - randNuo + 1) ) + randNuo;
}
console.log(randSk);

/*6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)*/
console.log('-----6-----'); 
const arrayLength = 20
const from = 10;
const to = 30;
let arr = new Array();
for (let i = 0; i < arrayLength; i++) {
    arr[i] = Math.floor(Math.random() * (to - from + 1) ) + from;
}
console.log(arr);

let arrMaxValue = arr[0];
for (let i = 0; i < arr.length; i++) {
    if(arrMaxValue < arr[i])
        arrMaxValue = arr[i];
}
console.log('Didziausia masyvo reiksme = ' + arrMaxValue);

/*7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)*/
console.log('-----7-----'); 
const letters = "ABCD";
const lengthWord = 100;
let word = new Array();
for (let i = 0; i < lengthWord; i++) {
    word[i] = letters.charAt(Math.floor(Math.random() *  letters.length));    
}
console.log(word);

let letterA = 0;
let letterB = 0;
let letterC = 0;
let letterD = 0;
for (let i = 0; i < word.length; i++) {
    if(word[i] === "A")
        letterA++;
    else if(word[i] === "B")
        letterB++;
    else if(word[i] === "C")
        letterC++;
    else if(word[i] === "D")
        letterD++;
}
console.log(`\"A\" = ${letterA}; \"B\" = ${letterB}; \"C\" = ${letterC}; \"D\" = ${letterD};`);

/*8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)*/
console.log('-----8-----'); 
function lygineSuma(a, b) {
    if(typeof a === "number" && typeof b === "number"){
        if((a+b)%2 === 0)
            return `Skaiciai: ${a} + ${b} = ${a + b} (suma lygine)`;
        else
            return `Skaiciai: ${a} + ${b} = ${a + b} (suma nelygine)`;
    }
    else if(typeof a === "object" && typeof b === "object"){
        if((a.length + b.length)%2 === 0)
            return `Masyvai: ${a.length} + ${b.length} = ${a.length + b.length} (suma lygine)`;
        else
            return `Masyvai: ${a.length} + ${b.length} = ${a.length + b.length} (suma nelygine)`;
    }
    else
        return 'klaida';
}
console.log(lygineSuma([1, 2, 'sd'], ['asd', 'fewaf', 3421, 4325, 'asfew']));

/*9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)*/
console.log('-----9-----'); 
function pirminisSkaicius(sk) {
    let isPrime = true;
    if(typeof sk !== "number")   
        return `Kintamasis ${sk} nera skaicius`;
    else{
        if (sk > 1){
            for (let i = 2; i < sk; i++) {
                if (sk % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime)
                return `Skaicius ${sk} yra pirminis`;
            else
                return `Skaicius ${sk} nera pirminis`;
        }
        else
            return `Skaicius ${sk} nera pirminis`;
    }
}
console.log(pirminisSkaicius(7));

/*10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)*/
console.log('-----10-----'); 
function telefonoNumeris(mas10){
    let stringNr = '';
    for (let i = 0; i < mas10.length; i++) {
        if(stringNr.length === 0)
            stringNr += '(' + mas10[i];
        else if(stringNr.length === 4)
            stringNr += ') ' + mas10[i];
        else if(stringNr.length === 9)
            stringNr += '-' + mas10[i];
        else
            stringNr += mas10[i]
    }
    console.log(stringNr);
}
const telNrMas = [3, 7, 0, 6, 7, 4, 5, 3, 4, 2, 3];
telefonoNumeris(telNrMas);