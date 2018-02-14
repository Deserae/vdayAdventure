$( document ).ready(function() {
 
	var choices = [	"Bike the rio salado trail",
	"Take dance lessons",
	"Tour the amazon facility",
	"Make keto snacks",
	"See a show at Gammage",
	"Go Hiking",
	"Hike South Mountain",
	"Hike Piestewa",
	"Donate blood",
	"Yoga at a new studio - Laughing Buddha or Motto",
	"Go rollerskating",
	"Have a foam rolling sesison",
	"Learn some new TRX moves",
	"Fertility test",
	"Toxoplasmosis test",
	"Do a body fat test",
	"Try one of those cryo places",

	"Go to Hawaiian massage place",
	"Try a free class at Orange Theory",
	"Watch Hausu, a garbage Japanese horror film",
	"Check what's showing at FilmBar",
	"Wach an Akira Kurosawa film (I haven't seen any)",
	"Make a trip to The Loft trip (For First Friday maybe)",

	"Eat at Welcome Diner",
	"Eat at Crepe bar",
	"Go to Kream coffee",
	"Eat at House of Tricks for a special occasion",
	"Make Chipotle keto tacos",
	"Cook a new keto meal and document it",
	"Make eggies",
	"Tiki drinks at Undertow",
	"Get drinks at The ostrich",

	"Work on a node project together",
	"Work on a arduino project together",
	"Play with Ringly",
	"Do a home Massage :) ",
	"Speak French"];

 	//$('body').on('click', 'p', function(){
	$( "#choose" ).click(function() {
 			
 		var choice = choices[Math.floor(Math.random()*choices.length)]

 		$('#option').empty();
 	    $('#option').hide().text(choice + "?").fadeIn(1000);
 
	});

console.log(`
To my Warm Boi,
    When it comes to Valentine's Day I know you would say "Less commerical holiday crap, more code" so that's what I did. -DD`);

console.log(`
	          MMMMMMMMM                         MMMMMMMMM
          MMMMMMMMMMMMMMMMMM               MMMMMMMMMMMMMMMMMM
       MMMMMMMXXXXXXXXXXMMMMMMM         MMMMMMMXXXXXXXXXXMMMMMMM
    MMMMMMXXXXXXXXXXXXXXXXXMMMMMM     MMMMMMXXXXXXXXXXXXXXXXXMMMMMM
   MMMMMXXXXXXXXOOOOOOOOXXXXXXMMMM   MMMMXXXXXXOOOOOOOOXXXXXXXXMMMMM
  MMMMXXXXXXXOOOOOOOOOOOOOOOXXXXMMM MMMXXXXOOOOOOOOOOOOOOOXXXXXXXMMMM
 MMMMXXXXXXOOOOOOOOOOOOOOOOOOOOXXXMMMXXXOOOOOOOOOOOOOOOOOOOOXXXXXXMMMM
 MMMXXXXXOOOOOOOOOOOOOOOOOOOOOOOOXXXXXOOOOOOOOOOOOOOOOOOOOOOOOXXXXXMMM
MMMXXXXXOOOOOOOOOOO       OOOOOOOOOXOOOOOOOOO       OOOOOOOOOOOOXXXXMMM
MMMXXXXOOOOOOOOO              OOOOOOOOOOO              OOOOOOOOOOXXXMMM
MMMXXXXOOOOOOOO                  OOOOO                  OOOOOOOOOXXXMMM
MMMXXXXOOOOOOO    H A P P Y        O        H A P P Y    OOOOOOOOXXXMMM
MMMXXXXOOOOOOO                                           OOOOOOOOXXXMMM
MMMXXXXOOOOOOO      V A L E N T I N E ' S   D A Y !      OOOOOOOOXXXMMM
MMMXXXXXOOOOOO                                           OOOOOOOXXXXMMM
 MMMXXXXOOOOOOO             W A R M  B O I               OOOOOOOOXXXMMM
 MMMMXXXXOOOOOOO                                       OOOOOOOOXXXMMMM
  MMMXXXXOOOOOOOOO                                    OOOOOOOOOXXXMMM
  MMMMXXXXOOOOOOOOOO                                OOOOOOOOOOXXXMMMM
   MMMXXXXXOOOOOOOOOOO                           OOOOOOOOOOOOXXXXMMM
    MMMXXXXXOOOOOOOOOOOOO                     OOOOOOOOOOOOOOXXXXMMM
     MMMXXXXXOOOOOOOOOOOOOOO               OOOOOOOOOOOOOOOOXXXXMMM
      MMMXXXXXOOOOOOOOOOOOOOOOO         OOOOOOOOOOOOOOOOOXXXXXMMM
       MMMXXXXXXOOOOOOOOOOOOOOOOOO   OOOOOOOOOOOOOOOOOOXXXXXXMMM
         MMMXXXXXXXOOOOOOOOOOOOOOOO OOOOOOOOOOOOOOOOXXXXXXXMMM
           MMMXXXXXXXXOOOOOOOOOOOOOOOOOOOOOOOOOOOXXXXXXXXMMM
             MMMMXXXXXXXXXOOOOOOOOOOOOOOOOOOOXXXXXXXXXMMMM
                MMMMXXXXXXXXXXXOOOOOOOOOXXXXXXXXXXMMMMM
                   MMMMMXXXXXXXXXXXOXXXXXXXXXXXMMMMM
                      MMMMMMXXXXXXXXXXXXXXXMMMMMM
                          MMMMMMXXXXXXXMMMMMM
                              MMMMMXMMMMM
                                 MMMMM
                                  MMM
                                   M                          `);
});

// window.onload = function(){

// 	var choose = document.getElementById('choose').addEventListener("click", function( event ) {   
// 	    event.target.textContent = "this is a test";

// 	}, false);


// 	var test = document.getElementById("test");

// 	test.textContent = "This is some text";

// 	// var s = document.getElementById('fadeout').style;
// 	// s.opacity = 1;
// 	// (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,4000)})();


// }
