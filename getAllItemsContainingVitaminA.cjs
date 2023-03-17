const items = require('./3-arrays-vitamins.cjs')
const filterVitaminAArr = items.filter((eachItem) => (eachItem.contains.includes('Vitamin A')))
console.log(filterVitaminAArr)