var heroic = document.querySelector('.hero');
var hurdlic = document.querySelector('.hurdle');



document.addEventListener('keypress' , function (event){
	if(event.keyCode === 32 || event.which === 32){
		heroic.classList.add('heroAnimation');
		setTimeout(function(){
			heroic.classList.remove('heroAnimation');
		} , 500);
	}
});




var checkDead = setInterval(function(){
	var heroTop = parseInt(window.getComputedStyle(heroic).getPropertyValue("top"));
	var hurdleleft = parseInt(window.getComputedStyle(hurdlic).getPropertyValue("left"));
	if(hurdleleft<20 && hurdleleft > 0 && heroTop >= 130){
		hurdlic.style.animation = 'none';
		hurdlic.style.display = 'none';
		alert('You Loose');
	}
} , 10);




