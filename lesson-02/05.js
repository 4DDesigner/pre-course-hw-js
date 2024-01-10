let passport = {
    name: "Petr",
    surname: "Petrov"
};
console.log(passport.name);
let copyPassport = JSON.parse(JSON.stringify(passport));
copyPassport.name = 'Ivan';
console.log(copyPassport.name);