document.addEventListener("DOMContentLoaded", function () {
  init();
})

var list = [0];
var c = 0;
var s = 0;
var score = 0;
function init() {
  console.log("INIT");
  document.getElementById('0').addEventListener('click', action);
  next();
  console.log("READY");
}

function action(e) {
  var t = e.target;
  if (!check(t.id)) {
    return;
  }
  t.removeEventListener('click', action);
  t.innerHTML = '<div class="elem"></div><div class="elem"></div><div class="elem"></div><div class="elem"></div>';
  t.className += ' exp';
  initElem(t);
}

function initElem(t) {
  var tId = parseInt(t.id);
  var l = t.querySelectorAll('.elem');
  for (var i = 0; i < l.length; i++) {
    var id = tId * 4 + (i + 1);
    l[i].id = id;
    list.push(id);
    l[i].addEventListener('click', action);
  }
  next();
}

function check(id) {
  list.splice(list.indexOf(parseInt(id)), 1);
  if (id != s) {
    var main = document.getElementById('main');
    main.innerHTML = '<div>GAME OVER<br><br>Score<br>' + score + '<br><br><a onclick="reset()">Restart</a></div>';
    main.className = 'game-over';
    return false;
  }
  score += (Math.floor((id - 1) / 4) + 1);
  document.getElementById('score').innerHTML = score;
  return true;
}

function reset() {
  document.location.reload();
}

function next() {
  var id = getRandomInt(list.length - 1);
  s = list[id];
  document.getElementById(s).className += ' selected';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}