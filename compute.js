
const add = (a, b) => {
    return `sum is ${a + b}`
}

const substract = (a, b) =>{
    console.log(a-b)
    return a - b
}

const multiplication = (a, b) => {
    return a * b
}

const division = (a, b) => {
    return a / b
}

const modulo = (a, b) => {
    return a % b
}

module.exports = {
    add,
    substract,
    multiplication,
    division,
    modulo
}