const items = require('./3-arrays-vitamins.cjs')
const availableItemsArr = items.filter((eachItem) => eachItem.available === true )
console.log(availableItemsArr)