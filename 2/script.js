let inp=document.getElementById("inp")
let alf=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let alf2=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let num=[1,2,3,4,5,6,7,8,9,0]
let smv=["+","-","*","!","/"]
let arr=alf.concat(alf2,num,smv)


function Add(){
    let pass=""
    for(let i=0;i<inp.value;i++){
     let rnd=Math.floor(Math.random()*arr.value)
   pass+=rnd
    }
    if(!inp.value){
           alert("uğursuz oldu")
           } else{
               document.getElementById("show").innerHTML=pass
           }
 
}