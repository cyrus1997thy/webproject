$(document).ready(function(){
    $("#courseTable").append("<tr><th>Match</th><th>Time</th><th>result</th></tr>")
    
    var matchCount = match.length;
    
    for(var x = 0; x < matchCount; x+=5){
        $("#courseTable").append("<tr>");
        if(match[x+1] == "H"){
            $("#courseTable").append("<td style='color:grey;'>" + "Manchester United vs " + match[x] + "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + match[x+2]+ " " + match[x+3]+ "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + match[x+4] + "</td>");
        }
        else{
            $("#courseTable").append("<td style='color:grey;'>" + match[x] + " vs Manchester United" + "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + match[x+2]+ " " + match[x+3]+ "</td>");
            $("#courseTable").append("<td style='color:grey;'>" + match[x+4] + "</td>");
        }
        $("#courseTable").append("</tr>");

    }
});