const depo_myslide = document.querySelectorAll('.depo_myslider'),
	  dot = document.querySelectorAll('.depo_dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlides(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<depo_myslide.length;i++){
		depo_myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > depo_myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = depo_myslide.length;
	   }
       depo_myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
