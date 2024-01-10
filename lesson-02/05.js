let passport = {
    name: "Petr",
    surname: "Petrov",
};
let copyPassport = JSON.parse(JSON.stringify(passport));
copyPassport.name = 'Ivan';

console.log(passport);
console.log(copyPassport);