if (document.title.toLowerCase().indexOf('map') > 1) {
  var img = document.getElementsByTagName('img')[9];
  var bs = document.createElement("span");
  document.body.appendChild(bs);
  document.body.lastChild.id = "span";
  if (document.location.href.match(/(\/(mhev|msky|msur|mdun|mhel|mfor).htm)/gi)) {
    span.outerHTML = "<center><span id=span> </span> <br/> <a href='javascript:yesterday_Map();'>Yesterdays Map</a> </center>";
  } else {
    span.outerHTML = "<center><span id=span> </span> <br/> <a href='javascript:today_Map();'>Todays Map</a> </center>";
  }
  document.getElementsByTagName('center')[1].style.display = 'none';
  for (let x = 0; x < document.getElementsByTagName('p').length; x++) {
    document.getElementsByTagName('p')[x].style.display = 'none';
  }

  img.height = 900;
  img.width = 900;

  for (let x = 0; x < document.getElementsByTagName('img').length; x++) {
    if (x != 9) {
      document.getElementsByTagName('img')[x].style.display = "none";
    }
  }

  img.onmousemove = function (event) {
    let pos_x = event.offsetX ?
      (event.offsetX) :
      event.pageX - document.getElementsByTagName("img")[9].offsetLeft;
    let pos_y = event.offsetY ?
      (event.offsetY) :
      event.pageY - document.getElementsByTagName("img")[9].offsetTop;
    map_data(pos_x, pos_y);
  }
}

var links = document.createElement("links");
document.body.appendChild(links);
document.body.lastChild.id = "links";
if (document.location.href.match(/(\/(mhev|msky|msur|mdun|mhel|mfor).htm)/gi)) {
  document.getElementById('links').innerHTML = `<center><a href='../mhev.htm'>Hev</a> <a href='../msky.htm'>Sky</a>  <a href='../msur.htm'>Sur</a>  <a href='../mdun.htm'>Dun</a>  <a href='../mhel.htm'>Hel</a>  <a href = '../mfor.htm' > For</a></center>`;
} else {
  document.getElementById('links').innerHTML = `<center><a href='../yhev.htm'>Hev</a> <a href='../ysky.htm'>Sky</a>  <a href='../ysur.htm'>Sur</a>  <a href='../ydun.htm'>Dun</a>  <a href='../yhel.htm'>Hel</a>  <a href='../yfor.htm'>For</a></center>`;
}


function map_data(px, py) {
  let img = document.getElementsByTagName('img')[9];
  let canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 900;
  canvas.getContext('2d').drawImage(img, 0, 0, 900, 900);
  let data = canvas.getContext('2d').getImageData(px, py, 1, 1).data;
  //console.log("x: " + px + " y: " + py + " Color: " + data)
  document.getElementById("span").innerHTML = "X: " + Math.floor((px / 3)) + " Y: " + Math.floor(300 - (py / 3)) + `<br> Color Code: ${data[0]} ${data[1]} ${data[2]}`;
}

var mapname = document.location.pathname.substring(2, 5);
var map = (() => {
  switch (mapname) {
    case "hea":
      return "hev";
    case "hel":
      return "hel";
    case "sur":
      return "sur";
    case "sky":
      return "sky";
    case "dun":
      return "dun";
    case "for":
      return "for";
  }
})();

function today_Map() {
  document.location.pathname = `/m${map}.htm`;
}

function yesterday_Map() {
  document.location.pathname = `/y${map}.htm`;
}