//------------------Declaration--------------------

let namePlayer1 = document.querySelector('.namePlayer1')
let namePlayer2 = document.querySelector('.namePlayer2')
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
        document.querySelector(".result").textContent = "O turn's";   
    }
    else {
        Player_2.push(id)
        Player = "x"
        document.getElementById(id).style.background = "#44b2e8";
        document.querySelector(".result").textContent = "X turn's"
    }
// console.log(Player_1)
}
function cheque_gagnant(){
    if(!check_winner){
        // if player X win
        if(Player_1.includes("1") && Player_1.includes("2") && Player_1.includes("3")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }
        else if(Player_1.includes("4") && Player_1.includes("5") && Player_1.includes("6")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }
        else if(Player_1.includes("7") && Player_1.includes("8") && Player_1.includes("9")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }
        else if(Player_1.includes("1") && Player_1.includes("4") && Player_1.includes("7")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }
        else if(Player_1.includes("2") && Player_1.includes("5") && Player_1.includes("8")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }
        else if(Player_1.includes("3") && Player_1.includes("6") && Player_1.includes("9")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }
        else if(Player_1.includes("1") && Player_1.includes("5") && Player_1.includes("9")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }
        else if(Player_1.includes("3") && Player_1.includes("5") && Player_1.includes("7")){
            document.querySelector(".result").textContent = "x win"
            check_winner = true

        }

            // if player o win

        if(Player_2.includes("1") && Player_2.includes("2") && Player_2.includes("3")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true

        }
        else if(Player_2.includes("4") && Player_2.includes("5") && Player_2.includes("6")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true

        }
        else if(Player_2.includes("7") && Player_2.includes("8") && Player_2.includes("9")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true

        }
        else if(Player_2.includes("1") && Player_2.includes("4") && Player_2.includes("7")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true

        }
        else if(Player_2.includes("2") && Player_2.includes("5") && Player_2.includes("8")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true

        }
        else if(Player_2.includes("3") && Player_2.includes("6") && Player_2.includes("9")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true

        }
        else if(Player_2.includes("1") && Player_2.includes("5") && Player_2.includes("9")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true


        }
        else if(Player_2.includes("3") && Player_2.includes("5") && Player_2.includes("7")){
            document.querySelector(".result").textContent = "O win"
            check_winner = true

        }
        //
    }
    else{
        // if equal
        if((Player_1.length + Player_2.length) == 9){
            document.querySelector(".result").textContent = "you are equal in the game"
        }
    }
}