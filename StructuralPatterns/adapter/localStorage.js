class LocalStorage{

  constructor(){
    this.store=new Map()
    this.length=0
  }
  
  getLength(){
    return this.length 
  }

  getItem(key){
    if(this.store.has(key)){
      return this.store.get(key)
    }else return null 
  }
  
  setItem(key,value){
    if(!this.store.has(key)){
      this.store.set(key,value)
      this.length++
      return true
    }else throw 'Key already exist, please enter a different key'
    
  }
}



//exports the module local storage.

module.exports={
local:new LocalStorage()
}