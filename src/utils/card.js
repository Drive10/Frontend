
export function formatCard(v){
 return v.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim()
}

export function luhnCheck(card){

 let sum=0
 let alt=false

 for(let i=card.length-1;i>=0;i--){

  let n=parseInt(card[i])

  if(alt){
   n*=2
   if(n>9) n-=9
  }

  sum+=n
  alt=!alt

 }

 return sum%10===0

}
