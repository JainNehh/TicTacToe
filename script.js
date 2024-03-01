let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-cont"); 
let msg=document.querySelector("#msg");
let main=document.querySelector(".main");
let turn= true; //player x //player Y

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>
{
box.addEventListener("click",()=>
{
    console.log("box was clicked");
    if(turn)
    {
 box.innerText="0" ;
 box.style.color="rgb(43, 35, 35)";
 box.style.backgroundColor="##c4c4c4";
 turn=false;
    }
    else{
        box.innerText="X";
        box.style.color="#36454F";
        box.style.backgroundColor="rgb(165, 206, 192)";
        turn=true;
    }
    box.disabled=true;
    checkwinner();
});
});

const resetGame=()=>
{
   
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
    

}


const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes=()=>
{
for(let box of boxes)
{
    box.disabled=false;
    box.innerText="";
    box.style.color="";
    box.style.backgroundColor="";
}
}
const showWinner =(winner)=>
    {
        
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msg.style.paddingTop="300px";
        msgContainer.classList.remove("hide");
        main.classList.add("hide");
        disableBoxes();
    };

const checkwinner=()=>
{
    for(let pattern of winpatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
       let pos1= boxes[pattern[0]].innerText;
            let pos2= boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;

            if(pos1 !="" && pos2 !="" && pos3 !="")
            {
                if(pos1=== pos2 && pos2===pos3)
                {
                    console.log("winner",pos1);
                    
                    showWinner(pos1);
                    
            
                   
                } 
            }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
