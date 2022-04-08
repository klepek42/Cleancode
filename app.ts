// Varianten
/*
    aus Woordl --> level, never, mount (Wort erraten)

    - 1 fünfstellige Primzahl  --> 10353    <-- UMSETZUNG
    - 5 einstellige Primzahlen --> 3 7 5 2 3
    - 5 ein- oder mehrstellige Primzahlen --> 3 17 23 31 19
*/

// Function expression mit Arrow Function (eigener this scope als üblich)
//const isPrime = () => {};

// Function statement
/*
function isPrime () {

}


*/

    /* Ideen für Namen
    Technisch
    - number
    - integerValue

    Hybrid
    - numberToCheck

    Fachlich
    - guess (semantisch größter Mehrwert als die technischen, aber sehr offen)
    - toCheck
    - candidate
    - possiblyPrime

*/


const isDivisibleWithoutRemainder = function (dividend: number, divisor: number): boolean {
    return dividend % divisor === 0;
};

const isInteger = function (candidate: number): boolean {
    return Math.floor(candidate) === candidate
}

const isNaturalNumber = function (candidate: number): boolean {
    if (!isInteger(candidate)) {
        return false;
    }
    if (candidate < 1) {
        return false;
    }

    return true;
}


// Function expression
const isPrime = function (candidate: number): boolean {
    if(!isNaturalNumber(candidate)) {
        return false;
    }
    if (candidate < 2) {
        return false;
    }
    
    // See https://de.wikipedia.org/wiki/Primzahltest#Probedivision for details.
    const smallestDivisorToCheck = 2;
    const highestDivisorToCheck = Math.sqrt(candidate);

    for (let currentDivisor = smallestDivisorToCheck; currentDivisor <= highestDivisorToCheck; currentDivisor++) {
        if (isDivisibleWithoutRemainder(candidate, currentDivisor)) {
            return false;
        }
    }

    return true;
};

const candidates = [-1, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const candidate of candidates) {
    console.log({ candidate: isPrime(candidate) });
}