
// https://stackoverflow.com/questions/4644027/how-to-automatically-reload-a-page-after-a-given-period-of-inactivity
// Reload the page after x minutes of inactivity. If the session expired, it should force a login page, thus clearing the content off the screen.
// This should reduce the possibility of sensitive/private information being displayed on a screen for long periods of time.
// David Gleba 2017-12-20_Wed_12.24-PM


jQuery(document).ready(function($) {

// time must be longer than xataface session timeout, if it is less, then it keeps the session alive forever.
    // see conf.ini..  
    // [_auth]
        // session_timeout=360 

var totalcount = 122123;
var countdwn = parseInt(totalcount / 1000);

var time = new Date().getTime();

$(document.body).bind("mousemove keypress", function () {
    // reset count..
    time = new Date().getTime();
    countdwn = parseInt(totalcount / 1000);
});

// display countdown.
// pure javascript countdown timer refresh page after x seconds inactivity
// https://blog.smalldo.gs/2013/12/create-simple-countdown/
//    
setInterval(function() {
  // display counter and reduce it..
  if( document.getElementById("timeoutdg2") ) {
    document.getElementById("timeoutdg2").innerHTML = countdwn;
  }

  countdwn --;
  
  if (new Date().getTime() - time >= totalcount) {
        window.location.reload(true);
    }
}, 1000); // check keyboard/mouse activity every x milliseconds

});
