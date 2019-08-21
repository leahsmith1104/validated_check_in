var milliSecs = 1000 * 60 * meetingInterval;
var curView = 0; // what is the current view of 12
var change = window.location.href.split( '?' ); // has user changed view - may as well be in url, rare?
if (change[1]) { // user has changed view
  curView = 1000 * 60 * meetingInterval * 11 * change[1]; // update
}
var displayTime = new Date(now.getTime() + curView);
var nowRounded = new Date(Math.round(displayTime / milliSecs) * milliSecs);
function myTime(multiple) {
  var timeFromNow = multiple*meetingInterval*60000;
  var meetTime = new Date(nowRounded.getTime() + timeFromNow);
  var hours = meetTime.getHours();
  var mins = meetTime.getMinutes();
  if (mins<10)
  {
    var mins = "0" + mins;
  }
  var thisTime = hours + ":" + mins + "am";
  if (hours==12) // noon weirdness
  {
    var thisTime = hours + ":" + mins + "pm";
  }
  if (hours==00) // midnight weirdness - no meetings but hey
  {
    var thisTime = 12 + ":" + mins + "am";
  }
  if (hours>=13) // replace 24 hour clock
  {
    var thisTime = hours-12 + ":" + mins + "pm";
  }
  var radioID = "meeting" + multiple; //the radio to which this meeting applies
  var labelID = "label_meeting" + multiple; //the radio to which this meeting applies
  document.getElementById(radioID).value = thisTime; //add value to the input
  document.getElementById(labelID).innerHTML = thisTime; //add value to the input
  return thisTime;
}
