let result; 
let btnPlusOne = document.querySelector("#btnPlus1")
let btnMinusOne = document.querySelector("#btnMinus1")
let btnPlusTwo = document.querySelector("#btnPlus2")
let btnMinusTwo = document.querySelector("#btnMinus2")
let btnPlusThree = document.querySelector("#btnPlus3")
let btnMinusThree = document.querySelector("#btnMinus3")

let Price = document.querySelectorAll(".total");
let totalPrice = document.querySelector("#total")
let btnLike1= document.querySelector("#like1")
let btnLike2= document.querySelector("#like2")
let btnLike3 = document.querySelector("#like3")
let btnDelete1= document.querySelector("#delete1")
let btnDelete2= document.querySelector("#delete2")
let btnDelete3= document.querySelector("#delete3")


function add(event) {

    var a, b, c;
    a = event.target.parentNode.querySelector("h3")
    b = event.target.parentNode.querySelector("h4")
    c = event.target.parentNode.querySelector("h2")
    a.innerHTML = Number(a.innerHTML) + 1
     
result = (Number(a.innerHTML)) * (Number(c.innerHTML));
        b.innerHTML = Number(`${result}`);
        Total()
}
function sub(event) {

    var a,b,c; 
    a = event.target.parentNode.querySelector("h3")
    c = event.target.parentNode.querySelector("h2")
    b = event.target.parentNode.querySelector("h4")
    if (Number(a.innerHTML)>0) {
       a.innerHTML = Number(a.innerHTML) - 1
    
result = (Number(a.innerHTML)) * (Number(c.innerHTML));
        b.innerHTML = Number(`${result}`);
        Total()
 
    } else {
        if (Number(a.innerHTML)===0) {
            event.target.parentNode.remove(); 
        }
    }
    
 
}


function Total() {
        let total = 0;
for ( i = 0; i < Price.length; i++) {
   
   total =total+ Number(Price[i].innerHTML)  
}

       
totalPrice.innerHTML=`${total}`
    
}
Total()

btnPlusOne.addEventListener("click", add); 

btnMinusOne.addEventListener("click", sub);

btnPlusTwo.addEventListener("click", add); 

btnMinusTwo.addEventListener("click", sub);
btnPlusThree.addEventListener("click", add); 

btnMinusThree.addEventListener("click", sub);

btnLike1.addEventListener("click",like);
btnLike2.addEventListener("click",like);
btnLike3.addEventListener("click",like);
   


btnDelete1.addEventListener("click",function (e) {
    let a; 
    a = e.target.parentNode.remove();
})
btnDelete2.addEventListener("click",function (e) {
   let a; 
    a = e.target.parentNode.remove();  
})
btnDelete3.addEventListener("click",function (e) {
     let a; 
    a = e.target.parentNode.remove();
})

function like(event){
    

    
  if (event.target.style.color==="red" ) {
   
      event.target.style.color = "inherit"
     
      } 
   else  {
     event.target.style.color = "red"
 }
}
