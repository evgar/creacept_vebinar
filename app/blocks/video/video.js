// $(window.document).on('ready', function () {
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


setTimeout(function onYouTubePlayerAPIReady() {
	player = new YT.Player('video', {
		events: {
			'onReady': onPlayerReady
		}
	});
}, 2000);

var player;


function onPlayerReady() {
	var playButton = document.getElementsByClassName("video__play-button")[0];
	playButton.addEventListener("click", function () {
		playButton.style.display = "none";
		player.playVideo();
	});
}


