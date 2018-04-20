//The commented portions in this application signify different methods I utiilized to solve the problem.





//Global Variables/Objects
var question1 = {
        answer: "b",
        options: ["Parana River","Amazon River","Orinco River", "Rio de Plata"],
        question:"Which is the longest river in South America?"
    }
var question2 = {
        answer: "c",
        options: ["Spanish","Brazilian","Portuguese", "French"],
        question:["What language do they speak in Brazil?"]
    }
var question3 = {
        answer: "d",
        options: ["Argentina","Nicaragua","Guetemala", "Bolivia"],
        question:["Which of these countries does not have access to the ocean?"]
    }
var question4 = {
        answer: "a",
        options: ["Mexico City","Sao Pauolo","Buenos Aires", "Lima"],
        question:["Which city is the most populus?"]
    }
var question5 = {
        answer: "a",
        options: ["Chile","Venezuela","Argentina", "Brazil"],
        question:["Which country is not part of Mercosur?"]
    }
var correct = 0;
var incorrect = 0; 



//The commented portions in this application signify different methods I utiilized to solve the problem. 
//Build an array with objects equal to questions 
//Build a for loop to check whether or not correct answer was chosen
//
// var question1answerJQ = $('input[name="q1"]');
// var question1b = $('<input>',{type:"radio",name:"q1",value:"b",id:"q1b"});
// console.log($('input[name=q1]:checked').val());

// var question2answerJQ = $('input[name="q2"]');
// var question2c = $('<input>',{type:"radio",name:"q2",value:"c",id:"q2c"});

// var question3answerJQ = $('input[name="q3"]');
// var question3d = $('<input>',{type:"radio",name:"q3",value:"d",id:"q3d"});

// var question4answerJQ = $('input[name="q4"]');
// var question4a = $('<input>',{type:"radio",name:"q4",value:"a",id:"q4a"});

// var question5answerJQ = $('input[name="q5"]');
// var question5a = $('<input>',{type:"radio",name:"q4",value:"a",id:"q4a"});

//Method 1
// var clockrunning = false;
// var intervalid; 
// var timer = {
//     reset: function(){
//         time = 45;
//         console.log(time)
//         $("#Timer") = ("00:45");
//     },
//     start: function(){
//         if(!clockrunning){
//             intervalid = setInterval(timer.count,1000);
//             clockrunning = true;
//         }
//     },
//     count: function(){
//         timer.timer--; 
//         var converted = timer.timeConverter(timer.time);
//         console.log(converted);
//         $("#display").text(converted);
//     },
//     timeConverter: function(t) {

//         var minutes = Math.floor(t / 60);
//         var seconds = t - (minutes * 60);
       
//         if (seconds < 10) {
//           seconds = "0" + seconds;
//         }
    
//         if (minutes === 0) {
//           minutes = "00";
//         }
//         else if (minutes < 10) {
//           minutes = "0" + minutes;
//         }
    
//         return minutes + ":" + seconds;
//       }
// }

//Method 2
// function startTimer(duration,display){
//     var timer;
//     var seconds;
//     var display
//     timer = seconds 
//     setInterval(function(){
//         seconds = parseInt(timer%60,10);
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display = document.querySelector("#display");
//         display.textContent = "00" + ":" + seconds
//         if (--timer<0){
//             results()
//         }
//     },1000)
// }




//Functions
function questiondisplay() {
        var questionOne0 = $("#question1") 
        questionOne0.append(question1.question) 
        var questionOne = $("#question1answers")
        var question1a = $('<input>',{type:"radio",name:"q1",value:"a",id:"q1a"});
        questionOne.append(question1a,question1.options[0]);
        var question1b = $('<input>',{type:"radio",name:"q1",value:"b",id:"q1b"});
        questionOne.append(question1b,question1.options[1]);
        var question1c = $('<input>',{type:"radio",name:"q1",value:"c",id:"q1c"});
        questionOne.append(question1c,question1.options[2]);
        var question1d = $('<input>',{type:"radio",name:"q1",value:"d",id:"q1d"});
        questionOne.append(question1d,question1.options[3]);
        var questionTwo0 = $("#question2") 
        questionTwo0.append(question2.question) 
        var questionTwo = $("#question2answers")
        var question2a = $('<input>',{type:"radio",name:"q2",value:"a",id:"q2a"});
        questionTwo.append(question2a,question2.options[0]);
        var question2b = $('<input>',{type:"radio",name:"q2",value:"b",id:"q2b"});
        questionTwo.append(question2b,question2.options[1]);
        var question2c = $('<input>',{type:"radio",name:"q2",value:"c",id:"q2c"});
        questionTwo.append(question2c,question2.options[2]);
        var question2d = $('<input>',{type:"radio",name:"q2",value:"d",id:"q2d"});
        questionTwo.append(question2d,question2.options[3]);
        var questionThree0 = $("#question3") 
        questionThree0.append(question3.question) 
        var questionThree = $("#question3answers")
        var question3a = $('<input>',{type:"radio",name:"q3",value:"a",id:"q3a"});
        questionThree.append(question3a,question3.options[0]);
        var question3b = $('<input>',{type:"radio",name:"q3",value:"b",id:"q3b"});
        questionThree.append(question3b,question3.options[1]);
        var question3c = $('<input>',{type:"radio",name:"q3",value:"c",id:"q3c"});
        questionThree.append(question3c,question3.options[2]);
        var question3d = $('<input>',{type:"radio",name:"q3",value:"d",id:"q3d"});
        questionThree.append(question3d,question3.options[3]);
        var questionFour0 = $("#question4") 
        questionFour0.append(question4.question) 
        var questionFour = $("#question4answers")
        var question4a = $('<input>',{type:"radio",name:"q4",value:"a",id:"q4a"});
        questionFour.append(question4a,question4.options[0]);
        var question4b = $('<input>',{type:"radio",name:"q4",value:"b",id:"q4b"});
        questionFour.append(question4b,question4.options[1]);
        var question4c = $('<input>',{type:"radio",name:"q4",value:"c",id:"q4c"});
        questionFour.append(question4c,question4.options[2]);
        var question4d = $('<input>',{type:"radio",name:"q4",value:"d",id:"q4d"});
        questionFour.append(question4d,question4.options[3]);
        var questionFive0 = $("#question5") 
        questionFive0.append(question5.question) 
        var questionFive = $("#question5answers")
        var question5a = $('<input>',{type:"radio",name:"q4",value:"a",id:"q4a"});
        questionFive.append(question5a,question5.options[0]);
        var question5b = $('<input>',{type:"radio",name:"q4",value:"b",id:"q4b"});
        questionFive.append(question5b,question5.options[1]);
        var question5c = $('<input>',{type:"radio",name:"q4",value:"c",id:"q4c"});
        questionFive.append(question5c,question5.options[2]);
        var question5d = $('<input>',{type:"radio",name:"q4",value:"d",id:"q4d"});
        questionFive.append(question5d,question5.options[3]);
}

