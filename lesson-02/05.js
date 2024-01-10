let passport = {
    name: "Petr",
    surname: "Petrov",
};
let copyPassport = passport;
copyPassport = {
    name: 'Ivan',
    surname: 'Petrov'
}
console.log(passport);
console.log(copyPassport);