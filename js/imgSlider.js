var number = Math.floor(Math.random()*5)+1;
		
var timer1 = 0;
var timer2 = 0;
			

	function setSlide(slideNr)
	{
		clearTimeout(timer1);
		clearTimeout(timer2);
		number = slideNr - 1;
				
		hide();
		setTimeout("changeSlide()", 2000);
	}
		
				
	function hide()
	{
		$("#slider").fadeOut(2000);
	}
		
		
	function changeSlide()
	{
		number++;
		if (number>5) number=1;
			
		var imgFile = "<img src=\"img/slides/slajd"+ number + ".jpg\" />";
				
		document.getElementById("slider").innerHTML = imgFile;
		$("#slider").fadeIn(2000);
				
		timer1 = setTimeout("changeSlide()", 8500);
		timer2 = setTimeout("hide()", 6500);
	}