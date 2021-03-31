setInterval(function(){
var today = moment();
$("#welcomeHeader").text(today.format("MMM Do, YYYY, h:mm:ss a"));
},1000);