function results() {
        console.log($('input[name=q1]:checked').val());
        var userSelect0 = $('input[name=q1]:checked').val();
        console.log(userSelect0);
        if (userSelect0 == question1.answer){
            correct++;
            console.log(correct) 
        }
        else if (userSelect0 != question1.answer){
            incorrect++;
            console.log(incorrect);
        }
        console.log($('input[name=q2]:checked').val());
        var userSelect1 = $('input[name=q2]:checked').val();
        console.log(userSelect1);
        if (userSelect1==question2.answer){
            correct++;
            console.log(correct) 
        }
        else if (userSelect1!=question2.answer){
            incorrect++;
            console.log(incorrect);
        }
        console.log($('input[name=q3]:checked').val());
        var userSelect3 = $('input[name=q3]:checked').val();
        console.log(userSelect3);
        if (userSelect3 == question3.answer){
            correct++;
            console.log(correct) 
        }
        else if (userSelect3 != question3.answer){
            incorrect++;
            console.log(incorrect);
        }
        console.log($('input[name=q4]:checked').val());
        var userSelect4 = $('input[name=q4]:checked').val();
        console.log(userSelect4);
        if (userSelect4==question4.answer){
            correct++;
            console.log(correct) 
        }
        else if (userSelect4!=question4.answer){
            incorrect++;
            console.log(incorrect);
        }
        console.log($('input[name=q5]:checked').val());
        var userSelect5 = $('input[name=q5]:checked').val();
        console.log(userSelect5);
        if (userSelect5==question5.answer){
            correct++;
            console.log(correct) 
        }
        else if (userSelect5==question5.answer){
            incorrect++;
            console.log(incorrect);
        }
}

function resultsDisplay() {
    var resultDisplayCorrect = $("#correct")
    resultDisplayCorrect.text("Number of Questions Correct: " + correct);
    var resultDisplayInorrect = $("#incorrect")
    resultDisplayInorrect.text("Number of Questions Incorrect: " + incorrect);
}


//Process
window.onload = function() {
    $("#startQuiz").on("click", function () {
        questiondisplay();
        var display; 
        var timeLeft = 45;
        var timer = setInterval( function(){
            display = document.getElementById("display").value = "00" + ":" + timeLeft--;
            if (timeLeft <10){
                display = document.getElementById("display").value = "00" + ":" + "0" + timeLeft;
            }
            $("#display").text(display);
            if (timeLeft <= 0){
                results();
                resultsDisplay();
                clearInterval(timer);
            }
        },1000);
    });
};


//Method 3
// function results() {
//     if(question1){
//         correct++;
//     }
//     else if(!question1){
//         incorrect++;
//     }
//     if(question2){
//         correct++;
//     }
//     else if(!question2){
//         incorrect++;
//     }
//     if(question3){
//         correct++;
//     }
//     else if(!question3){
//         incorrect++;
//     }
//     if(question4){
//         correct++;
//     }
//     else if(!question4){
//         incorrect++;
//     }
//     if(question5){
//         correct++;
//     }
//     else if(!question5){
//         incorrect++;
//     }
//     console.log(correct);
//     console.log(incorrect);
// }

//Process
//Method 1
// window.onload = function() {
//     $("#startQuiz").on("click", timer.start);
//     $("#resetQuiz").on("click", timer.start);
//   };
//Method2
// function start() {
//     var fortyFiveSeconds = 45;
//     display = document.querySelector("#display");
//     startTimer(fortyFiveSeconds,display);
// }
// console.log(start());
// window.onload = function() {
//     $("#startQuiz").on("click", start());
//   };






