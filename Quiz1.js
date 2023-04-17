var start = document.getElementById('start') ;
var quiz = document.getElementById('quiz');
var question = document.getElementById('question') 
var timer = document.getElementById('timer')
var next = document.getElementById('next')

var answerA= document.getElementById('a')
var answerB = document.getElementById('b')
var answerC= document.getElementById('c')
var answerD= document.getElementById('d')

const quizData = [
    {
        question: "What is the true name of JavaScript?",
a: "Java",
b: "EMA Script",
c: "ECMA Script",
d: "EDM Script",
correct: "c",
    },
    {
        question: "What is CSS short for?",
        a: "Cicada Style Services",
        b: "Cascading Style Sheet",
        c: "Conditional Style Services",
        d: "Cursive Script Sheet",
        correct: "b",
        
    },
    {
    question: "Whats is the meaning of DOM?",
      
a: " Direct Object Model ",
b: " Document Object Model ",
c: " Document Only Mold" ,
d: " Document Organizational Model ",
correct: "b",
    },
    {
        question: "If var x = 7, what'll be the result of x++?",
        
a: "9",
b: "12",
c: "6",
d: "8",
correct: "d",
     },
     {
         question: "What the tools that browsers have available?",
         a: "DOM",
         b: "API",
         c: "CSS",
         d: "Methods",
         correct: "b",
     },
     {
         question: "Which language runs in the web browser?",
         a: "CSS",
        b: "Python",
        c: "React",
        d: "JavaScript",
         correct: "d",
   }
];
// another failed attempt at the start button. I need a better grasp of chaining code together. might pseudo coding help.
// start.onclick = startQuiz(), startCountdown();

// got the time to work. finally. havent figired out how to connect it to the start button yet. working on it.
function startCountdown(seconds){
    var counter = seconds
    const interval = setInterval(() => {
        
        // console.log(counter);
       
        counter--;
        timer.textContent = 'Time Left  ' + counter;

        if(counter <= 0){
            clearInterval(interval)
            timer.textContent = counter + '  secs.  Times Up!';

            // endQuiz();


        }
        
    },1000);

    
}

startCountdown(60);

//got the first question to show up. havent fully figured this one out yet.

 function startQuiz(){
 
    var x = -1; x <= quizData.length; x++;


    question.textContent = quizData[x].question;

    answerA.textContent = quizData[x].a;
  
    answerB.textContent = quizData[x].b;
    
    answerC.textContent = quizData[x].c;
    
    answerD.textContent = quizData[x].d;
  
   
    answerA.addEventListener('click',function(){});
   answerB.addEventListener('click', function(){});
   answerC.addEventListener('click', function(){});
   answerD.addEventListener('click', function(){});

};

   startQuiz()


