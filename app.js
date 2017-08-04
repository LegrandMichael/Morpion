$(document).ready(function(){

	var o = "<img class=o src=O.svg alt=O>";
	var x = "<img class=x src=x.svg alt=X>";
	var tour = 0;

	// var winCon = [
	// ["11","12","13"],
	// ["21","22","23"],
	// ["31","32","33"],
	// ["11","21","31"],
	// ["12","22","32"],
	// ["13","23","33"],
	// ["11","22","33"],
	// ["13","22","31"],
	// ];


	$("#validp1").click(function(){ // Click function name P1 on click button
		var player1 = prompt("Please, enter P1's name");
		$(".P1").html(player1);
	});

	$("#validp2").click(function(){ // Click function name P2 on click button
		var player2 = prompt("Please, enter P2's Name");
		$(".P2").html(player2);
	});


	// function rowsWin (x, o,) { 
	// 	if ($("#11").children().hasClass('o') && $("#12").children().hasClass("o") && $("#13").children().hasClass("o")) {
	// 		alert("Player 1 win");
	// 	} else if ($("#11").children().hasClass('x') && $("#12").children().hasClass("x") & $("#13").children().hasClass("x")) {
	// 		alert("Player 2 win");
	// 	}
	// }
	

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
		// Line 1

		if ($("#11").children().hasClass('o') && $("#12").children().hasClass("o") && $("#13").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#11").children().hasClass('x') && $("#12").children().hasClass("x") && $("#13").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// End line 1


		// Line 2 
		if ($("#21").children().hasClass('o') && $("#22").children().hasClass("o") && $("#23").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#21").children().hasClass('x') && $("#22").children().hasClass("x") && $("#23").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// End line 2

		// Line 3
		if ($("#31").children().hasClass('o') && $("#32").children().hasClass("o") && $("#33").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#31").children().hasClass('x') && $("#32").children().hasClass("x") && $("#33").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// End line 3

		// Col 1
		if ($("#11").children().hasClass('o') && $("#21").children().hasClass("o") && $("#31").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#11").children().hasClass('x') && $("#21").children().hasClass("x") && $("#31").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// end col 1

		// Col 2 
		if ($("#12").children().hasClass('o') && $("#22").children().hasClass("o") && $("#32").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#12").children().hasClass('x') && $("#22").children().hasClass("x") && $("#32").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// End Col 2


		// Col 3
		if ($("#13").children().hasClass('o') && $("#23").children().hasClass("o") && $("#33").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#13").children().hasClass('x') && $("#23").children().hasClass("x") && $("#33").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// End Col 3

		// Diag 1 
		if ($("#11").children().hasClass('o') && $("#22").children().hasClass("o") && $("#33").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#11").children().hasClass('x') && $("#22").children().hasClass("x") && $("#33").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// End Diag 1

		// Diag 2
		if ($("#13").children().hasClass('o') && $("#22").children().hasClass("o") && $("#31").children().hasClass("o")) {
			alert("Player 1 win");
		} 

		if ($("#13").children().hasClass('x') && $("#22").children().hasClass("x") && $("#31").children().hasClass("x")) {
			alert("Player 2 win");
		}
		// End Diag 2

		// rowsWin(o,x);

		

		// console.log($(this));
		// console.log(rows);


		// if (rows === $(this).html(o) && rows === $(this).html(x)) {
		// 	alert("you win");
		// } else {
		// 	alert("you lose");

		// }
	});

// Reset function on click button 
$("#reset").click(function(){
	$(".case").html("");
	tour = 0;
});

});