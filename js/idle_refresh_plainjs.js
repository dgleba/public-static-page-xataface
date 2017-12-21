
// nice try, but I think this reloads every 15 seconds even with activity...
// 2017-12-20_Wed_15.39-PM
// i tried this in prodrpt and xatap362.

// https://stackoverflow.com/questions/4644027/how-to-automatically-reload-a-page-after-a-given-period-of-inactivity
// Reload the page after x minutes of inactivity. If the session expired, it should force a login page, thus clearing the content off the screen.
// This should reduce the possibility of sensitive/private information being displayed on a screen for long periods of time.
// David Gleba 2017-12-20_Wed_12.24-PM


var totalcount = 15012;
var countdwn;
var time = new Date().getTime();

var timer = totalcount;

if (window.addEventListener)
addEvent = function(ob, type, fn ) {
  ob.addEventListener(type, fn, false );
};
else if (document.attachEvent)
addEvent = function(ob, type, fn ) {
  var eProp = type + fn;
  ob['e'+eProp] = fn;
  ob[eProp] = function(){ob['e'+eProp]( window.event );};
  ob.attachEvent( 'on'+type, ob[eProp]);
};

timerReset = function(timer) {
  if (timer) clearTimeout(timer); 
  countdwn = parseInt(totalcount / 1000);
  if (new Date().getTime() - time >= totalcount) {
  timer = setTimeout(function() {location.reload(true);},totalcount);
  //    window.location.reload(true);
  }
}

addEvent(window, 'mousedown', timerReset);
addEvent(window, 'mousemove', timerReset);
addEvent(window, 'keydown', timerReset);


// display countdown.
// pure javascript countdown timer refresh page after x seconds inactivity
// https://blog.smalldo.gs/2013/12/create-simple-countdown/
//
// time must be longer than xataface session timeout, if it is less, then it keeps the session alive forever.
    // see conf.ini..  
    // [_auth]
        // session_timeout=360 
    
setInterval(function(){

  // if (new Date().getTime() - time >= totalcount) {
      // window.location.reload(true);
  // }
  document.getElementById("timeoutdg2").innerHTML = countdwn;
  //document.querySelector('#timeoutdg2').textContent = timer.toString();
  countdwn --;
}, 2000);


// timerReset once on load...
timerReset();


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// old notes..
// http://stackoverflow.com/questions/667555/detecting-idle-time-in-javascript-elegantly
// http://forums.devshed.com/showpost.php?p=1965136&postcount=10
// reload browser after x minutes of inactivity
// kdg54 2013-09-03_Tue_09.51-AM
// document.onmousemove = resetTimer;
// prodrpt
