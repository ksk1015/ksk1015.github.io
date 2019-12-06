(function(win, doc){
    
    var canvas = doc.getElementById("canvas");
    var button = doc.getElementById("button");
    var interval = 100;
    var numberWidth = 40;
    var numberHeight = 40;
    var transform = (function(){
	var div = document.createElement("div");
	var props = ["transform", "WebkitTransform", "MozTransform", "MsTransform", "OTransform"];
	for(var i = 0; i < props.length; i++){
	    if(div.style[props[i]] !== undefined){
		return props[i];
	    }
	}
	return null;
    })();
    
    function createNumbers(num){
	var ary = [];
	for(var i = 0; i < num; i++){
	    ary[i] = doc.createElement("div");
	    ary[i].innerHTML = i;
	    canvas.appendChild(ary[i]);
	}
	return ary;
    }
    
    function setNumbersPosition(ary){
	var canvasWidth = canvas.offsetWidth;
	var cols = ~~(canvasWidth / numberWidth);
	for(var i = 0; i < ary.length; i++){
	    ary[i].style.left = numberWidth * (i%cols) + "px";
	    ary[i].style.top  = numberHeight * ~~(i/cols) + "px";
	}
    }
    
    function shuffleAnimation(ary){
	
	disableButton();
	
	var i = ary.length, j, tmp;
	
	var canvasWidth = canvas.offsetWidth;
	var cols = ~~(canvasWidth / numberWidth);
	
	var shuffle = function(){
	    i--;
	    j = ~~(Math.random()*i);
	    tmp = ary[i];
	    ary[i] = ary[j];
	    ary[j] = tmp;
	    
	    ary[i].className = "changed";
	    if(i == ary[i]){
		ary[i].className += " butSameIndex";
	    }
	    ary[i].style.left = numberWidth * (i%cols) + "px";
	    ary[i].style.top  = numberHeight * ~~(i/cols) + "px";
	    
	    ary[j].className = "changed";
	    if(j == ary[j]){
		ary[j].className += " butSameIndex";
	    }
	    ary[j].style.left = numberWidth * (j%cols) + "px";
	    ary[j].style.top  = numberHeight * ~~(j/cols) + "px";
	};
	
	var end = function(){
	    for(var i = 0; i < ary.length; i++){
		ary[i].className = "";
	    }
	    enableButton();
	};
	
	var loop = function(){
	    if(i){
		shuffle();
		setTimeout(loop, interval);
	    }else{
		setTimeout(end, 500);
	    }
	};
	
	loop();
    
    }
    
    function disableButton(){
	button.setAttribute("disabled", "disabled");
    }
    
    function enableButton(){
	button.removeAttribute("disabled");
    }
    
    var numbers = createNumbers(100);
    setNumbersPosition(numbers);
    
    button.onclick = function(){
	shuffleAnimation(numbers);
    };
    
})(window, document);