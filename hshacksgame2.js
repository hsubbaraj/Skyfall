//requestAnimationFrame polyfill http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
//for browser compatibility
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
		    };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
    	};
}());


$(document).ready( function () {

	//get context
	var canvas = document.getElementById('canvas1'); 
	var context = canvas.getContext('2d');
	var ctx = canvas.getContext('2d');
	var gtx = canvas.getContext('2d');
	var ftx = canvas.getContext('2d');
	var xtx = canvas.getContext('2d');

	var velocity = 10;
	
	
	//create point counter
	var counter= 0;

	//set starting position for jeep
	var x = 900;
	var y = 300;
	//starting position for coins
	var x1 = 900;
	var y1 = 600;

	var x2 = 600;
	var y2 = 700;
	//starting for person
	person={x:150,y:150,width:75,height:75};
	//function to handle animation
	function loop() {
		//call rAF
		window.requestAnimationFrame(loop);
		//clear		
		ctx.clearRect(0,0,canvas.width,canvas.height);
		
		//draw the square
		var background = new Image();
		background.src = "background.jpg";
    	context.drawImage(background,0,0);   
// current x, y
		//draw person
		var img=document.getElementById("person");
		ftx.drawImage(img,person.x, person.y,200,200);
		
		//draw jeep
		var img1=document.getElementById("jeep");
		//setInterval(function(){gtx.drawImage(img1,y1,x1, 250,250)}, 3000);
		gtx.drawImage(img1,x1,y1, 250,250);
		
		//draw coins
		var img2=document.getElementById("coin");
		//setInterval(function(){ctx.drawImage(img2,y,x, 50,50)}, 3000);
		ctx.drawImage(img2,x,y, 75,75);
		//draw clouds
		var cloud = new Image();
		cloud.src = "cloud3.png";
    	xtx.drawImage(cloud,x2,y2, 250, 150); 

    	//cloud collision
    	if((x2-100<=person.x) && (person.x<=x2+100) && (y2-100<=person.y) && (person.y<=y2+100)) {
    		velocity+=1;
    	}

		//coin collision
		if((x-100<=person.x) && (person.x<=x+100) && (y-100<=person.y) && (person.y<=y+100)) {
			counter+=1;
			y = 900; //reset position
			x = Math.floor(Math.random()*1001);
			console.log(person.x);
			console.log(person.y);
		}
		if((x1-100<=person.x) && (person.x<=x1+100) && (y1-100<=person.y) && (person.y<=y1+100)) {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			var gameover = new Image();
			gameover.src = "endgame.jpg";
    		context.drawImage(gameover,0,0,canvas.width, canvas.height);  
			exit();
		}
		$("#counter").text("Points: "+ counter);

		if (y2 > 0) { //move until offscreen
			y2 -= 15;
		}
		else {
			y2 = 900; //reset position
			x2 = Math.floor(Math.random()*1001);

		}
		if (y > 0) { //move until offscreen
			y -= 5;

			
		}
		else {
			y = 900; //reset position
			x = Math.floor(Math.random()*1001);

		}
		if (y1 > 0) { //move until offscreen
			y1-= 3;
		}
		else {
			y1 = 900; //reset position
			x1 = Math.floor(Math.random()*1001);

		}
		
	}
	//control the person


$(document).keydown( function (event) {
	event.stopPropagation();
	event.preventDefault();
	switch(event.which) {
		case 40: if(person.y+velocity+person.height< 750) {
					person.y = person.y+velocity; 
				}
				break;a
		case 37: if(person.x-velocity> 0) {
					person.x = person.x-velocity;
				}
				break;
		case 39: if(person.x+velocity+person.width< 1500) {
					person.x = person.x+velocity; 
				}
				break;
		case 38: if(person.y-velocity >= 0){
					person.y = person.y-velocity; 
				}
				break;
		default:{}
	}
	});
	//start animating!
	loop();

});