$(document).ready(function() {
  // Define global variables // 
  var randomTargetNumber = Math.floor(Math.random() * 130) + 10;
  var wins = 0;
  var losses = 0;
  var crystalPics = $("#crystal-pics");
  var crystals = ['assets/images/crystal-1.png', 'assets/images/crystal-2.png', 'assets/images/crystal-3.png', 'assets/images/crystal-4.png']
  var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 10) + 1);
  var scoreCalculator = 0;

  // Inject some html into the document //
  $("#wins-losses-div").html("<h4>Wins: " + wins +"</h4>" + "<h4>Losses:      " + losses + "</h4>")
  $("#random-number").html("<h4>Target Number:</h4>" + randomTargetNumber);  
  $("#score-box").html("<h4>Your total score is:</h4>" + scoreCalculator); 
  $("#score-box").html("<h4>Your total score is:</h4>" + scoreCalculator); 

  // Iterate through each item in the numberOptions array, create a space in html, assign class, and assign image (taken from crystalsArray) //
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-pic");
    imageCrystal.attr("src", crystals[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    crystalPics.append(imageCrystal);
  }
  // Define on click function //
  crystalPics.on("click", ".crystal-pic", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    scoreCalculator += crystalValue;

    function resetTargetAndScore () {
      scoreCalculator = 0;
      randomTargetNumber = Math.floor(Math.random() * 130) + 10;
      $("#random-number").html("<h4>Target Number:</h4>" + randomTargetNumber);
      var newValues = $(".crystal-pic")
      numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 10) + 1);
      for (var i = 0; i < newValues.length; i++) {
        newValues[i].attr("data-crystalvalue", numberOptions[i]);
      }
    }
    function resetGame () {
      scoreCalculator = 0;
      randomTargetNumber = Math.floor(Math.random() * 130) + 10;
      $("#random-number").html("<h4>Target Number:</h4>" + randomTargetNumber);
      wins = 0;
      losses = 0;
    }

    if (scoreCalculator === randomTargetNumber) {
      alert("Congratulations! Your score is exactly the same as the target number! You won!");
      wins++;
      $("#wins-losses-div").html("<h4>Wins: " + wins +"</h4>" + "<h4>Losses: " + losses + "</h4>");
      resetTargetAndScore()
    } else if (scoreCalculator > randomTargetNumber) {
      alert("Oh no! Your total score of " + scoreCalculator + " exceeded the target number of " + randomTargetNumber);
      losses++;
      $("#wins-losses-div").html("<h4>Wins: " + wins +"</h4>" + "<h4>Losses: " + losses + "</h4>");
      resetTargetAndScore();
    }
    $("#score-box").html("<h4>Your total score is:</h4>" + scoreCalculator); 
  })

  
})