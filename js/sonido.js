function playSound(soundfile) {
  var type_attr = '';
  if (navigator.userAgent.indexOf('Firefox') != -1) {
    type_attr = "type=\"application/x-mplayer2\"";
  }
  document.getElementById("dummy").innerHTML = "<embed src=\"" + soundfile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" " + type_attr + " />";
}


$(document).ready(function(){
    $("leyenda2").hover(function(){
        playSound('clic.mp3');
    });
});