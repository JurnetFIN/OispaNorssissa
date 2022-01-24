// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "oispanorssissa.fi/img/2.png",
        "oispanorssissa.fi/img/4.png",
        "oispanorssissa.fi/img/8.png",
        "oispanorssissa.fi/img/16.png",
        "oispanorssissa.fi/img/32.png",
        "oispanorssissa.fi/img/64.png",
        "oispanorssissa.fi/img/128.png",
        "oispanorssissa.fi/img/256.png",
        "oispanorssissa.fi/img/512.png",
        "oispanorssissa.fi/img/1024.png",
        "oispanorssissa.fi/img/2048.png",
	"oispakalussa.tk/img/katko.png"

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
