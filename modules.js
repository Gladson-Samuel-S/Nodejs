const { people, age } = require('./people')
console.log(people)

const filteredAge =  age.filter((item) => {
    return item < 20
})

console.log(filteredAge)

const os = require('os')
console.log(os.platform(), os.homedir())