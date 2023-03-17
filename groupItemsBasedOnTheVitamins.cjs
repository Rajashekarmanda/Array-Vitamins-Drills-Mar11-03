const items = require('./3-arrays-vitamins.cjs')
let vitaminsArray = [], groupByVitamins = {}
items.map((eachVitamin) => {
    eachVitamin.contains.split(',').map((eachProduct) => (!vitaminsArray.includes(eachProduct)) ? vitaminsArray.push(eachProduct.trim()) : '')
})
for (let eachVitamin of new Set(vitaminsArray)) {
    items.map((eachProduct) => {
        if (eachProduct.contains.includes(eachVitamin) || eachProduct.contains.endsWith(eachVitamin)) {
            if (groupByVitamins[eachVitamin] === undefined) {
                groupByVitamins[eachVitamin] = []
                groupByVitamins[eachVitamin].push(eachProduct.name)
            } else {
                groupByVitamins[eachVitamin].push(eachProduct.name)
            }
        }
    })
}
console.log(groupByVitamins)

