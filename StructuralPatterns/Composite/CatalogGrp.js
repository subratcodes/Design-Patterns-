class CatalogueGrp{
  constructor(name, composites){
    this.name=name
    this.composites=[]
  }

  print(){
  this.composites.forEach((items,index)=>{
    items.print()
  })
  }

  
}


module.exports={
  CatalogueGrp
}
