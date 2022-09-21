//------------------Declaration--------------------

namePlayer1 = document.querySelector('.namePlayer1')
namePlayer2 = document.querySelector('.namePlayer2')

//-------------get item from local storage----------

let namep1 = localStorage.getItem("Player1")
let namep2 = localStorage.getItem("Player2")


//---------------------------------------------------
namePlayer1.textContent = namep1;
namePlayer2.textContent = namep2;