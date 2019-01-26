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
    "name": "Empyron",
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
  },
  {
    "name": "Grelgor",
    "color": "303030",
    "expire": "2/14/19"
  },
  {
    "name": "Mert",
    "color": "c55f32",
    "expire": "2/14/19"
  },
  {
    "name": "Sweet Zombie Jesus",
    "color": "a55ba4",
    "expire": "2/14/19"
  },
  {
    "name": "Risk",
    "color": "0023ff",
    "expire": "2/14/19"
  },
  {
    "name": "Hazonko",
    "color": "8E7FF1",
    "expire": "2/24/19"
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
  let ts_sec = dateTime.getSeconds();
  let timestamp = `<font color='#278ec8' size='2'>${pad(ts_hour)}:${pad(ts_min)}:${pad(ts_sec)}</font><font size='3'>`;
  if (top.OldChat == null) {
    top.OldChat = ["", ""];
    for (var j = 0; j < top.ChatSize; j++)
      top.OldChat[j] = "";
  }

  if (!mod_chat) {
    timestamp = "";
  }

  NewChat = thecdata.split("|");
  stupid = 0;
  for (var j = top.ChatSize; j >= 0 && stupid < 310; j--) {
    stupid++;
    if (j < NewChat.length - 1) {
      NewChatList = NewChat[j].split("<");
      top.OldChat[j] = `${timestamp} ` + "";
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
        if (mod_chat) {
          for (let n in donor_names) {
            if (donor_names[n].name == `${NewChatList[2].replace(/\+/gi, ' ')}`) {
              top.OldChat[j] += `<span id="donor" hidden> </span><font color=#${donor_names[n].color}>`;
            }
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
        top.OldChat[j] += "<font color=#FCFF11><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
      } else if (NewChatList[0] == "7") {
        top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> accepted your " + getitem(NewChatList[1]) + " for " + mc(NewChatList[3]) + " gold.</font>";
      } else if (NewChatList[0] == "9") {
        top.OldChat[j] += "<font color='#C89468'>Found:</font><font color=#CCCC22> " + getitem(NewChatList[1]) + ".</font>";
      } else if (NewChatList[0] == "12") {
        top.OldChat[j] += "<font color='#C89468'>Found:</font><font color=#CCCC22> " + getitem(NewChatList[1]) + "</font> <a href=javascript:burnit('" + NewChatList[1] + "')>Ash Item?</a>";
      } else if (NewChatList[0] == "13") {
        top.OldChat[j] += "<font color=#EEEE44>You see a " + getitem(NewChatList[1]) + " in their inventory.</font>";
      } else if (NewChatList[0] == "5") {
        top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> gives you a " + getitem(NewChatList[1]) + ".</font>";
      } else if (NewChatList[0] == "58" || NewChatList[0] == "91" || NewChatList[0] == "92" || NewChatList[0] == "94") {
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
        top.OldChat[j] += "<font color=#CC00CC><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
      } else if (NewChatList[0] == "80") {
        top.OldChat[j] += `${timestamp} <font color=#C1B95F>Message sent to</font> <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + ":</a> " + ms(NewChatList[3]) + "</font>`;
      } else if (NewChatList[0] == "56") {
        top.OldChat[j] += "[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a>: " + ms(NewChatList[3]);
      } else if (NewChatList[0] == "53") {
        top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
      } else if (NewChatList[0] == "54") {
        top.OldChat[j] += "<font size=3 color=#00FF00>Your skill in " + top.skillz[top.Skill] + " has increased to " + ms(NewChatList[3]) + "!</font>";
      } else if (NewChatList[0] == "57" || NewChatList[0] == "59") {
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
        top.OldChat[j] += "<font color=#CC00CC><b>Skills</b><br>&nbsp;" + top.skillz[0] + ": " + mc(tempypoo[0]) + "<br>&nbsp;" + top.skillz[1] + ": " + mc(tempypoo[1]) + "<br>&nbsp;" + top.skillz[2] + ": " + mc(tempypoo[2]) + "<br>&nbsp;" + top.skillz[3] + ": " + mc(tempypoo[3]) + "<br>&nbsp;" + top.skillz[4] + ": " + mc(tempypoo[4]) + "<br>&nbsp;" + top.skillz[5] + ": " + mc(tempypoo[5]) + "<br>&nbsp;" + top.skillz[6] + ": " + mc(tempypoo[6]) + "<br>&nbsp;" + top.skillz[7] + ": " + mc(tempypoo[7]) + "<br>&nbsp;" + top.skillz[8] + ": " + mc(tempypoo[8]) + "<br>&nbsp;" + top.skillz[9] + ": " + mc(tempypoo[9]) + "<br>&nbsp;" + top.skillz[10] + ": " + mc(tempypoo[10]) + "<br>&nbsp;" + top.skillz[11] + ": " + mc(tempypoo[11]) + "<br>&nbsp;" + top.skillz[12] + ": " + mc(tempypoo[12]) + "</font>";
      } else if (NewChatList[0] == "61") {
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
        top.OldChat[j] += "<font color=#00FF00>Your skill in " + top.tradez[tempypoo[0]] + "crafting has improved to " + mc(tempypoo[1]) + "!</font>";
      } else if (NewChatList[0] == "63") {
        tempypoo = NewChatList[3].split("!");
        top.OldChat[j] += "<font color=#00FF00>Your skill in " + top.subz[tempypoo[0]] + "working has improved to " + mc(tempypoo[1]) + "!</font>";
      } else if (NewChatList[0] == "64") {
        top.OldChat[j] += "<font color=#00FF00>While you have $15 trial access you can get a $5 discount on all Paypal purchases. Click <a target=_blank href=../order/pay2.htm>here</a> to access the discounted item page. $45 orders still crack rocks.</font>";
      } else if (NewChatList[0] == "65") {
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
      if (top.OldChat[j] == null) {
        top.OldChat[j] = "</font>";
      }

    }
    if (top.OldChat[j].indexOf('id="donor"') > -1 && top.OldChat[j].indexOf('id="donor-end"') == -1) {
      top.OldChat[j] = top.OldChat[j] + `<span id="donor-end" hidden> </span> </font>`;
    }
  }
  NewChat = "";
  for (var j = 0; j < top.ChatSize; j++) {
    if (top.OldChat[j] != "")
      NewChat += "&nbsp;" + top.OldChat[j] + "<br>";
  }
  top.frames.main.s_Chat.innerHTML = NewChat;
}

domes("Reminder: /rwk1 /rwk2 /jimcav /rwkhelp /clear chat commands are all now valid.");

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
      for (let x = 0; x < top.ChatSize; x++) {
        top.OldChat[x] = "";
      }
      upchat("");
      event.preventDefault();
      document.getElementById("chattybox").value = "";
    }
  }
});

