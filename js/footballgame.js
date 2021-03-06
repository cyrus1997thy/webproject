var img=new Image();
    img.src="images/19.png";
var time=20;
var intv;
$(document).ready(function(){
            var h=window.innerHeight-5;
            var w=window.innerWidth;
            if(w>720){
                w=720;
            }
            var ballRadius=57;
            var x=w/2;
            var y=h-ballRadius;
            var dx=0;
            var dy=0;
            var uy=0;
            var u=15;
            var a=0;
            var t=2;
            var angle;
            var score=0;
            var bestScore=0;
            var scoreBoard=document.getElementById("scoreBoard");
            var scorePoint=document.getElementById("score");
            var currentBest=document.getElementById("cb");
            var c=document.getElementById("myCanvas");
                c.height=h;
                c.width=w;
                 if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)){
                c.addEventListener("touchstart",touchPoint)
          }
          else{
                     c.addEventListener("mousedown",clickPoint)
                  }
            var ctx=c.getContext("2d");
            
            function scoreUpdate(){
                scorePoint.style.color="#7e7e7e";
                score++;
                scorePoint.innerHTML=score;
                currentBest.style.display="none";
            }
            
            function highScore(){
           
                    document.getElementById("hs").innerHTML=score;
                }
            
            highScore();
            
            function finalScore(){
                if(score>bestScore){
                    highScore();
                }
                bestScore=score;
                score=0;
                time=20;
                currentBest.style.display="inline";
                scorePoint.style.color="#0084ff";
                scorePoint.innerHTML=bestScore;
            }
            
            function touchPoint(e){
                var touchObject=e.changedTouches[0];
                var touchX=parseInt(touchObject.clientX);
                var touchY=parseInt(touchObject.clientY);
                if(touchX>=(x-ballRadius) && touchX<=(x+ballRadius) && touchY>=(y-ballRadius) && touchY<=(y+ballRadius)){
                    t=2;
                    a=.5;
                    angle=(Math.PI-Math.acos((touchX-x)/ballRadius))//*180/Math.PI;
                    uy=u*Math.sin(angle)+2;
                    dx=u*Math.cos(angle)/1.2;
                    scoreUpdate();
                    if(score >= 10 && score%10 == 0 && time > 10){
                        clearInterval(intv);
                        time-=2;
                        intv=setInterval(function(){
                            velocity();
                            drawBall();
                            gameOver();
                        },time)
                    }
                    console.log(time);
                }
            }
            
            
            function clickPoint(e){
                var touchX=parseInt(e.clientX);
                var touchY=parseInt(e.clientY);
                if(touchX>(x-ballRadius) && touchX<(x+ballRadius) && touchY>(y-ballRadius) && touchY<(y+ballRadius)){
                    t=2;
                    a=.5;
                    angle=(Math.PI-Math.acos((touchX-x)/ballRadius))//*180/Math.PI;
                    uy=u*Math.sin(angle)+2;
                    dx=u*Math.cos(angle)/1.2;
                    scoreUpdate();
                    if(score >= 10 && score%10 == 0 && time > 10){
                        clearInterval(intv);
                        time-=2;
                        intv=setInterval(function(){
                            velocity();
                            drawBall();
                            gameOver();
                        },time)
                    }
                    
                }
            }
            
            function velocity(){
                dy=uy-a*t;
                t++;
            }
            
            function gameOver(){
                if((y+ballRadius)>h+1500){
                    a=0;
                    uy=0;
                    t=2;
                    y=h-ballRadius;
                    x=w/2;
                    dx=0;
                    
                    finalScore();
                }
            }
            
            function drawBall(){
                x+=dx;
                y-=dy;
                ctx.drawImage(img,x-ballRadius,y-ballRadius,ballRadius*2,ballRadius*2);
                ctx.globalCompositeOperation="destination-in";
                ctx.beginPath();
                ctx.arc(x,y,ballRadius,0,Math.PI*2);
                ctx.fillStyle="#243344";
                ctx.fill();
                ctx.globalCompositeOperation='source-over';
                ctx.closePath();
                if((x-ballRadius)<=0 || (x+ballRadius)>=w){
                    dx=-dx;
                }
            }
            
            window.onload=function(){
                intv=setInterval(function(){
                    velocity();
                    drawBall();
                    gameOver();
                },time)
            }    
            
});