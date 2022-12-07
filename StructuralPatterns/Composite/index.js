var CatalogItem = require('./CatalogItem.js');
const {CatalogueGrp}=require('./CatalogGrp.js')



function run(){
var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

arr=[boots,sneakers,flipFlops]
console.log(arr)

let test=new CatalogueGrp('footwear',arr)
  console.log(test)
  
}


module.exports={
  run
}