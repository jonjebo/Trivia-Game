$(document).ready(function(){
    var questions = new Array();
    questions[1] = 'What do plants need to grow?';
    questions[2] = 'What is the largest state in the U.S?',
    questions[3] = 'How many countries are in the world?';
    
    var choices = new Array();
    choices[1] = ['Water', 'Whiskey', 'Wine' , 'Tequila'],
    choices[2] = ['California', 'Alaska', 'Chicago', 'Texas'],
    choices[3] = ['205', '108', '345', '195'];
    
    var answers = new Array();
    answers[1] = ['Water'],
    answers[2] = ['Alaska'],
    answers[3] = ['195'];
    
    var score = 0;
    var gameStarted = false;
    var questionNumber = 1;
    var choiceNumber = 1;

    //Function for when start game is clicked
    $('#startGamebutton').on("click", function(){
        score = 0;
        questionNumber = 1;
        choiceNumber = 1;
        loadQuestions();
        gameStarted = true;
    })

    ///type difference causing error
    $('.clickAble').on('click', function(e){
        console.log(e.target.innerHTML);
        
        if ((e.target.innerHTML) == answers[choiceNumber]){
            score ++;
            console.log(score);
        }
        questionNumber ++;
        choiceNumber ++;
        if (questionNumber > 3 ){
            gameStarted = false;
            alert('Your final score was...' + score);
            return;
        }
        loadQuestions();
    })

    function loadQuestions(){
        document.getElementById('currentQuestion').innerHTML = questions[questionNumber]
        
        $('#choiceOne').text(choices[choiceNumber][0]);
        $('#choiceTwo').text(choices[choiceNumber][1]);
        $('#choiceThree').text(choices[choiceNumber][2]);
        $('#choiceFour').text(choices[choiceNumber][3]);
    }


});

