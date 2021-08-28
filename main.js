//--Plus-----
sum();
var plusBtn=document.querySelectorAll('.plus-btn');
for ( let i=0; i< plusBtn.length; i++){
    plusBtn[i].addEventListener("click",function(){
        plusBtn[i].nextElementSibling.innerHTML ++;
        sum();
    })
    
}

//--Like----//
var like=document.querySelectorAll(".like-btn");
for(let i=0;i<like.length;i++){
    like[i]=addEventListener("click",function(){
    if(like[i].style.color==="black"){
        like[i].style.color="red";
    } 
    else{like[i].style.color="black";} })
}

//--remove----//
var rmv=document.querySelectorAll('.delete-btn');
for(let i=0;i<rmv.length;i++){
    rmv[i].addEventListener("click",function(){
        rmv[i].parentElement.parentElement.remove();
        
    })
}
//--Minus----

var minusBtn=document.querySelectorAll('.minus-btn');
for(let i=0;i<minusBtn.length;i++){
minusBtn[i].addEventListener("click",function(){
    if(minusBtn[i].previousElementSibling.innerHTML>0){
        minusBtn[i].previousElementSibling.innerHTML --;
        sum();
    }
    else{minusBtn[i].previousElementSibling.innerHTML=0;}
sum();
})
}



//--Total----
function sum(){
    var prices=document.querySelectorAll('.price');
    var quantity=document.querySelectorAll('.quantity1');
    var total=document.querySelector('#total');
    var sum=0;
    for(let i=0;i<prices.length;i++){
        sum=sum+((prices[i].innerHTML)*(quantity[i].innerHTML));
      
    }
    return total.innerText=sum;
    
}


