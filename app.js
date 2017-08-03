$(document).ready(function(){
	// var player1 = prompt("Please, enter player one's name");
	// var player2 = prompt("Please, enter player two's name");

	// $(".P1").html(player1);
	// $(".P2").html(player2);

	var o = "<img src=O.svg alt=O>";
	var x = "<img src=x.svg alt=X>";
	var tour = 0;
	
	// var pos11 = $("#11").html();
	// var pos12 = $("#12").html();
	// var pos13 = $("#13").html();
	// var pos21 = $("#21").html();
	// var pos22 = $("#22").html();
	// var pos23 = $("#23").html();
	// var pos31 = $("#31").html();
	// var pos32 = $("#32").html();
	var pos33 = $("#33").html(o);

	// $("#11").html(o);
	// $("#12").html(o);	
	// $("#13").html(o);
	// $("#21").html(o);
	// $("#22").html(o);
	// $("#23").html(o);
	// $("#31").html(o);
	// $("#32").html(o);
	// $("#33").html(o);


	$(".case").click(function(){
		// Cross and Circle placement on board
		if (($(this).html() === "")) { // Begin if case is empty
			if (tour%2 === 0) {
				$(this).html(o);
				tour++;
			} else {
				$(this).html(x);
				tour++;
			}
		}




	});
// Reset function on click button 
$("#reset").click(function(){
	$(".case").html("");
	tour = 0;

});
});