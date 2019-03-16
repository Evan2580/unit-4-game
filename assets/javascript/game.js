// TODO: Variables go here
var crystalScore = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;



 function gemCrystalReset () {
    gem1 = Math.floor((Math.random() * 12) + 1);
    gem2 = Math.floor((Math.random() * 12) + 1);
    gem3 = Math.floor((Math.random() * 12) + 1);
    gem4 = Math.floor((Math.random() * 12) + 1);
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    crystalScore = 0;
    $("#score-red").html(crystalScore);
    $("#randomNumber").text(randomNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);
    // console.log(gem1,gem2,gem3, gem4);
}

 function winsUpdate (){
  ++wins;
  gemCrystalReset();
  $("#wins").html(wins);
  $("#score-red").html(crystalScore);
}

function lossesUpdate(){
  ++losses;
  gemCrystalReset();
  $("#losses").html(losses);
  $("#score-red").html(crystalScore);
}
gemCrystalReset();

$(document).ready(function(){
  if (crystalScore < randomNumber){
    console.log(randomNumber);

    // Change gem values to foreach loop

    console.log(gem1, gem2, gem3, gem4);
    $( "#gem1" ).on( "click", function() {
      crystalScore += gem1;

      $("#score-red").html(crystalScore);
        if (crystalScore == randomNumber){
          winsUpdate();
        }
        if  (crystalScore > randomNumber){
          lossesUpdate();
        }
    });
    $( "#gem2" ).on( "click", function() {
      crystalScore += gem2;

      $("#score-red").html(crystalScore);
        if (crystalScore == randomNumber){
          winsUpdate();
        }
        if (crystalScore > randomNumber){
          lossesUpdate();
      }
    });
    $( "#gem3" ).on( "click", function() {
      crystalScore += gem3;

      $("#score-red").html(crystalScore);
        if (crystalScore == randomNumber){
          winsUpdate();

        }
        if  (crystalScore > randomNumber){
          lossesUpdate();
        }
    });
    $( "#gem4" ).on( "click", function() {
      crystalScore += gem4;

      $("#score-red").html(crystalScore);
        if (crystalScore == randomNumber){
          winsUpdate();
        }
        if (crystalScore > randomNumber){
          lossesUpdate();
        }
    });
  }

});
