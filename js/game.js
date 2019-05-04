var mapArray, ctx, currentImgMainx, currentImgMainY;
var imgMountain, imgMain, imgEnemy;

$(document).ready(function(){
    mapArray = [0,1,3,1,3,0,0,0,0,0,0,1,0,0,1,1,
                0,0,1,1,0,0,0,3,0,3,0,0,0,1,1,0,
                0,0,3,1,0,0,0,3,3,1,1,0,0,0,0,0,
                0,0,0,0,0,3,1,3,0,0,3,0,0,3,0,0,
                0,3,1,1,3,3,3,0,0,0,3,3,0,3,0,3,
                1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
                3,3,3,3,0,0,0,0,0,0,0,0,0,0,1,0,
                0,0,3,0,0,1,0,3,1,0,0,3,0,0,3,1,
                3,3,3,1,0,0,0,0,0,0,0,0,0,0,3,1,
                0,3,1,0,1,1,0,1,3,3,0,3,0,0,0,0,
                0,1,3,0,0,0,1,0,0,1,1,0,0,0,0,0,
                0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,
                0,3,0,0,1,0,0,0,3,3,0,1,0,0,0,0,
                0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,
                0,3,0,0,0,1,0,0,1,0,3,0,3,1,3,0,
                0,1,0,0,0,0,0,0,0,0,0,3,0,3,0,2];
    ctx=$('#myCanvas')[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMainx=0;
    currentImgMainY=0;
    imgMain.onload=function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainx,currentImgMainY,50,50);
    }
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(var x in mapArray){
                if(mapArray[x] == 1){
                    ctx.drawImage(imgMountain, 97,192,32,32,x%16*50,Math.floor(x/16)*50,50,50);
                }
                else if(mapArray[x] == 3){
                    ctx.drawImage(imgEnemy, 7,40,104,135,x%16*50,Math.floor(x/16)*50,50,50);
                }
            }
        };
    };
});

$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    switch(event.which){
        case 37:
            targetImgMainX = currentImgMainx-50;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case 38:
            targetImgMainX = currentImgMainx;
            targetImgMainY = currentImgMainY-50;
            cutImagePositionX = 355;
            break;
        case 39:
            targetImgMainX = currentImgMainx+50;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case 40:
            targetImgMainX = currentImgMainx;
            targetImgMainY = currentImgMainY+50;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    if(targetImgMainX<=750 && targetImgMainX>=0 && targetImgMainY <=750 && targetImgMainY>=0){
        targetBlock=targetImgMainX/50+targetImgMainY/50*16;
    }
    else{
        targetBlock = -1;
    }
    ctx.clearRect(currentImgMainx,currentImgMainY,50,50);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3){
        
        
    }
    else{
        $("#talkbox").text("");
        currentImgMainx=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainx,currentImgMainY,50,50);
    
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkbox").text("邊界");
            console.log(mapArray[targetBlock]);
            break;
        case 1:
            $("#talkbox").text("山");
            console.log(mapArray[targetBlock]);
            break;
        case 2:
            $("#talkbox").text("終點");
            console.log(mapArray[targetBlock]);
            break;
        case 3:
            $("#talkbox").text("HI");
            console.log(mapArray[targetBlock]);
            break;
    }
});