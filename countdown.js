function initialWaitTime() {
  waitTime = $("#wait-time").val();
  $(".wait-time").html(waitTime);
}

function timeToWait() {
  if (waitTime > 0) {
    waitTime = waitTime - 1;
    $(".wait-time").html(waitTime);
  } else {
    clearInterval(interval);
    $(".done").html("time's up!")
  }
}

function startIntervalFunction() {
  initialWaitTime();
  interval = setInterval(function(){ timeToWait() }, 60000);
}

$(function(){
  $(".do-it").on("click", startIntervalFunction);
});