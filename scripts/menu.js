function click_menu(){
	var menu = document.getElementById('menu');
	if(!menu.style.display.localeCompare('none')){
		openMenu(menu);
	} else {
		closeMenu(menu);
	}
}
function openMenu( menu ){
	menu.style.display = 'block';
}
function closeMenu( menu ){
	menu.style.display = 'none';
}
