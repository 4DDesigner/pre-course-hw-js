const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
let found =  words.indexOf("апельсин");
if( found >= 0) 
console.log("Ура! Нашел");
else {
    console.log("Придется поискать в другом магазине…");
}