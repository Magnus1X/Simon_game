let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h3 =document.querySelector("h3");
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game started"); 
        started=true;
        levelUp();

    }
});
function btn1Flash(btn){
    btn.classList.add("flashwhite"); 
    setTimeout(function(){
        btn.classList.remove("flashwhite");
    },800);
}
function btn2Flash(btn) {
  btn.classList.add("flashgreen");
  setTimeout(function(){
    btn.classList.remove("flashgreen")
  },200);
}
function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`level: ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
        console.log(gameseq);

    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    btn1Flash(randbtn); 
    
}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout(levelUp,1000);
        }
        console.log("same value") ;
    }
    else{
        h3.innerHTML=`Game Over!Your score was <b>${level}<b><br> Press any key to start  `
    document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    
       btn2Flash(btn);
 
    let usercolor=btn.getAttribute("id")
    userseq.push(usercolor)
    console.log(usercolor);
    checkAns(userseq.length-1);
     
}
 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns)
 {
    btn.addEventListener("click",btnPress)
 }

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

