
function startOfGame () {
	$("td:first-child").toggleClass();
	
	
}

function onOff () {	
	$("td").click(function () {
		$(this).toggleClass();
		var index = $(this).index();
		var row = ($(this).parent()).index();
		console.log(index);
		console.log(row);
		var selector1 = "tr:nth-child("+(row+1) + ") td:nth-child("+index+")";  //left
		var selector2 = "tr:nth-child("+(row+1)+") td:nth-child("+(index+2)+")";//right
		var selector3 = "tr:nth-child("+row+") td:nth-child("+(index+1)+")";	//up
		var selector4 = "tr:nth-child("+(row+2)+") td:nth-child("+(index+1)+")";//down
		if(index > 0 && index < 5 && row > 0 && row < 5) {
			//console.log(selector4);
			$(selector1).toggleClass();
			$(selector2).toggleClass();
			$(selector3).toggleClass();
			$(selector4).toggleClass();
		}
		else if(index == 0&&(row != 0||row!= 4)) { //left side
			$(selector3).toggleClass();
			$(selector4).toggleClass();
			$(selector2).toggleClass();
		}
		else if(index == 4&&(row != 0||row!= 4)) { //right side
			$(selector3).toggleClass();
			$(selector4).toggleClass();
			$(selector1).toggleClass();
		}
		else if(row == 0 &&(index != 0||index!=4)) {//top side
			$(selector1).toggleClass();
			$(selector2).toggleClass();
			$(selector4).toggleClass();
		}
		else if(row == 4 &&(index != 0||index != 4)) {//bottome side
			$(selector1).toggleClass();
			$(selector2).toggleClass();
			$(selector3).toggleClass();
		}
		else if(index == 0 && row == 0) {//top left corner
			$(selector2).toggleClass();
			$(selector4).toggleClass();
		}
		else if(index == 0 && row == 4) {//bottom left corner
			$(selector2).toggleClass();
			$(selector3).toggleClass();
		}
		else if(index == 4 && row == 0) {//top right corner
			$(selector1).toggleClass();
			$(selector4).toggleClass();
		}
		else {//bottom right corner
			$(selector1).toggleClass();
			$(selector3).toggleClass();
		}
		/*
			$(this).removeClass("offgrey").addClass("onyellow");
		}
		else {
			$(this).removeClass("onyellow").addClass("offgrey");
		}*/
		if($("td").hasClass("onyellow")) {	
			$("body>p").addClass("off");
		}
		else {
			$("body>p").toggleClass("off");
		}
	} )
}

function reset () {
	$("#reset").click(function () {
		$("td").removeClass().addClass("onyellow");
		$("td:first-child").toggleClass();
	} )
}

function hacks () {
	$("#hacks").click(function () {
		$("td").removeClass().addClass("onyellow");
		$("tr:first-child td").toggleClass();
		$("tr:nth-child(2) td").toggleClass();
		$("tr:nth-child(3) td").toggleClass();
		$("tr:nth-child(4) td").toggleClass();
		$("tr:nth-child(4) td:last-child").toggleClass();
		$("tr:last-child td").toggleClass();
		$("tr:last-child td:nth-child(4)").toggleClass();
		$("tr:last-child td:last-child").toggleClass();
	} )
}

$(document).ready(function () {
	startOfGame();
	onOff();
	reset();
	hacks();
});