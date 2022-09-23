//------------------Declaration--------------------

let namePlayer1 = document.querySelector('.namePlayer1')
let namePlayer2 = document.querySelector('.namePlayer2')
let btn = document.querySelector(".btn")
let popup = document.querySelector(".popup")
let canvas = document.getElementById("my-canvas")
let check_winner = false;
let Player = "x";

//-------------get item from local storage----------

let namep1 = localStorage.getItem("Player1")
let namep2 = localStorage.getItem("Player2")

//---------------------------------------------------

namePlayer1.textContent = namep1;
namePlayer2.textContent = namep2;

let Player_1 = []
let Player_2 = []
let used_buttons = []


document.addEventListener("DOMContentLoaded", () =>{
    if(Player == "x"){
        document.querySelector(".result").textContent = namep1 +"'s" + " turn"; 
    }
});



function check_button(id){

    if(!used_buttons.includes(id))
    {
        used_buttons.push(id)
        if(!check_winner){
            Affichage(id)
        }
        cheque_gagnant()
    }
}

function Affichage(id) {

    document.getElementById(id).innerHTML = Player;
    if(Player == "x"){
        Player_1.push(id)
        Player = "o";
        document.getElementById(id).style.background = "#fd2a9e";
        document.querySelector(".result").textContent =  namep2 +"'s" + " turn"; 
        Mouse_click()  
    }
    else {
        Player_2.push(id)
        Player = "x"
        document.getElementById(id).style.background = "#44b2e8";
        document.querySelector(".result").textContent =  namep1 +"'s" + " turn"
        Mouse_click()
    }
// console.log(Player_1)
}
function cheque_gagnant(){
    if(!check_winner){
        // if player X win
        if(Player_1.includes("1") && Player_1.includes("2") && Player_1.includes("3")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()
        }
        else if(Player_1.includes("4") && Player_1.includes("5") && Player_1.includes("6")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()
        }
        else if(Player_1.includes("7") && Player_1.includes("8") && Player_1.includes("9")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()
        }
        else if(Player_1.includes("1") && Player_1.includes("4") && Player_1.includes("7")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()
        }
        else if(Player_1.includes("2") && Player_1.includes("5") && Player_1.includes("8")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()
        }
        else if(Player_1.includes("3") && Player_1.includes("6") && Player_1.includes("9")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
        else if(Player_1.includes("1") && Player_1.includes("5") && Player_1.includes("9")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()
        }
        else if(Player_1.includes("3") && Player_1.includes("5") && Player_1.includes("7")){
            document.querySelector(".content").textContent = "🎉" + namep1 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()
        }

            // if player o win

        if(Player_2.includes("1") && Player_2.includes("2") && Player_2.includes("3")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
        else if(Player_2.includes("4") && Player_2.includes("5") && Player_2.includes("6")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
        else if(Player_2.includes("7") && Player_2.includes("8") && Player_2.includes("9")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
        else if(Player_2.includes("1") && Player_2.includes("4") && Player_2.includes("7")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
        else if(Player_2.includes("2") && Player_2.includes("5") && Player_2.includes("8")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
        else if(Player_2.includes("3") && Player_2.includes("6") && Player_2.includes("9")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
        else if(Player_2.includes("1") && Player_2.includes("5") && Player_2.includes("9")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()


        }
        else if(Player_2.includes("3") && Player_2.includes("5") && Player_2.includes("7")){
            document.querySelector(".content").textContent = "🎉" + namep2 +" win 🎉" 
            popup.classList.add('active')
            canvas.classList.add('active')
            check_winner = true
            Sound()

        }
    }
        // if equal
        if(used_buttons.length == 9){
            document.querySelector(".content").textContent = "the game finiched with draw" 
            popup.classList.add('active')
            canvas.classList.remove('active')
        }
}
function Sound(){
    music_winner = document.getElementById("music_winner")
    music_winner.play();
}
function Mouse_click(){
    music_mouse_click_ = document.getElementById("mouse_click")
    music_mouse_click_.play();
}

var confettiElement = document.getElementById('my-canvas');
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();