let a=1
function reset(){
document.getElementById('chance').innerHTML="Player 1's Move"
 a=1
}
document.getElementById('chance').innerHTML="Player 1's Move"
function add(elementId){
    if(document.getElementById(elementId).innerHTML==="") {a+=1}
      if((a%2===0)&&(document.getElementById(elementId).innerHTML==="")){
      document.getElementById('chance').innerHTML="Player 2's Move"
       document.getElementById(elementId).innerHTML="O"
    }
    else if((a%2!==0)&&(document.getElementById(elementId).innerHTML==="")){
      document.getElementById('chance').innerHTML="Player 1's Move"
      document.getElementById(elementId).innerHTML="X"
      }
    if(check()===1) return;
    if(a==10){
      document.getElementById('chance').innerHTML="Draw !!!"
      clear()
      setTimeout(reset,3000)
    }
}
function clear(){
document.getElementById('g1').innerHTML=""  
    document.getElementById('g2').innerHTML=""
      document.getElementById('g3').innerHTML=""
      document.getElementById('g4').innerHTML=""
      document.getElementById('g5').innerHTML=""
      document.getElementById('g6').innerHTML=""
      document.getElementById('g7').innerHTML=""
      document.getElementById('g8').innerHTML=""
      document.getElementById('g9').innerHTML=""
}

function check(){
  if((document.getElementById('g1').innerHTML==="X")&&(document.getElementById('g4').innerHTML==="X")&&(document.getElementById('g7').innerHTML==="X")){
      clear()
      document.getElementById('chance').innerHTML="Player 2 Won!!!"
      setTimeout(reset,3000)
      return 1
  }
  if((document.getElementById('g2').innerHTML==="X")&&(document.getElementById('g5').innerHTML==="X")&&(document.getElementById('g8').innerHTML==="X")){
   clear()
    document.getElementById('chance').innerHTML="Player 2 Won!!!"
    setTimeout(reset,3000)
    return 1
}
if((document.getElementById('g3').innerHTML==="X")&&(document.getElementById('g6').innerHTML==="X")&&(document.getElementById('g9').innerHTML==="X")){
  clear()
  document.getElementById('chance').innerHTML="Player 2 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g1').innerHTML==="X")&&(document.getElementById('g5').innerHTML==="X")&&(document.getElementById('g9').innerHTML==="X")){
  clear()
  document.getElementById('chance').innerHTML="Player 2 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g1').innerHTML==="X")&&(document.getElementById('g2').innerHTML==="X")&&(document.getElementById('g3').innerHTML==="X")){
  clear()
  document.getElementById('chance').innerHTML="Player 2 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g4').innerHTML==="X")&&(document.getElementById('g5').innerHTML==="X")&&(document.getElementById('g6').innerHTML==="X")){
  clear()
  document.getElementById('chance').innerHTML="Player 2 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g7').innerHTML==="X")&&(document.getElementById('g8').innerHTML==="X")&&(document.getElementById('g9').innerHTML==="X")){
  clear()
  document.getElementById('chance').innerHTML="Player 2 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g3').innerHTML==="X")&&(document.getElementById('g5').innerHTML==="X")&&(document.getElementById('g7').innerHTML==="X")){
  clear()
  document.getElementById('chance').innerHTML="Player 2 Won!!!"
  setTimeout(reset,3000)
  return 1
}

if((document.getElementById('g1').innerHTML==="O")&&(document.getElementById('g4').innerHTML==="O")&&(document.getElementById('g7').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g2').innerHTML==="O")&&(document.getElementById('g5').innerHTML==="O")&&(document.getElementById('g8').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g3').innerHTML==="O")&&(document.getElementById('g6').innerHTML==="O")&&(document.getElementById('g9').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g1').innerHTML==="O")&&(document.getElementById('g2').innerHTML==="O")&&(document.getElementById('g3').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g4').innerHTML==="O")&&(document.getElementById('g5').innerHTML==="O")&&(document.getElementById('g6').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g7').innerHTML==="O")&&(document.getElementById('g8').innerHTML==="O")&&(document.getElementById('g9').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g1').innerHTML==="O")&&(document.getElementById('g5').innerHTML==="O")&&(document.getElementById('g9').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
if((document.getElementById('g3').innerHTML==="O")&&(document.getElementById('g5').innerHTML==="O")&&(document.getElementById('g7').innerHTML==="O")){
  clear()
  document.getElementById('chance').innerHTML="Player 1 Won!!!"
  setTimeout(reset,3000)
  return 1
}
}
