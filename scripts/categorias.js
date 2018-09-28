function CategoriasLoad(){
	var banner = document.getElementById('banner');
	banner.style.backgroundImage = "url('imgs/shingeki.jpg')";

	var buttons = document.getElementsByClassName('categoria');

	for( var i = 0 ; i < buttons.length ; i ++){
		console.log(buttons[i].style.backgroundImage);
		if( i % 4 == 0 ){
			buttons[i].style.backgroundImage = "linear-gradient(to bottom, #ffd038, #ffcc26)";
		} else if ( i % 3 == 0 ){
			buttons[i].style.backgroundImage = "linear-gradient(to bottom, #ff8442, #ff7d38)";
		} else {
			buttons[i].style.backgroundImage = "linear-gradient(to bottom, #ff4c4c, #ff4242)";
		}
	}
}
