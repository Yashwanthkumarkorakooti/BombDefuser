let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;



let uniqueId = setInterval(function(){
    countdown = countdown - 1 ;
    timerEl.textContent = countdown ;
    if(countdown === 0){
        timerEl.textContent = "BOOM 🐦‍🔥";
        clearInterval(uniqueId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event){
    let BombDefuserText = defuserEl.value;
    if(event.key === "Enter" && BombDefuserText === "Defuse" && countdown > 0){
        timerEl.textContent = "You did it! 😊";
        clearInterval(uniqueId);
    }
});