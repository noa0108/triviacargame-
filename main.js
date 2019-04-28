var panel = $("quiz-area");

var countStartNumber = 30;

// Question set 
var Questions = [
   
    {
        Question: "What is the date of World War 1?" , 
        Answers: ["1914-1918", "1917-192020" , "1939-1945"],
        correctAnswer: "1914-1918",
        image: "trivia gif.jfif" 
     },

     {
        Question: "which of these is NOT a name of a planet ?" , 
        Answers: ["Pluto", "Mars" , "Earth", "Vanus"],
        correctAnswer: "Vanus",
        image: "assets\trivia planets.jfif" 
     }


]

//Variable to hold our setInterval 
var timer;

var game = {


   questions: questions,
   currentQuestion: 0,
   counter: countStartNumber,
   correct: 0,
   incorrect: 0,


   countdown: function() {
      game.counter--;
      $("#counter-number").html(game.counter);
      if (game-counter === 0) {
         console.log("TIME UP");
         game.timeUp();

      }
   },

   loadQuestion: function() {
      timer = setInterval(game.countdown, 1000);
      panel.html("<h2>"+ questions [this.currentQuestion].question + "</h2>");
      for (var i=0; i < questions[this.currentQuestion].answers.length; i++ )
      {
         panel.append("<button class='answer-button' id='button' data-name=' " + 
         questions[this.currentQuestion].answer[i]+
         "'>" + question[this.currentQuestion].answers[i] + "</button>");
      }
   },

   nextQuestion: function() {
      game.counter = countStartNumber;
      $("#counter-number").html(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
   },

   timeUp: Function() {

      clearInterval(timer);

      $("#counter-number").html(gmae.counter);

      panel.html("<h2>Out of Time!</h2>");
      panel.append("<h3>The Correct answer was: " + questions[this.currentQuestion].correctAnswer);
      panel.append("<img src=' " + questions[this.currentQuestion].image + "'/>");

      if (game.currentQuestion === questions.length - 1)
       {

         setTimeout(game.results, 3 * 1000);

       }

       else 
       {
          setTimeout(game.nextQuestion, 3 * 1000);
       }
   }, 
   

       results: fuction() {

         clearInterval(timer);

         panel.html("<h2>All done, here's how you did!</h2>");

         $("counter-number").html(game.counter);

         panel.append("<h3>Correct Answers: " + game.correct + "</h3>" );
         panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
         panel.append("<h3>Unanswered: " + (questions.length - (game.correct + game.incorrect)) + "</h3>");
         panel.append("<br><button id='start-over'>Start-over'Start Over? </button>"); 

      }, 

       clicked: function(e) { 

         clearInterval(timer);
          if ($(e.target).attr("data-name")=== questions[this.currentQuestion].correctAnswer)
          {
             this.answeredCorrectly();
          }
          else
          {
             this.answeredincorrectly();
          }

      },

      answeredincorrectly: function() {

         game.incorrect++;

         clearInterval(timer);

         panel.html("<h2>Nope!</h2>");
         panel.append("<h3>The Correct Answer was: "+ questions[game.currentQuestion].correctAnswer + "</h3>");
         panel.append("<img src= '" + questions[game.currentQuestion].image + "'/>");

         if (game.currentQuestion === questions.length - 1)
         {
            setTimeout(game.results, 3 * 1000);
         }
         else
         {
            setTimeout(game.nextQuestion, 3 * 1000);
         }

      },

      answeredCorrectly: function() {
         game.correct++;

         clearInterval(timer);

         panel.html("<h2>Correct!</h2>");
         panel.append("<img src='" + questions[game.currentQuestion].image + "'/>");

         if (game.currentQuestion === questions.length - 1 )
         {
            setTimeout(game.results, 3 * 1000);
         }
         else
         {
            setTimeout(game.nextQuestion, 3 * 1000);
         }
      },

      reset: function() {

         this.currentQuestion = 0;
         this.counter = countStartNumber;
         this.correct = 0;
         this.incorrect = 0;
         this.loadQuestion();
      }
};

