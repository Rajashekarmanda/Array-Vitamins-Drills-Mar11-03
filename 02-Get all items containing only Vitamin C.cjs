const items = require('./3-arrays-vitamins.cjs')
const filterVitaminCArr = items.filter((eachItem) => eachItem.contains === "Vitamin C")

console.log(filterVitaminCArr)