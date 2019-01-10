var chat_colors = ['6666FF', 'BBBBFF', 'C8C8C8', 'FFBBBB', 'FF6666', '969696', 'CC00CC', '4444FF', 'FF2222'];
var birthday_names = [];
var donor_names = [{
    "name": "Anubis",
    "color": "FFA500",
    "expire": "never"
  },
  {
    "name": "Lord Magus",
    "color": "008080",
    "expire": "never"
  },
  {
    "name": "Yoshi",
    "color": "3777D6",
    "expire": "never"
  },
  {
    "name": "Empyro",
    "color": "C5B358",
    "expire": "never"
  },
  {
    "name": "Niizandar",
    "color": "FF69B4",
    "expire": "never"
  },
  {
    "name": "Wafer",
    "color": "1E90FF",
    "expire": "never"
  },
  {
    "name": "Jigfig2",
    "color": "31e9bc",
    "expire": "never"
  },
  {
    "name": "Necrophilia",
    "color": "4ed1e6",
    "expire": "never"
  },
  {
    "name": "Nemo The Necro",
    "color": "f90144",
    "expire": "never"
  },
  {
    "name": "Lord Ramza",
    "color": "c8df03",
    "expire": "never"
  },
  {
    "name": "Ramza",
    "color": "7cec0f",
    "expire": "never"
  }
];
var mod_chat = true;

