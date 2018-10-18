var chat_colors = ['6666FF', 'BBBBFF', 'C8C8C8', 'FFBBBB', 'FF6666', '969696', 'CC00CC', '4444FF', 'FF2222'];
var birthday_names = [];
var donor_names = [{
    "name": ">Anubis<",
    "color": "FFA500",
    "expire": "never"
  },
  {
    "name": ">Lord Magus<",
    "color": "008080",
    "expire": "never"
  },
  {
    "name": ">Spencer<",
    "color": "202020",
    "expire": "12/18/2018"
  },
  {
    "name": ">Novas Nine<",
    "color": "DC143C",
    "expire": "11/18/2018"
  },
  {
    "name": ">Seith<",
    "color": "003B6F",
    "expire": "11/18/2018"
  }
];
var mod_chat = true;
var newbar = true;
if (top.login.toLowerCase() == "anubis") {
  newbar = true;
  updelay();
}

var chatmodder = setInterval(() => {
  if (mod_chat) {
    for (let x = 0; x <= 10; x++) {
      if (top.OldChat[x] != "") {
        let msg = top.OldChat[x];
        if (msg.toLowerCase().indexOf("size=5") > -1) {
          top.OldChat[x] = top.OldChat[x].replace("size=5", "");
          top.OldChat[x] = top.OldChat[x].replace("You find a ", "<font color='#C89468'>Found:</font> ");
          top.OldChat[x] = top.OldChat[x].replace(" on the enemy's corpse!", "");
          top.OldChat[x] = top.OldChat[x].replace("Click to DESTROY", "Ash Item")
          upchat("");
        }
        if (msg.indexOf(">Anubis<") > -1) {
          if (msg.toLowerCase().indexOf(":banhammer:") > -1) {
            let upperletter = top.login.substring(0, 1).toUpperCase();
            let lowername = top.login.substring(1, top.login.length);
            top.OldChat[x] = `<font color='#C89468'>${upperletter + lowername}</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font>`;
            upchat("");
          }
          if (msg.toLowerCase().indexOf(":ban-") > -1) {
            let username = msg.substring(msg.indexOf(':ban-') + 5, msg.lastIndexOf(':'));
            top.OldChat[x] = `<font color='#C89468'><a href=javascript:pm('${username}')>${username}</a></font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font>`;
            upchat("");
          }
          if (msg.toLowerCase().indexOf(":sys-") > -1) {
            let message = msg.substring(msg.indexOf(':sys-') + 5, msg.lastIndexOf(':'));
            top.OldChat[x] = `<font color='#FCFF11'>${message}</font>`;
            upchat("");
          }
        }
        for (let donor of donor_names) {
          if (msg.indexOf(donor['name']) > -1) {
            chat_colors.forEach((chat_color) => {
              if (msg.indexOf(chat_color) > -1) {
                top.OldChat[x] = top.OldChat[x].replace(chat_color, donor['color']);
                upchat("");
              }
            });
          }
        }
        for (let birthday of birthday_names) {
          if (msg.indexOf(birthday['name']) > -1) {
            chat_colors.forEach((chat_color) => {
              if (msg.indexOf(chat_color) > -1) {
                top.OldChat[x] = top.OldChat[x].replace(chat_color, birthday['color']);
                top.OldChat[x] = `<font color='#${birthday['color']}'>Birthday </font> ${top.OldChat[x]}`
                upchat("");
              }
            });
          }
        }
        if (msg.toLowerCase().indexOf(":fish-") > -1) {
          let username = msg.substring(msg.indexOf(':fish-') + 6, msg.lastIndexOf(':'));
          top.OldChat[x] = `<font color='#C89468'><a href=javascript:pm('${username}')>${username}</a></font> <font color='#FCFF11'>has been smacked upside the head with a giant tuna fish... and there was much laughing</font>`;
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":piss-") > -1) {
          let username = msg.substring(msg.indexOf(':piss-') + 6, msg.lastIndexOf(':'));
          top.OldChat[x] = `<font color='#C89468'><a href=javascript:pm('${username}')>${username}</a></font> <font color='#FCFF11'>has been drenched in a golden shower... and it was fucking gross</font>`;
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":roll-") > -1) {
          let count = msg.substring(msg.indexOf(':roll-') + 6, msg.lastIndexOf(':'));
          let username = top.OldChat[x].substring(top.OldChat[x].indexOf("')>") + 3, top.OldChat[x].indexOf("</a>"));
          if (typeof parseInt(count, 10) == "number") {
            let roll = randomValue(1, parseInt(count, 10));
            top.OldChat[x] = `<font color='#C89468'><a href=javascript:pm('${username}')>${username}</a></font> <font color='#FCFF11'>Rolls a ${roll}</font>`;
          } else {
            let roll = randomValue(1, length(count));
            top.OldChat[x] = `<font color='#C89468'><a href=javascript:pm('${username}')>${username}</a></font> <font color='#FCFF11'>Rolls a ${roll}</font>`;
          }
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":rainbow-") > -1) {
          let message = msg.substring(msg.indexOf(':rainbow-') + 9, msg.lastIndexOf(':'));
          let location = msg.substring(0, msg.indexOf("] <a") + 1);
          let username = top.OldChat[x].substring(top.OldChat[x].indexOf("')>") + 3, top.OldChat[x].indexOf("</a>"));
          top.OldChat[x] = birthday_text(message, username, location);
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":banac:") > -1) {
          top.OldChat[x] = `<font color='#C89468'>Ash Collector</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font>`;
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":banjeff:") > -1) {
          top.OldChat[x] = `<b><font color='#C89468'>Glitchless</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font></b>`;
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":banpk:") > -1) {
          top.OldChat[x] = `<font color='#C89468'>Puddle Keeper</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font>`;
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":corymoon:") > -1) {
          top.OldChat[x] = msg.replace(/:corymoon:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/skHiT8d.jpg">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":surrender:") > -1) {
          top.OldChat[x] = msg.replace(/:surrender:/gi, '<img width="32px" height="32px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/148/white-flag_2690.png">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":calemoon:") > -1) {
          top.OldChat[x] = msg.replace(/:calemoon:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/zVgLXzs.png">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":kalemoon:") > -1) {
          top.OldChat[x] = msg.replace(/:kalemoon:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/zVgLXzs.png">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":hadoken:") > -1) {
          top.OldChat[x] = msg.replace(/:hadoken:/gi, '<img width="32px" height="32px" src="https://imgur.com/Ds160kg.gif">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":adumb:") > -1) {
          top.OldChat[x] = msg.replace(/:adumb:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/GgEVho6.jpg">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":migs:") > -1) {
          top.OldChat[x] = msg.replace(/:migs:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/tLkj3x1.png">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":kaledance:") > -1) {
          top.OldChat[x] = msg.replace(/:kaledance:/gi, '<img width="300px" height="300px" src="https://66.media.tumblr.com/tumblr_m8q9pdStFk1qawpudo1_r1_250.gif">');
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":hevmap:") > -1) {
          let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
          top.OldChat[x] = msg.replace(/:hevmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Hev.bmp">`);
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":skymap:") > -1) {
          let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
          top.OldChat[x] = msg.replace(/:skymap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Sky.bmp">`);
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":surmap:") > -1) {
          let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
          top.OldChat[x] = msg.replace(/:surmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Sur.bmp">`);
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":dunmap:") > -1) {
          let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
          top.OldChat[x] = msg.replace(/:dunmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Dun.bmp">`);
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":helmap:") > -1) {
          let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
          top.OldChat[x] = msg.replace(/:helmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Hel.bmp">`);
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":formap:") > -1) {
          let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
          top.OldChat[x] = msg.replace(/:formap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/For.bmp">`);
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":bighadoken:") > -1) {
          let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
          top.OldChat[x] = msg.replace(/:bighadoken:/gi, `<img width="300px" height="300px" src="https://imgur.com/Ds160kg.gif">`);
          upchat("");
        }
      }
    }
  }
}, 50);

function birthday_text(message, username, location) {
  let temp = `${location} <a href=javascript:pm('${username}')>${username}</a></font>: `;
  let col = 1;
  for (let char = 0; char <= message.length - 1; char++) {
    if (message[char] == " ") {
      temp = temp + " ";
      continue;
    } else {
      if (col == 1) {
        col = 2;
        temp = temp + `<font color='red'>${message[char]}</font>`;
      } else if (col == 2) {
        col = 3;
        temp = temp + `<font color='orange'>${message[char]}</font>`;
      } else if (col == 3) {
        col = 4;
        temp = temp + `<font color='yellow'>${message[char]}</font>`;
      } else if (col == 4) {
        col = 5;
        temp = temp + `<font color='green'>${message[char]}</font>`;
      } else if (col == 5) {
        col = 6;
        temp = temp + `<font color='blue'>${message[char]}</font>`;
      } else if (col == 6) {
        col = 1;
        temp = temp + `<font color='purple'>${message[char]}</font>`;
      }
    }
  }
  return temp;
}
