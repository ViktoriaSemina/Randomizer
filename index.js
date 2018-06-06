//generate random color in a format of rgb
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
 //now we can change the background 
    document.body.style.background = bgColor;
    }

//generate random dimension for height and width
    function getRandomPosition(element) {
    var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

//move the box using values generated in the getRandomPosition() method
function moveRandomly() {
    var z = document.getElementById('one');
    z.setAttribute("style", "position:absolute;");
	
	document.body.appendChild(z);
	var xy = getRandomPosition(z);
	z.style.top = xy[0] + 'px';
	z.style.left = xy[1] + 'px';
}