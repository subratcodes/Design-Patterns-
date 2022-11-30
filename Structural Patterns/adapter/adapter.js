let {local}=require('./localStorage.js')

function adapter_pattern(){

  local.setItem(0,1)
  console.log(local.getLength())
  console.log(local.getItem(0))





  
}


adapter_pattern()