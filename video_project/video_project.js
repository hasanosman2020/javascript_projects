//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images and subframes to finish loading.
//The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. Here we hide the preloader once the load event has fired.

const btn=document.querySelector('.switch_btn');
const video=document.querySelector('.video_container');

btn.addEventListener('click', function(){
	if(!btn.classList.contains('slide')){
		btn.classList.add('slide');
		video.pause();
	} else {
		btn.classList.remove('slide');
		video.play();
	}
})

//preloader//
const preloader=document.querySelector('.preloader');

window.addEventListener('load', function(){
	preloader.classList.add('hide_preloader');
})