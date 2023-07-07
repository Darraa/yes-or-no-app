const api = "https://yesno.wtf/api";

const ball = document.getElementById('ball');
const getAnswBtn = document.getElementById("button");
const input = document.getElementById("input");
let ballAnswer = document.getElementById("answer");
const error = document.getElementById('error');

let isRequestInProgress = false;


//------------CALL THE API----------------

const fetchAnswer = () => {
    setIsRequestInProgress(true)
    setDisabledState(true);
    ball.classList.add('shake__ball')// Add loading state

    fetch(api)
        .then((data) => data.json())
        .then((data) => showAnswer(data.answer));
        
};

//------------CLEANER RESPONSE----------------

const cleanerResponse = () =>{
    setTimeout(()=>{
        ballAnswer.innerHTML = '';
        
        input.value = '';

        setIsRequestInProgress(false);
        setDisabledState(false);
    }, 3000)
};

//------------ SHOW ERROR----------------

const showError =()=>{
    error.innerHTML = 'Enter the question';

    setTimeout(() =>{
        error.innerHTML= '';
    }, 3000);
};

//------------MANAGE API REQUESTS----------------

const setDisabledState = (isDisabling) =>{
    if(isDisabling){
        getAnswBtn.setAttribute('disabled', 'disabled');
        input.setAttribute('disabled', 'disabled');
    }else{
        getAnswBtn.removeAttribute('disabled');
        input.removeAttribute('disabled');
    }
};

const setIsRequestInProgress = (value) =>{
    isRequestInProgress = value;
};

const getAnswer = () =>{
    if(isRequestInProgress) return;
    if(!input.value) return showError();
    fetchAnswer();
};

//------------ OUTPUT THE API'S ANSWER & ATTACH EVENT LISTENERS----------------

const showAnswer = (answer) => {
    setTimeout(() =>{        
        ballAnswer.innerHTML = `<p>${answer}</p>`;
        ball.classList.remove('shake__ball')// Remove loading state
        cleanerResponse();
    }, 1000)
};

const handleKeyEnter = (e) => {
    if(e.keyCode === 13){
        getAnswer();
    }
};
input.addEventListener("keypress", handleKeyEnter);


getAnswBtn.addEventListener("click", getAnswer);