var chatmodder = setInterval(() => {
  if (mod_chat) {
    for (let x = 0; x != 1; x++) {
      if (top.OldChat[x] != "") {
        let msg = top.OldChat[x];
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
        if (msg.toLowerCase().indexOf(":rainbow-") > -1) {
          let message = '';
          if (msg.indexOf(':rainbow-') == msg.lastIndexOf(':')) {
            message = msg.substring(msg.indexOf(':rainbow-') + 9, msg.lastIndexOf("</font>"));
          } else {
            message = msg.substring(msg.indexOf(':rainbow-') + 9, msg.lastIndexOf(':'));
          }
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
        if (msg.toLowerCase().indexOf(":tracker:") > -1) {
          top.OldChat[x] = `<a href="http://rwkhelp.com/tracker.html" target="_blank">Surface Tracker</a>`;
          upchat("");
        }
        if (msg.toLowerCase().indexOf(":mapper:") > -1) {
          top.OldChat[x] = `<a href="http://rwkhelp.com/mapper.html" target="_blank">Kingdom Mapper</a>`;
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
}, 250);

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

function pad(x) {
  return (x < 10 ? x = `0${x}` : x);
}

function upchat(thecdata) {
  let dateTime = new Date();
  let ts_hour = dateTime.getHours();
  if (ts_hour > 12) {
    ts_hour = ts_hour - 12;
  }
  let ts_min = dateTime.getMinutes();
  let timestamp = `<font color='#278ec8' size='2'>${pad(ts_hour)}:${pad(ts_min)}</font> <font size='3'>`;
  if (top.OldChat == null) {
    top.OldChat = ["", ""];
    for (var j = 0; j < top.ChatSize; j++)
      top.OldChat[j] = "";
  }
  NewChat = thecdata.split("|");
  stupid = 0;
  for (var j = top.ChatSize; j >= 0 && stupid < 310; j--) {
    stupid++;
    if (j < NewChat.length - 1) {
      NewChatList = NewChat[j].split("<");
      top.OldChat[j] = "";
      if (NewChatList[2] == "Glitchless" || NewChatList[2] == "Glitchless2") {
        top.OldChat[j] += "<b><font size=4>";
        if (NewChatList[0] != "6" && NewChatList[0] != "5")
          NewChatList[1] = "Admin";
      }
      locsplit = NewChatList[1].split(",");
      if ((NewChatList[0] == "0" || NewChatList[0] == "10") && locsplit[0].charAt(0) != "0" && locsplit[0].charAt(0) != "1" && locsplit[0].charAt(0) != "2" && (locsplit[0].charAt(0) != "*" && locsplit[0].charAt(0) != "x"))
        locsplit[1] = top.LocZ;
      if (locsplit[1] == "Sur")
        top.OldChat[j] += "<font color=#C8C8C8>";
      else if (locsplit[1] == "Dun")
        top.OldChat[j] += "<font color=#FFBBBB>";
      else if (locsplit[1] == "Sky")
        top.OldChat[j] += "<font color=#BBBBFF>";
      else if (locsplit[1] == "Hev")
        top.OldChat[j] += "<font color=#6666FF>";
      else if (locsplit[1] == "Hel")
        top.OldChat[j] += "<font color=#FF6666>";
      else if (locsplit[1] == "For")
        top.OldChat[j] += "<font color=#969696>";
      if (NewChatList[2] != undefined) {
        for (let n in donor_names) {
          if (donor_names[n].name == `${NewChatList[2].replace(/\+/gi, ' ')}`) {
            top.OldChat[j] += `<font color=#${donor_names[n].color}>`;
          }
        }
      }
      if (NewChatList[0] == "0" || NewChatList[0] == "10" || NewChatList[0] == "1" || NewChatList[0] == "11" || NewChatList[0] == "6" || NewChatList[0] == "8") {
        subgee = top.ignorelist;
        amounty = subgee.length;
        badboy = 0;
        for (var xxi = 0; xxi < amounty; xxi++) {
          if (subgee[xxi] == mn(NewChatList[2]))
            badboy = 1;
        }
        top.OldChat[j] += timestamp;
        if (!badboy && (NewChatList[0] == "0" || NewChatList[0] == "10"))
          top.OldChat[j] += "[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a>: " + ms(NewChatList[3]);
        else if (!badboy && (NewChatList[0] == "1" || NewChatList[0] == "11"))
          top.OldChat[j] += "[Emote] <a href=javascript:pm('" + NewChatList[2] + "')><font color='#C89468'>" + ms(NewChatList[2]) + ":</a></font><font color='#708090'> *" + ms(NewChatList[3]) + "*</font> ";
        else if (!badboy && (NewChatList[0] == "1" || NewChatList[0] == "11"))
          top.OldChat[j] += "[Emote] <a href=javascript:pm('" + NewChatList[2] + "')><font color='#C89468'>" + ms(NewChatList[2]) + ":</a></font><font color='#708090'> *" + ms(NewChatList[3]) + "*</font> ";
        else if (!badboy && (NewChatList[0] == "6"))
          top.OldChat[j] += "<font size=3 color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> offers you a " + getitem(NewChatList[1]) + " for " + mc(NewChatList[3]) + " gold. <a href=javascript:TAccept('" + NewChatList[2] + "'," + NewChatList[1] + "," + NewChatList[3] + ")>Accept?</a></font>";
        else if (!badboy && (NewChatList[0] == "8"))
          top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> gives you " + mc(NewChatList[3]) + " gold.</font>";
        else {
          top.OldChat[j] = "";
          continue;
        }
      } else if (NewChatList[0] == "22" || NewChatList[0] == "32" || NewChatList[0] == "42") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#FCFF11><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
      } else if (NewChatList[0] == "7") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> accepted your " + getitem(NewChatList[1]) + " for " + mc(NewChatList[3]) + " gold.</font>";
      } else if (NewChatList[0] == "9") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color='#C89468'>Found:</font><font color=#CCCC22> " + getitem(NewChatList[1]) + ".</font>";
      } else if (NewChatList[0] == "12") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color='#C89468'>Found:</font><font color=#CCCC22> " + getitem(NewChatList[1]) + "</font> <a href=javascript:burnit('" + NewChatList[1] + "')>Ash Item?</a>";
      } else if (NewChatList[0] == "13") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#EEEE44>You see a " + getitem(NewChatList[1]) + " in their inventory.</font>";
      } else if (NewChatList[0] == "5") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> gives you a " + getitem(NewChatList[1]) + ".</font>";
      } else if (NewChatList[0] == "58" || NewChatList[0] == "91" || NewChatList[0] == "92" || NewChatList[0] == "94") {
        top.OldChat[j] += timestamp;
        subgee = top.ignorelist;
        amounty = subgee.length;
        badboy = 0;
        for (xxi = 0; xxi < amounty; xxi++) {
          if (subgee[xxi] == mn(NewChatList[2]))
            badboy = 1;
        }
        if (!badboy) {
          if (NewChatList[0] == "94")
            top.OldChat[j] += "<font color=#FF2222>";
          else if (NewChatList[0] == "92")
            top.OldChat[j] += "<font color=#CC00CC>";
          else if (NewChatList[0] == "91")
            top.OldChat[j] += "<font color=#4444FF>";
          else
            top.OldChat[j] += "<font color=#C0C0C0>";
          top.OldChat[j] += "<font color=#C1B95F>Message from</font> <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + ":</a> " + ms(NewChatList[3]) + "</font>";
        } else {
          top.OldChat[j] = "";
          continue;
        }
      } else if (NewChatList[0] == "3") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#CC00CC><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
      } else if (NewChatList[0] == "80") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#C1B95F>Message sent to</font> <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + ":</a> " + ms(NewChatList[3]) + "</font>";
      } else if (NewChatList[0] == "56") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a>: " + ms(NewChatList[3]);
      } else if (NewChatList[0] == "53") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
      } else if (NewChatList[0] == "54") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font size=3 color=#00FF00>Your skill in " + top.skillz[top.Skill] + " has increased to " + ms(NewChatList[3]) + "!</font>";
      } else if (NewChatList[0] == "57" || NewChatList[0] == "59") {
        top.OldChat[j] += timestamp;
        tempypoo = NewChatList[3].split("!");
        for (var asi = 0; asi < 12; asi++)
          tempypoo[asi] *= tempypoo[12];
        if (NewChatList[0] == "57")
          top.OldChat[j] += "<font color=#CC00CC><b>Stats as Affected Only By Relics</b>";
        else
          top.OldChat[j] += "<font color=#CC00CC><b>Stats as Affected By All Modifiers</b>";
        top.OldChat[j] += "(Accurate to nearest " + mc(tempypoo[12]) + ")<br>&nbsp;Str: " + mc(tempypoo[0]) + "<br>&nbsp;Dex: " + mc(tempypoo[1]) + "<br>&nbsp;Agi: " + mc(tempypoo[2]) + "<br>&nbsp;Ntl: " + mc(tempypoo[3]) + "<br>&nbsp;Cnc: " + mc(tempypoo[4]) + "<br>&nbsp;Cnt: " + mc(tempypoo[5]) + "<br>&nbsp;Dur: " + mc(tempypoo[6]) + "<br>&nbsp;First Attack: " + mc(tempypoo[7]) + "<br>&nbsp;Second Attack: " + mc(tempypoo[8]) + "<br>&nbsp;First Cast: " + mc(tempypoo[9]) + "<br>&nbsp;Second Cast: " + mc(tempypoo[10]) + "<br>&nbsp;Armor Defense: " + mc(tempypoo[11]) + "</font>";
      } else if (NewChatList[0] == "60") {
        tempypoo = NewChatList[3].split("!");
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#CC00CC><b>Skills</b><br>&nbsp;" + top.skillz[0] + ": " + mc(tempypoo[0]) + "<br>&nbsp;" + top.skillz[1] + ": " + mc(tempypoo[1]) + "<br>&nbsp;" + top.skillz[2] + ": " + mc(tempypoo[2]) + "<br>&nbsp;" + top.skillz[3] + ": " + mc(tempypoo[3]) + "<br>&nbsp;" + top.skillz[4] + ": " + mc(tempypoo[4]) + "<br>&nbsp;" + top.skillz[5] + ": " + mc(tempypoo[5]) + "<br>&nbsp;" + top.skillz[6] + ": " + mc(tempypoo[6]) + "<br>&nbsp;" + top.skillz[7] + ": " + mc(tempypoo[7]) + "<br>&nbsp;" + top.skillz[8] + ": " + mc(tempypoo[8]) + "<br>&nbsp;" + top.skillz[9] + ": " + mc(tempypoo[9]) + "<br>&nbsp;" + top.skillz[10] + ": " + mc(tempypoo[10]) + "<br>&nbsp;" + top.skillz[11] + ": " + mc(tempypoo[11]) + "<br>&nbsp;" + top.skillz[12] + ": " + mc(tempypoo[12]) + "</font>";
      } else if (NewChatList[0] == "61") {
        top.OldChat[j] += timestamp;
        tempypoo = NewChatList[3].split("!");
        maxit = 0;
        for (var sji = 0; sji < 12; sji++) {
          tempypoo[sji] = parseInt(tempypoo[sji], 10);
          if (tempypoo[sji] > maxit) maxit = tempypoo[sji];
        }
        maxit = parseInt((maxit / 60), 10);
        top.OldChat[j] += "<font color=#CC00CC><b>Trade Skills Rank: " + top.titlez[maxit] + "</b><br>";
        for (sji = 0; sji < 6; sji++)
          top.OldChat[j] += "&nbsp;" + top.tradez[sji] + "crafting: " + mc(tempypoo[sji]) + "<br>";
        for (sji = 0; sji < 6; sji++) {
          top.OldChat[j] += "&nbsp;" + top.subz[sji] + "working: " + mc(tempypoo[sji + 6]);
          if (sji != 5)
            top.OldChat[j] += "<br>";
        }
        top.OldChat[j] += "</font>";
      } else if (NewChatList[0] == "62") {
        tempypoo = NewChatList[3].split("!");
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#00FF00>Your skill in " + top.tradez[tempypoo[0]] + "crafting has improved to " + mc(tempypoo[1]) + "!</font>";
      } else if (NewChatList[0] == "63") {
        top.OldChat[j] += timestamp;
        tempypoo = NewChatList[3].split("!");
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#00FF00>Your skill in " + top.subz[tempypoo[0]] + "working has improved to " + mc(tempypoo[1]) + "!</font>";
      } else if (NewChatList[0] == "64") {
        top.OldChat[j] += timestamp;
        top.OldChat[j] += "<font color=#00FF00>While you have $15 trial access you can get a $5 discount on all Paypal purchases. Click <a target=_blank href=../order/pay2.htm>here</a> to access the discounted item page. $45 orders still crack rocks.</font>";
      } else if (NewChatList[0] == "65") {
        top.OldChat[j] += timestamp;
        open(NewChatList[3], "RWK", "height=640,width=480,scrollbars=1");
        top.OldChat[j] += "<font color=#556633>Opening Picture. Click <a target=_blank href='" + NewChatList[3] + "'>here</a> if it fails to open due to your pop up blockers.</font>";
      } else if (NewChatList[0] == "4") {
        subgee = top.ignorelist;
        amounty = subgee.length;
        badboy = 0;
        for (var xxxi = 0; xxxi < amounty; xxxi++) {
          if (subgee[xxxi] == mn(NewChatList[2]))
            badboy = 1;
        }
        if (!badboy) {
          top.OldChat[j] += timestamp;
          top.OldChat[j] += "<font color=#009933>[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a>: " + ms(NewChatList[3]) + "</font>";
        } else {
          top.OldChat[j] = "";
          continue;
        }
      } else if (NewChatList[0] == "33" || NewChatList[0] == "34") {
        if (NewChatList[0] == "34")
          top.OldChat[j] += "<i>";
        for (var y = 1; y < NewChatList.length; y++) {
          top.OldChat[j] += NewChatList[y];
          if (y + 1 < NewChatList.length)
            top.OldChat[j] += "<";
        }
        if (NewChatList[0] == "34")
          top.OldChat[j] += "</i>";
      } else if (NewChatList[0] == "79") {
        top.OldChat[j] += "<font color=#CC00CC>";
        for (var y = 1; y < NewChatList.length; y++) {
          top.OldChat[j] += NewChatList[y];
          if (y + 1 < NewChatList.length)
            top.OldChat[j] += "<";
        }
        top.OldChat[j] += "</font>";
      }
      if (NewChatList[2] == "Glitchless" || NewChatList[2] == "Glitchless2")
        top.OldChat[j] += "</font></b>";
      if (locsplit[1] == "Sur")
        top.OldChat[j] += "</font>";
      else if (locsplit[1] == "Dun")
        top.OldChat[j] += "</font>";
      else if (locsplit[1] == "Sky")
        top.OldChat[j] += "</font>";
      else if (locsplit[1] == "Hev")
        top.OldChat[j] += "</font>";
      else if (locsplit[1] == "Hel")
        top.OldChat[j] += "</font>";
      else if (locsplit[1] == "For")
        top.OldChat[j] += "</font>";
    } else {
      top.OldChat[j] = top.OldChat[j - (NewChat.length - 1)];
      if (top.OldChat[j] == null)
        top.OldChat[j] = "</font>";
    }
  }
  NewChat = "";
  for (var j = 0; j < top.ChatSize; j++) {
    if (top.OldChat[j] != "")
      NewChat += "&nbsp;" + top.OldChat[j] + "<br>";
  }
  top.frames.main.s_Chat.innerHTML = NewChat;
}
domes("You can now type :mapper: and :tracker: to get direct links to the rwkhelp tools.");
domes("Chat modder has been updated to include new Features.");

document.getElementById("chattybox").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    if (document.getElementById("chattybox").value === "/rwk1") {
      window.open("http://rwk1.racewarkingdoms.com/index.html");
      event.preventDefault();
      document.getElementById("chattybox").value = "";
    } 
    if (document.getElementById("chattybox").value === "/rwk2") {
      window.open("http://rwk2.racewarkingdoms.com");
      event.preventDefault();
      document.getElementById("chattybox").value = "";
    }
    if (document.getElementById("chattybox").value === "/jimcav") {
      window.open("http://jimcav.com");
      event.preventDefault();
      document.getElementById("chattybox").value = "";
    }
    if (document.getElementById("chattybox").value === "/rwkhelp") {
      window.open("http://rwkhelp.com");
      event.preventDefault();
      document.getElementById("chattybox").value = "";
    }
    if (document.getElementById("chattybox").value === "/clear") {
      top.OldChat = ["", ""];
      upchat("");
      event.preventDefault();
      document.getElementById("chattybox").value = "";
    }
  }
});