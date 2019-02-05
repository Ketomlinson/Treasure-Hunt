$("#hover").hide();
$("#snake").hide();
$("#win").hide();
$("#click").click(function(){
    $("#hover").show();
    $("#click").hide();
});

$("#treasure").hover(function(){
    $("#hover").html("<p>Click on the HEADER ^^^^^</p>");
});
$("#header").click(function(){
    $("#treasure").hide();
    $("#snake").show();
    $("#hover").html("<p>AHHH, A SNAKE IS IN THE CHEST! QUICK, STEP ON IT!</p>");
});
$("#snake").click(function(){
    $("#snake").hide();
    $("#win").show();
    $("#hover").html("<p>He's Dead, GREAT JOB!</p>");
});