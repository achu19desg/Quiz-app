const questions = [
    {
        topic :'science',
        question :'What color is the sky?',
        possibleAnswers : ['blue','yellow','orange','green'],
        correctAnswer: 'blue',
    },
    {
        topic :'sports',
        question :'Which sport is known as"the beautiful game"?',
        possibleAnswers : ['cricket','soccer','hockey','basketball'],
        correctAnswer: 'soccer',
    },
    {
        topic :'Film',
        question :'Which 1994 film features a character named simba"?',
        possibleAnswers : ['the lion king','moana','swapped','hopper'],
        correctAnswer: 'the lion king',
    },
    {
        topic :'place',
        question :'Which desert is the largest in the world?',
        possibleAnswers : ['arabic','Antarctic','sahara','thar'],
        correctAnswer: 'Antarctic',
    },
    {
        topic :'planet',
        question :'How many continents are there on earth?',
        possibleAnswers : ['eight','nine','six','seven'],
        correctAnswer: 'seven',
    },
    {
        topic :'nature',
        question :'What is the tallest mountain in the world?',
        possibleAnswers : ['nanda devi','dhaulagiri','mount everest','annapurna'],
        correctAnswer: 'mount everest',
    },
    {
        topic :'animal',
        question :'What is the fastest land animal?',
        possibleAnswers : ['cheetah','tiger','lion','jaguar'],
        correctAnswer: 'cheetah',
    },
    {
        topic :'year',
        question :'In which year did world war 2 end?',
        possibleAnswers : ['1934','1987','1945','1989'],
        correctAnswer: '1945',
    },
    {
        topic :'planet',
        question :'Which planet is know as the "Red planet"?',
        possibleAnswers : ['jupiter','mars','venus','saturn'],
        correctAnswer: 'mars',
    },
    {
        topic :'social media',
        question :'What is the worlds largest social media platform?',
        possibleAnswers : ['facebook','instagram','snapchat','whatsapp'],
        correctAnswer: 'facebook',
    },

];
const question = document.querySelector("#question")
const answersbtn= document.querySelector("#answersbtn")
const nxtbtn = document.querySelector("#nxtbtn")

let currentQuestionNo=0;
let score=0;

function startQuiz(){
    currentQuestionNo=0;
    score=0;
    nxtbtn.classList.add("hidden")
    showQuestion();
}

function showQuestion(){
    resetState();
    let currntQuestion = questions[currentQuestionNo];
    let questionNo= currentQuestionNo+1;
    // display question
    question.innerHTML=questionNo+". "+currntQuestion.question;

    currntQuestion.possibleAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer;
        button.className="bg-gray-600 hover:bg-violet-600 text-white py-3 px-4 rounded-xl transition text-xl text-left font-serif cursor-pointer"
        answersbtn.appendChild(button);
        if(answer === currntQuestion.correctAnswer){
            button.dataset.correct="true";
        }

        button.addEventListener("click",selectAnswer);
    })

}

function resetState(){
    nxtbtn.classList.add("hidden")
    answersbtn.innerHTML = "";

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add("bg-green-600","hover:bg-green-600")
        score++;
    }
    else{
        selectedBtn.classList.add("bg-red-500","hover:bg-red-500")
    } 
    Array.from(answersbtn.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("bg-green-600","hover:bg-green-600")
        
        }
        button.disabled = true;
        button.classList.add("cursor-not-allowed");
    });
    nxtbtn.classList.remove("hidden")
}

function showScore(){
    resetState();
    question.innerHTML =`You scored ${score} out of ${questions.length}! 🎉`;
    nxtbtn.innerHTML="Play Again!"
    nxtbtn.classList.remove("hidden")
}

function handleNextButton(){
    currentQuestionNo++;
    if(currentQuestionNo < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nxtbtn.addEventListener("click",()=>{
    if(currentQuestionNo < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
