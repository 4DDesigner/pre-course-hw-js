let passport = {
    name: "Petr",
    surname: "Petrov"
};
let copyPassport = JSON.parse(JSON.stringify(passport));
copyPassport.name = 'Ivan';

console.log(passport.name + ' ' + passport.surname);
console.log(copyPassport.name + ' ' + copyPassport.surname);