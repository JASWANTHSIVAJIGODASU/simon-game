var bc=["red","blue","green","yellow"];
var gp=[];
var ucp=[];
var level=0;
var started=false;

$("body").keypress(function(){
    if(!started){
    $("h1").text("Level "+level);
    started=true;
    nextSeq();
    }
})




function nextSeq(){
ucp=[];
level++;
$("h1").text("Level "+level);
var ran=Math.floor(Math.random()*4);
var ranChosenColor=bc[ran];
gp.push(ranChosenColor)
$("#" + ranChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(ranChosenColor);
}


$(".btn").on("click",function(){
    var ucc= $(this).attr("id");
    animatePress(ucc);
    ucp.push(ucc);
    playsound(ucc);
    checka(ucp.length);
 })






function playsound(name){
    var a=new Audio("sounds/"+name+".mp3");
    a.play();
}


function animatePress(ucc){
    $("#"+ucc).addClass("pressed");
    setTimeout(function(){
        $("#"+ucc).removeClass("pressed");
    },200);
     
}

function checka(jl){
    if(ucp[jl-1]===gp[jl-1])
    {
        console.log("correct")
        if(gp.length == ucp.length)
        {
            setTimeout(function (){
                nextSeq();
            },500);
        }
    }
    else{
        console.log("incorrect")
        var hg=new Audio("sounds/wrong.mp3");
        hg.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver()
    }
}

function startOver(){
  level=0;
  gp=[];
  started=false;
}