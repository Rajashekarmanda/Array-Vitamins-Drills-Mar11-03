const items = require('./3-arrays-vitamins.cjs')
let sortedByNoOfVitamins = items.sort((a,b) => a.contains.split(',').length > b.contains.split(',').length ? -1 : a.contains.split(',').length < b.contains.split(',').length ? 1 : 0)
console.log(sortedByNoOfVitamins)