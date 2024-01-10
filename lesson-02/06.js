let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
console.log(passportWithAddress.address.city);
let copyPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));
copyPassportWithAddress.address.city = 'LA';
console.log(copyPassportWithAddress.address.city);