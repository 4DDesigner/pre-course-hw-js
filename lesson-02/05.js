let passport = {
    name: "Petr",
    surname: "Petrov"
};
console.log(passport);
let copyPassport = JSON.parse(JSON.stringify(passport));
copyPassport.name = 'Ivan';
console.log(copyPassport);