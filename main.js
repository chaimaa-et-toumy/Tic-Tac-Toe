//------------------Declaration--------------------

Firstplayer = document.querySelector('.Firstplayer')
Secondeplayer = document.querySelector('.Secondplayer')
go_to_play = document.querySelector('.go_to_play')
form = document.querySelector('.main')

// -------------------fisrt page (Validation input)--------------
go_to_play.addEventListener('click', () => {
    validateInputs();
});
function invalid (element, message) {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
function success (element){
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
function validateInputs (){
    let FisrtPlayerValue = Firstplayer.value.trim();
    let SecondeplayerValue = Secondeplayer.value.trim();
    i = 0;

    if(FisrtPlayerValue === '') {
        invalid(Firstplayer, 'Fisrt Player is required');
    } 
	else {
        success(Firstplayer);
        localStorage.setItem("Player1",FisrtPlayerValue)
        i++;
    }

    if(SecondeplayerValue === '') {
        invalid(Secondeplayer, 'Seconde Player is required');
    } 
	else {
        success(Secondeplayer);
        localStorage.setItem("Player2",SecondeplayerValue)    
        i++;
    }
    if(i==2){
        window.open('game.html',"_self")
    }

};