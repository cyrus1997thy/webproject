$(document).ready(function(){
    var currentQuiz=null;
    var scored=null;
    $("#startButton").click(function(){
        if(currentQuiz==null){
            scored=0;
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var x=0; x<questions[0].answers.length;x++){
                $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");
            }
            $("#startButton").attr("value","Next");
        }
        else{
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(currentQuiz==9){
                        scored += questions[currentQuiz].answers[i][1];
                        scored*=10;
                        $("#question").text("You scored: ");
                        $("#options").empty();
                        $("#options").append(scored+"%"+"<br><br>");
                        currentQuiz=null;
                        $("startButton").attr("value","重新開始");
                    }
                    else{
                        scored += questions[currentQuiz].answers[i][1];
                        currentQuiz++;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0; x<questions[currentQuiz].answers.length; x++){
                            $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        }
                    }
                    return false;
                }
            });
        }
    });
});