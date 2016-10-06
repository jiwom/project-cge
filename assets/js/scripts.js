$(document).ready(function(){
	var kulay = ["green", "pink", "orange", "red", "yellow", "blue"];
    var taya = 5;

    changeColor();
    $('#dice-pull').click(function(){
    	rollDice();
    });
    
    function changeColor(){
		for(var i = 0; i< 3; i++){
			var randomColor = kulay[Math.floor(Math.random() * kulay.length)];
			$('#'+'dice-'+i).css('background-color',randomColor);
			$('#'+'dice-'+i).data('color', randomColor);
		}
	};

	function rollDice(){
		for(var i = 0; i<= 10000; i++){
			setTimeout(function(){ changeColor() }, 100);
		}
	}

});


