let gameSeq=[];
let userSeq=[];
let btns=["green", "red", "yellow", "purple"];
let h2=document.querySelector("h2");
let level=0;
let started=false;

document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game started");
        started=true;
    }
   levelUp();
});
function gameFlash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}

function userFlash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.textContent=`Level ${level}`;
    let randomIndx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndx];
    let randBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
   gameFlash(randBtn); 

}
function checkAnswer(idx){
    if(userSeq[idx]===gameSeq[idx]){
       
        if(userSeq.length===gameSeq.length){
        setTimeout((levelUp),1000);
    }
    }
       
    else{
      h2.innerHTML=`Game Over!Your score is ${level}. Press any key to restart.`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout( function(){
        document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
    }


}

function btnPress(){
  let btn=this;
  console.log(this);
  userFlash(btn);
  usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
   
   checkAnswer(userSeq.length-1);
}





let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset (){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}
