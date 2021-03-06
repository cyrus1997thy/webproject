var player;
var currentPlay = 0;
var lastevent;

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    $("#playButton").click(function(){
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    console.log(event.data)
    if(event.data == 0 && lastevent == 1){
        if(currentPlay < playList.length - 1){
            ++currentPlay;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        else{
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        console.log(currentPlay + " " + playList[currentPlay])
    }
    else{
        lastevent = event.data;
    }
    if(player.getVideoLoadedFraction() > 0){
        $("#title").text(player.getVideoData().title);
    }
}