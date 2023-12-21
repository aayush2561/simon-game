let buttonColours=["red","green","blue","yellow"];
let gamePattern=[];
let userpattern=[];
let gamestart=false;
let level=0;

 $(document).keydown(function()
 {
     if(!gamestart){
         next();
         gamestart=true; 
        
}});

$(".color").click(function()
{
    let usercolor = $(this).attr("id");
    userpattern.push(usercolor);
    animatePress(usercolor);

    checkAnswer(userpattern.length-1);
});
function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userpattern[currentLevel]){
        if (userpattern.length===gamePattern.length)
        {
            setTimeout(function()
            {
                next();
            },1000)
        }

    }
    else{
        $("body").addClass("game-over")
        $("h2").text("Game Over please press any key to restart again");
    
       setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200)
      startover();
    }
}

function next()
{
    userpattern=[]
    level++;
    $("h2").text("Level "+level);
    let randomNumber=Math.floor(Math.random()*4);
    let randomchosecolor=buttonColours[randomNumber];
    gamePattern.push(randomchosecolor);
    $("#" + randomchosecolor).fadeIn(100).fadeOut(100).fadeIn(100);
}
function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
    },100);
}

function startover()
{
    level=0;
    gamePattern = [];
    gamestart = false;
}
