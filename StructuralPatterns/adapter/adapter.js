let {local}=require('./localStorage.js')




//the adapter pattern acts a a bridge of a functionality which is not present in the 


function adapter_pattern(){

  local.setItem(0,1)
  console.log(local.getLength())
  console.log(local.getItem(0))





  
}


module.exports={
  adapter_pattern
}