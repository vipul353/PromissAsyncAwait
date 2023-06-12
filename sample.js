function FirstPromise(n){
   return new Promise(
    (Resolve,Reject)=>{
       if(n%2==0){
           Resolve(`${n} is even`)
       }else{
        Reject(`${n} is odd`)
       }
    }
   )
}


function secondPromise(n){
  return new Promise(
   (Resolve,Reject)=>{
      if(n%2==0){
          Resolve(`${n} is even`)
      }else{
       Reject(`${n} is odd`)
      }
   }
  )
}

Promise.all([FirstPromise(1),secondPromise(3)])
.then((value)=>{console.log(value)})
.catch((value)=>{console.log(value)})
