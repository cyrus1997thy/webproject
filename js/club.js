$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    
    var topicCount = topic.length;
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var houtUnit = minuteUnit * 60;
    var dayUnit = houtUnit *24;
    
    for(var x = 0; x < topicCount; x++){
        $("#courseTable").append("<tr>");
        if(topic[x] == "連假" || topic[x] == "不上課" || topic[x] == "校慶停課"){
            $("#courseTable").append("<td style='color:grey;'>" + (x + 1) + "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + (new Date(startDate.getTime() + x * 7 * dayUnit)).toLocaleDateString().slice(5) + "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + topic[x] + "</td>");
        }
        else{
            $("#courseTable").append("<td>" + (x + 1) + "</td>");
            $("#courseTable").append("<td>" + (new Date(startDate.getTime() + x * 7 * dayUnit)).toLocaleDateString().slice(5) + "</td>");
            $("#courseTable").append("<td>" + topic[x] + "</td>");
        }
        $("#courseTable").append("</tr>");

    }
});

$changeDate = function(){
    setMonthAndDay(5,23);
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    
    var topicCount = topic.length;
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var houtUnit = minuteUnit * 60;
    var dayUnit = houtUnit *24;
    
    for(var x = 0; x < topicCount; x++){
        $("#courseTable").append("<tr>");
        if(topic[x] == "連假" || topic[x] == "不上課" || topic[x] == "校慶停課"){
            $("#courseTable").append("<td style='color:grey;'>" + (x + 1) + "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + (new Date(startDate.getTime() + x * 7 * dayUnit)).toLocaleDateString().slice(5) + "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + topic[x] + "</td>");
        }
        else{
            $("#courseTable").append("<td>" + (x + 1) + "</td>");
            $("#courseTable").append("<td>" + (new Date(startDate.getTime() + x * 7 * dayUnit)).toLocaleDateString().slice(5) + "</td>");
            $("#courseTable").append("<td>" + topic[x] + "</td>");
        }
        $("#courseTable").append("</tr>");
    }
}