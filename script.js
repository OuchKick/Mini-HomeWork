setInterval(function(){
var today = moment();
$("#welcomeHeader").text(today.format("MMM Do, YYYY, h:mm:ss a"));
},1);

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