function pollzero(gg, override, viahotkey) {
  if (top.Update == 1) {
    domes("You must wait for your first command to be processed or timeout in " + (10000 - top.dActionDelay) / 1000 + " seconds.");
    top.Visible = 1;
    return;
  }
  if (!top.DisBar && top.ActionDelay > 0 && gg.action.value != "chat" && gg.action.value != "pfold" && gg.action.value != "pcall" && gg.action.value != "pplay" && gg.action.value != "praise1" && gg.action.value != "praise2" && gg.action.value != "praise3" && gg.action.value != "options" && gg.action.value != "refresh" && gg.action.value != "rj1" && gg.action.value != "bj1" && gg.action.value != "rq1" && gg.action.value != "bq1" && gg.action.value != "rk1" && gg.action.value != "bk1" && gg.action.value != "ra1" && gg.action.value != "ba1" && gg.action.value != "rj2" && gg.action.value != "bj2" && gg.action.value != "rq2" && gg.action.value != "bq2" && gg.action.value != "rk2" && gg.action.value != "bk2" && gg.action.value != "ra2" && gg.action.value != "ba2") {
    domes("You must wait until the delay bar is depleted to do an action.");
    return;
  }
  if ((gg.action.value == "burn" || gg.action.value == "sell") && !override) {
    if (gg.target.options[gg.target.selectedIndex].text.replace("EQUIPPED", "") != gg.target.options[gg.target.selectedIndex].text) {
      domes("This item is EQUIPPED and cannot be sold, destroyed, or traded.");
      return;
    }
  }
  if (gg.action.value == "trade") {
    if (gg.other.options[gg.other.selectedIndex].text.replace("EQUIPPED", "") != gg.other.options[gg.other.selectedIndex].text) {
      domes("This item is EQUIPPED and cannot be sold, destroyed, or traded.");
      return;
    }
  }
  if (gg.action.value == "chat") {
    if (IgnoreNextEnter) {
      IgnoreNextEnter = false;
      return;
    }
    ned = gg.target.value.replace("\"", "`");
    while (ned != gg.target.value) {
      gg.target.value = ned;
      ned = gg.target.value.replace("\"", "`");
    }
    ned = gg.target.value.replace("'", "`");
    while (ned != gg.target.value) {
      gg.target.value = ned;
      ned = gg.target.value.replace("'", "`");
    }
    ned = gg.target.value.replace("<", "(");
    while (ned != gg.target.value) {
      gg.target.value = ned;
      ned = gg.target.value.replace("<", "(");
    }
    ned = gg.target.value.replace(">", ")");
    while (ned != gg.target.value) {
      gg.target.value = ned;
      ned = gg.target.value.replace(">", ")");
    }
    ned = gg.target.value.replace("|", "l");
    while (ned != gg.target.value) {
      gg.target.value = ned;
      ned = gg.target.value.replace("|", "l");
    }
    if (gg.target.value == "" || gg.target.value == " ") {
      domes("Can't send an empty message.");
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "m" && gg.target.value.charAt(2) != "e") {
      domes("<font color=#C1B95F>Message sent to</font> " + gg.target.value.substring(3, gg.target.value.length));
    } else if (gg.target.value.charAt(0) == "/" && gg.target.value.length < 24 && viahotkey === undefined) {
      var newact = "<input type=button value='" + gg.target.value + "' onClick=\"genfull('chat','" + gg.target.value + "',0)\" STYLE='cursor: pointer;font-size:8pt; background-color:000000; color:ABB5BF'>";
      if (gg.target.value != "/cle" && gg.target.value != "/hm" && qa1 != gg.target.value && qa2 != gg.target.value && qa3 != gg.target.value) {
        qa3 = qa2;
        qa2 = qa1;
        qa1 = gg.target.value;
        s_quickie3.innerHTML = s_quickie2.innerHTML;
        s_quickie2.innerHTML = s_quickie.innerHTML;
        s_quickie.innerHTML = newact;
      }
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "a" && gg.target.value.charAt(2) == "n") {
      open("../ann.htm");
      upchat(79 + "<" + "<font color=#556633>Opening Announcements. Click <a target=_blank href=../ann.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "g" && gg.target.value.charAt(2) == "i" && gg.target.value.charAt(3) == "r") {
      open("../girl.htm");
      upchat(79 + "<" + "<font color=#556633>Opening Girlfriend Info Page. Click <a target=_blank href=../girl.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "s" && gg.target.value.charAt(2) == " ") {
      tehgf = gg.target.value.substring(3, gg.target.value.length);
      while (tehgf != tehgf.replace(" ", "_")) {
        tehgf = tehgf.replace(" ", "_");
      }
      open("rwk.cgi?swimsuit" + tehgf);
      upchat(79 + "<" + "<font color=#556633>Opening Swimsuit Pic. Click <a target=_blank href=rwk.cgi?swimsuit" + tehgf + ">here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "g" && gg.target.value.charAt(2) == "f") {
      tehgf = top.login;
      if (gg.target.value.charAt(3) == " ") {
        tehgf = gg.target.value.substring(4, gg.target.value.length);
      }
      while (tehgf != tehgf.replace(" ", "_")) {
        tehgf = tehgf.replace(" ", "_");
      }
      open("rwk.cgi?gf" + tehgf);
      upchat(79 + "<" + "<font color=#556633>Opening Girlfriend Photo Album. Click <a target=_blank href=rwk.cgi?gf" + tehgf + ">here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "f" && gg.target.value.charAt(2) == "a") {
      open("../faq.htm");
      upchat(79 + "<" + "<font color=#556633>Opening FAQ. Click <a target=_blank href=../faq.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "p" && gg.target.value.charAt(2) == "o") {
      genfull("options", 15, 1);
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "h" && gg.target.value.charAt(2) == "e") {
      open("../help/");
      upchat(79 + "<" + "<font color=#556633>Opening Help Site. Click <a target=_blank href=../help/>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "s" && gg.target.value.charAt(2) == "p" && gg.target.value.charAt(3) == "r") {
      open("../spray.htm");
      upchat(79 + "<" + "<font color=#556633>Opening CS:S Spray Site. Click <a target=_blank href=../spray.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "d" && gg.target.value.charAt(2) == "i" && gg.target.value.charAt(3) == "s") {
      upchat(79 + "<" + "<font color=#C1B95F>You have chosen to disable the action hindrance of your delay bar, The server STILL RESTRICTS THE SPEED AT WHICH YOU DO ACTIONS. If you are doing actions that require a large delay and you do not wait long enough in between them YOU WILL RECEIVE MULTIPLE 10 SECOND PENALTIES. This is an advanced feature that will not help the average player but instead hurt you. The delay bar is your friend. It helps prevent you from getting 10 second penalties by doing actions too quickly. To enable it type /enable.</font>" + "|");
      top.DisBar = 1;
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "s" && gg.target.value.charAt(2) == "h" && gg.target.value.charAt(3) == "h") {
      if (!top.NoBattle) {
        upchat(79 + "<" + "<font color=#C1B95F>You have chosen to disable battle messages. This is for advanced users only who are trying to avoid battle spam from attackers. Type /shh again if you didn't mean to do this.</font>" + "|");
        top.NoBattle = 1;
      } else {
        upchat(79 + "<" + "<font color=#C1B95F>You have chosen to re-enable battle messages.</font>" + "|");
        top.NoBattle = 0;
      }
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "e" && gg.target.value.charAt(2) == "n" && gg.target.value.charAt(3) == "a") {
      upchat(79 + "<" + "<font color=#C1B95F>Delay bar enabled.</font>" + "|");
      top.DisBar = 0;
      gg.target.value = "";
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "a" && gg.target.value.charAt(2) == "d") {
      hl(gg.target.value.substring(5, gg.target.value.length));
      gg.target.value = "";
      upplayers();
      return;
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1).toLowerCase() == "s" && gg.target.value.charAt(2).toLowerCase() == "u" && gg.target.value.charAt(3).toLowerCase() == "s") {
      kd_value = parseInt(parseFloat(top.Tres) + parseFloat(top.Food) + parseFloat(top.Runes) * 1000000000 + parseFloat(top.Soldiers) + parseFloat(top.Archers) + parseFloat(top.Catapults) + parseFloat(top.Trebuchets) + parseFloat(top.WallN) + parseFloat(top.WallS) + parseFloat(top.WallE) + parseFloat(top.WallW) + parseFloat(top.MoatN) + parseFloat(top.MoatS) + parseFloat(top.MoatE) + parseFloat(top.MoatW) + parseFloat(top.CannonN) + parseFloat(top.CannonS) + parseFloat(top.CannonE) + parseFloat(top.CannonW) + .99);
      if (kd_value < 10000000000)
        domes("Kingdom UNABLE to sustain. Value: " + mc(kd_value) + ".");
      else
        domes("Kingdom is sustainable. Value: " + mc(kd_value) + "!")
      gg.target.value = "";
      return;
    }
    if (gg.other.value != 0 && gg.other.value != 1 && gg.other.value != 2 && gg.other.value != 3) {
      domes("<font color=#C1B95F>Message sent to</font> " + gg.other.value + ": " + gg.target.value);
    }
    if (gg.target.value.charAt(0) == "/" && gg.target.value.charAt(1) == "l" && gg.target.value.charAt(2) == "i") {
      upchat(79 + "<" + "<font color=#C1B95F>Referral system deactivated.</font>" + "|");
      gg.target.value = "";
      return;
    }
    firstpart = gg.target.value.substring(0, 8);
    lastpart = gg.target.value.substring(8, gg.target.value.length);
    if (firstpart == "/ignore ") {
      il(mn(lastpart));
      gg.target.value = "";
      return;
    }
    if (gg.target.value == "/ignore") {
      for (var ii = 19; ii >= 0; ii--) {
        if (top.ignorelist[ii] != "") {
          upchat(79 + "<" + top.ignorelist[ii] + "|");
        }
      }
      upchat(79 + "<Ignored Players:|");
      gg.target.value = "";
      return;
    }
    if (gg.target.value == "/inv") {
      top.frames.main.document.getElementById('general').action.options.selectedIndex = 9;
      top.frames.main.updateaction(top.frames.main.document.getElementById('general').action.options[top.frames.main.document.getElementById('general').action.options.selectedIndex].value, top.frames.main.document.getElementById('general'));
      for (var ii = top.frames.main.document.getElementById('general').target.length - 1; ii >= 0; ii--) domes(top.frames.main.document.getElementById('general').target.options[ii].text);
      gg.target.value = "";
      return;
    }
    if (gg.target.value == "/equip") {
      var dainv = [];
      dainv[0] = "Extra Relic 4: " + getitem(top.ExtraRelic4);
      dainv[1] = "Extra Relic 3: " + getitem(top.ExtraRelic3);
      dainv[2] = "Extra Relic 2: " + getitem(top.ExtraRelic2);
      dainv[3] = "Extra Relic 1: " + getitem(top.ExtraRelic1);
      dainv[4] = "Relic 6: " + getitem(top.Relic6);
      dainv[5] = "Relic 5: " + getitem(top.Relic5);
      dainv[6] = "Relic 4: " + getitem(top.Relic4);
      dainv[7] = "Relic 3: " + getitem(top.Relic3);
      dainv[8] = "Relic 2: " + getitem(top.Relic2);
      dainv[9] = "Relic 1: " + getitem(top.Relic1);
      dainv[10] = "Right Spell: " + getitem(top.Heal);
      dainv[11] = "Feet: " + getitem(top.Boots);
      dainv[12] = "Legs: " + getitem(top.Leggings);
      dainv[13] = "Left Spell: " + getitem(top.Cast);
      dainv[14] = "Arms: " + getitem(top.Sleeves);
      dainv[15] = "Chest: " + getitem(top.Mantle);
      dainv[16] = "Hands: " + getitem(top.Gauntlets);
      dainv[17] = "Right Hand: " + getitem(top.Shield);
      dainv[18] = "Head: " + getitem(top.Helmet);
      dainv[19] = "Left Hand: " + getitem(top.Weapon);
      for (var ii = 0; ii < 20; ii++)
        domes(dainv[ii]);
      gg.target.value = "";
      domes("Currently Equipped Items");
      return;
    }
  }
  if (gg.action.value == "ts") {
    itype = gg.target.value;
    tradeskill = 0;
    if (itype == 0 || itype == 14 || itype == 15 || itype == 16) //weapon
    {
      tradeskill = 0;
    } else if (itype == 6 || itype == 9 || itype == 17 || itype == 18 || itype == 19) //spell
    {
      tradeskill = 3;
    } else if (itype == 12 || itype == 13) //bow
    {
      tradeskill = 2;
    } else if (itype == 10 || itype == 27) //relic
    {
      tradeskill = 4;
    } else //armor
    {
      tradeskill = 1;
    }
    upwindow(10 + tradeskill);
  }
  if (gg.action.value == "viewtops") {
    top.TopList = gg.target.value;
    if (top.TopList == "msky") {
      open("../msky.htm");
      upchat(79 + "<" + "<font color=#556633>Opening Sky Map. Click <a target=_blank href=../msky.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      return;
    }
    if (top.TopList == "msur") {
      open("../msur.htm");
      upchat(79 + "<" + "<font color=#556633>Opening Surface Map. Click <a target=_blank href=../msur.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      return;
    }
    if (top.TopList == "mdun") {
      open("../mdun.htm");
      upchat(79 + "<" + "<font color=#556633>Opening Dungeon Map. Click <a target=_blank href=../mdun.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      return;
    }
    if (top.TopList == "mhel") {
      open("../mhel.htm");
      upchat(79 + "<" + "<font color=#556633>Opening Hell Map. Click <a target=_blank href=../mhel.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      return;
    }
    if (top.TopList == "mhev") {
      open("../mhev.htm");
      upchat(79 + "<" + "<font color=#556633>Opening Heaven Map. Click <a target=_blank href=../mhev.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      return;
    }
    if (top.TopList == "mfor") {
      open("../mfor.htm");
      upchat(79 + "<" + "<font color=#556633>Opening the Forge Map. Click <a target=_blank href=../mfor.htm>here</a> if it fails to open due to your pop up blockers.</font>" + "|");
      return;
    }
    upwindow(3);
    return;
  }
  top.PendingLastAction = gg.action.value;
  top.pollcount = 0;
  top.Update = 1;
  top.frames.main.s_chatbut.style.display = top.frames.main.s_subbut2.style.display = top.frames.main.s_subbut.style.display = "none";
  top.frames.main.s_chatbutNO.style.display = top.frames.main.s_subbut2NO.style.display = top.frames.main.s_subbutNO.style.display = "inline";

  top.LastPoll = new Date().getTime();

  var actionstr = "";
  var elements = gg.elements;
  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    actionstr += encodeURIComponent(item.name).replace(/%20/g, "+") + "=" + encodeURIComponent(item.value).replace(/%20/g, "+") + "&";
  }
  ajax.post(httpspath() + "rwk.cgi", actionstr, GotActionData, true);

  top.Visible = 0;
  top.dActionDelay = 0;
  top.dActionInc = 10000;
  downdelay();
}