$(document).ready(function() {
    function updateClock() {
      var now = new Date();
      var time = now.toLocaleTimeString();
      $('#clock').text(time);
      console.log("update was ran!")
    }
  
    // Update the clock every second
    setInterval(updateClock, 1000);
});