const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];
function createColorString(item) {
    return item  === "черный" || item  === "красный" || item  === "желтый"
}
console.log(colors.filter(createColorString).join('-'));






