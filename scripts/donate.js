function openDonatePage(){
	window.open('donate.html');
}

function switchBanner(){
	var banner = document.getElementById('banner');
	var space = document.getElementById('donate-separator');	
	banner.style.backgroundImage = "url('imgs/donate-banner.png')";
	space.style.height = '600px';
}
