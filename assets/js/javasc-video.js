
//pausar videos al reproducir otros

        var videos = document.querySelectorAll('video');
        
        videos.forEach(function (video) {
            video.addEventListener('play', function() {
                videos.forEach(function (otherVideo) {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });
            });
        });

//Disabilita descarga de videos
$(document).ready(function(){
   $('#videoElementID').bind('contextmenu',function() { return false; });
});

