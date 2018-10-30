'use strict'

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
        "color": "C31821",
        "expire": "11/18/2018"
    },
    {
        "name": ">Magic Mike<",
        "color": "C31821",
        "expire": "11/18/2018"
    },
    {
        "name": ">Yoshi<",
        "color": "00FA9A",
        "expire": "never"
    },
    {
        "name": ">Empyron<",
        "color": "C5B358",
        "expire": "never"
    },
    {
        "name": ">Niizandar<",
        "color": "FF69B4",
        "expire": "never"
    },
];
var mod_chat = true;


var chatmodder = setInterval(() => {
    if (mod_chat) {
        for (let x = 0; x <= 5; x++) {
            if (top.OldChat[x] != "") {
                let msg = top.OldChat[x];
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

function upchat(thecdata) {
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
            if (NewChatList[2] == "Anubis")
                top.OldChat[j] += "<font color=#FFA500>";
            else if (locsplit[1] == "Sur")
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
                    top.OldChat[j] += "[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')><i><font color=#FFFFFF>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font></i>";
                else if (!badboy && (NewChatList[0] == "1" || NewChatList[0] == "11"))
                    top.OldChat[j] += "[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')><i><font color=#FFFFFF>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font></i>";
                else if (!badboy && (NewChatList[0] == "6"))
                    top.OldChat[j] += "<font size=3 color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> offers you a " + getitem(NewChatList[1]) + " for " + mc(NewChatList[3]) + " gold. <a href=javascript:TAccept('" + NewChatList[2] + "'," + NewChatList[1] + "," + NewChatList[3] + ")>Accept?</a></font>";
                else if (!badboy && (NewChatList[0] == "8"))
                    top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> gives you " + mc(NewChatList[3]) + " gold.</font>";
                else {
                    top.OldChat[j] = "";
                    continue;
                }
            } else if (NewChatList[0] == "22" || NewChatList[0] == "32" || NewChatList[0] == "42")
                top.OldChat[j] += "<font color=#FCFF11><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
            else if (NewChatList[0] == "7")
                top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> accepted your " + getitem(NewChatList[1]) + " for " + mc(NewChatList[3]) + " gold.</font>";
            else if (NewChatList[0] == "9")
                top.OldChat[j] += "<font color='#C89468'>Found:</font><font color=#CCCC22> " + getitem(NewChatList[1]) + ".</font>";
            else if (NewChatList[0] == "12")
                top.OldChat[j] += "<font color='#C89468'>Found:</font><font color=#CCCC22> " + getitem(NewChatList[1]) + "</font> <a href=javascript:burnit('" + NewChatList[1] + "')>Ash Item?</a>";
            else if (NewChatList[0] == "13")
                top.OldChat[j] += "<font color=#EEEE44>You see a " + getitem(NewChatList[1]) + " in their inventory.</font>";
            else if (NewChatList[0] == "5")
                top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> gives you a " + getitem(NewChatList[1]) + ".</font>";
            else if (NewChatList[0] == "58" || NewChatList[0] == "91" || NewChatList[0] == "92" || NewChatList[0] == "94") {
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
                    top.OldChat[j] += "<u><font color='white'>Private:</font></u> <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a>: " + ms(NewChatList[3]) + "</font>";
                } else {
                    top.OldChat[j] = "";
                    continue;
                }
            } else if (NewChatList[0] == "3")
                top.OldChat[j] += "<font color=#CC00CC><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
            else if (NewChatList[0] == "80")
                top.OldChat[j] += "<font color=#C8686A>Message sent to </font><font color=#CC00CC><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
            else if (NewChatList[0] == "56")
                top.OldChat[j] += "[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a>: " + ms(NewChatList[3]);
            else if (NewChatList[0] == "53")
                top.OldChat[j] += "<font color=#CCCC22><a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a> " + ms(NewChatList[3]) + "</font>";
            else if (NewChatList[0] == "54") {
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
                if (!badboy)
                    top.OldChat[j] += "<font color=#009933>[" + ms(NewChatList[1]) + "] <a href=javascript:pm('" + NewChatList[2] + "')>" + ms(NewChatList[2]) + "</a>: " + ms(NewChatList[3]) + "</font>";
                else {
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
            //else
            //	domes("ERROR: "+NewChatList[0]);
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
                top.OldChat[j] = "";
        }
    }
    NewChat = "";
    for (var j = 0; j < top.ChatSize; j++) {
        if (top.OldChat[j] != "")
            NewChat += "&nbsp;" + top.OldChat[j] + "<br>";
    }
    top.frames.main.s_Chat.innerHTML = NewChat;
}

var newbar = true;

function upbars() {
    let HPerc = parseInt(top.Health / top.Dur * 100, 10);
    let health = mc(top.Health);
    let enemy_perc = '';
    let enemy_perc2 = '';
    let Hleft;
    let Hright;
    let tempstr;

    let t = parseInt(HPerc * 14 / 100, 10) - (6 - health.length / 2);
    if (t)
        HLeft = health.substring(0, t);
    else
        HLeft = "";
    if (t < health.length)
        HRight = health.substring(t, health.length);
    else
        HRight = "";

    tempstr = "<table border=0 width=100% cellspacing=0 cellpadding=0><tr><td width=0 bgcolor=0><img border=0 height=30 width=22 src='" + top.y + "ml.jpg'></td><td width=" + HPerc + " background='" + top.y + "mf";
    if (HPerc > 20)
        tempstr += "g";
    tempstr += ".jpg' align=right><a href=../info.htm#health target=_blank><font color=#FFFFFF>" + HLeft + "</font></a></td><td width=" + (100 - HPerc) + " background='" + top.y + "me.jpg'><a href=../info.htm#health target=_blank><font color=#FFFFFF>" + HRight + "</font></a></td><td width=0 bgcolor=0><img border=0 height=30 width=22 src='" + top.y + "mr.jpg'></td></tr></table>";
    top.frames.main.s_LifeMeter.innerHTML = tempstr;

    HPerc = top.TargetHealth;

    if (HPerc > 20) {
        enemy_perc = `${top.TargetHealth}%`;
    } else {
        enemy_perc2 = `${top.TargetHealth}%`;
    }
    tempstr = "<table border=0 width=100% cellspacing=0 cellpadding=0><tr><td width=0 bgcolor=0><img border=0 height=30 width=22 src='" + top.y + "ml.jpg'></td><td width=" + HPerc + " background='" + top.y + "mf";
    if (HPerc > 20)
        tempstr += "g";
    tempstr += ".jpg' align=right>" + `${enemy_perc}` + "</td><td width=" + (100 - HPerc) + " background='" + top.y + "me.jpg'>" + `${enemy_perc2}` + "</td><td width=0 bgcolor=0><img border=0 height=30 width=22 src='" + top.y + "mr.jpg'></td></tr></table>";
    top.frames.main.s_TargetMeter.innerHTML = tempstr;
}

function updelay() {
    top.ActionDelay -= 50;
    if (top.ActionDelay >= 0) {
        if (top.mytoup)
            clearTimeout(top.mytoup);
        top.mytoup = setTimeout(function () {
            updelay();
        }, 50);
    } else {
        top.frames.main.s_subbut2.style.display = top.frames.main.s_subbut.style.display = "inline";
        top.frames.main.s_subbut2NO.style.display = top.frames.main.s_subbutNO.style.display = "none";
    }
    if (newbar) {
        top.frames.main.s_ActionDelay.innerHTML = `<progress max="${Math.floor(top.ActionInc / 10)}" value="${Math.floor(top.ActionDelay / 10)}" style="width:100%;height:10;background-color:black;"> </progress>`;
    } else {
        top.frames.main.s_ActionDelay.innerHTML = "<table border=0 width='100%' cellspacing=0 cellpadding=0><tr><td width=0 bgcolor=0><img border=0 height=15 width=11 src='" + top.y + "ml.jpg'></td><td width=" + (top.ActionDelay * 100 / top.ActionInc) + "% background='" + top.y + "mfa.jpg' align=right></td><td width=" + (100 - (top.ActionDelay * 100 / top.ActionInc)) + "% background='" + top.y + "mee.jpg'></td><td width=0 bgcolor=0><img border=0 height=15 width=11 src='" + top.y + "mr.jpg'></td></tr></table>";
    }
}


function downdelay() {
    if (top.Update != 1) {
        return;
    }
    top.dActionDelay += 1000;
    if (!top.Visible && (top.dActionDelay * 100 / top.dActionInc) < 100 && top.Update == 1) {
        if (top.mytodown)
            clearTimeout(top.mytodown);
        top.mytodown = setTimeout("downdelay()", "1000");
        return;
    }
    if ((top.dActionDelay * 100 / top.dActionInc) >= 100) {
        top.frames.main.s_Response.innerHTML = "<font size=4>Request timed out...check your connection and try again.</font>"
        top.Update = 0;
        top.dActionDelay = 0;
    } else if ((top.dActionDelay * 100 / top.dActionInc) < 100 && top.Update == 1) {
        if (top.mytodown)
            clearTimeout(top.mytodown);
        top.mytodown = setTimeout("downdelay()", "100");
    }
    if (newbar) {
        top.frames.main.s_ActionDelay.innerHTML = `<progress max="${Math.floor(top.ActionInc / 10)}" value="${Math.floor(top.ActionDelay / 10)}" style="width:100%;height:10;background-color:black;"> </progress>`;
    } else {
        top.frames.main.s_ActionDelay.innerHTML = "<table border=0 width='100%' cellspacing=0 cellpadding=0><tr><td width=0 bgcolor=0><img border=0 height=15 width=11 src='" + top.y + "ml.jpg'></td><td width=" + (top.ActionDelay * 100 / top.ActionInc) + "% background='" + top.y + "mfa.jpg' align=right></td><td width=" + (100 - (top.ActionDelay * 100 / top.ActionInc)) + "% background='" + top.y + "mee.jpg'></td><td width=0 bgcolor=0><img border=0 height=15 width=11 src='" + top.y + "mr.jpg'></td></tr></table>";
    }
}

document.getElementById("chattybox").addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        if (document.getElementById("chattybox").value === "/rwk1") {
            window.open("http://rwk1.racewarkingdoms.com");
            event.preventDefault();
            document.getElementById("chattybox").value = "";
        } else if (document.getElementById("chattybox").value === "/rwk2") {
            window.open("http://rwk2.racewarkingdoms.com");
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


function upbuttons() {
    let tempstr = "";

    if (top.RJ)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"rjack\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card24.gif'> ";
    if (top.BJ)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bjack\") title='Ultra Resist Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card50.gif'> ";
    if (top.RQ)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"rqueen\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card25.gif'> ";
    if (top.BQ)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bqueen\") title='Negate Resist Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card51.gif'> ";
    if (top.RK)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"rking\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card26.gif'> ";
    if (top.BK)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bking\") title='Ultra Revive Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card52.gif'> ";
    if (top.RA)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"race\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card14.gif'> ";
    if (top.BA)
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bace\") title='Ultra Crit Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card40.gif'> ";

    if (tempstr != "")
        tempstr = "<img border=0 src='" + top.y + "c.gif' height=8 width=8><img border=0 src='" + top.y + "ButDash.gif'><img border=0 src='" + top.y + "c.gif' height=8 width=8>" + tempstr;


    top.frames.main.s_HotCards.innerHTML = tempstr;
    tempstr = "";

    let yes = 0;

    if (top.Exp >= 100) {
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(0) " + top.hio;
        if (top.HotLevel == 1) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButStr.jpg'> ";
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(1) " + top.hio;
        if (top.HotLevel == 2) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButDex.jpg'> ";
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(2) " + top.hio;
        if (top.HotLevel == 3) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButAgi.jpg'> ";
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(3) " + top.hio;
        if (top.HotLevel == 4) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButDur.jpg'> ";
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(4) " + top.hio;
        if (top.HotLevel == 5) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButNtl.jpg'> ";
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(5) " + top.hio;
        if (top.HotLevel == 6) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButCnc.jpg'> ";
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(6) " + top.hio;
        if (top.HotLevel == 7) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButCnt.jpg'> ";
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(7) " + top.hio;
        if (top.HotLevel == 8) tempstr += "width=102 height=54 ";
        tempstr += "border=0 src='" + top.y + "ButAll.jpg'>";
        yes = 1;
    }
    if (top.Health <= 0) {
        if (yes) tempstr += "<br>";
        yes = 1;
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=revive() " + top.hio + "border=0 src='" + top.y + "ButRevive.jpg'>";
    }

    if (top.Target != -1) {
        if (yes) tempstr += "<br>";
        yes = 1;
        tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"attack\") border=0" + top.hio + "src='" + top.y + "ButAttack.jpg' title='Attack With Both Weapons'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"cast\") border=0" + top.hio + "src='" + top.y + "ButCast.jpg' title='Cast With Both Spells'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"lattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid1.jpg' title='Left Weapon and Spell'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"rattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid2.jpg' title='Right Weapon and Spell'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"defend\") border=0" + top.hio + "src='" + top.y + "ButDefend.jpg' title='Defend'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


        tempstr += " <img border=0 src='" + top.y + "ButVs.jpg'> <a href=javascript:pm('" + mp(top.Target) + "')>" + getcreature(top.Target) + "</a>";
    }

    top.frames.main.s_FightWin.innerHTML = tempstr;
    maxInv();
    curInv();
    essences();
}

function curInv() {
    p.current_inventory = top.Inventory.split("-").filter(e => String(e).trim());
    p.current_inventory_length = top.Inventory.split("-").filter(e => String(e).trim()).length;
    document.getElementById("inv_Space").innerHTML = `${p.current_inventory_length}/${p.max_inventory}`;
};

function maxInv() {
    if (p.current_inventory.includes("11042") || p.current_inventory.includes("11050")) {
        p.max_inventory = 75;
    }
    if (p.current_inventory.includes("11082") || p.current_inventory.includes("11087")) {
        p.max_inventory = 90;
    }
    if (p.current_inventory.includes("11110")) {
        p.max_inventory = 165;
    }
    document.getElementById("inv_Space").innerHTML = `${p.current_inventory_length}/${p.max_inventory}`;
}

function essences() {
    let eeot = 0;
    let eeogt = 0;
    let eeost = 0;
    let ruby = 0;
    let sapphire = 0;
    let emerald = 0;
    for (let i in top.inventory) {
        switch (parseInt(top.inventory[i])) {
            case 27018:
                eeot++;
                break;
            case 27019:
                eeogt++;
                break;
            case 27030:
                eeost++;
                break;
            case 27027:
                ruby++;
                break;
            case 27028:
                sapphire++;
                break;
            case 27029:
                emerald++;
                break;
            case 27031:
                ruby += 32;
                break;
            case 27032:
                sapphire += 32;
                break;
            case 27033:
                emerald += 32;
                break;
        }
    }
    document.getElementById('s_Eeot').innerHTML = eeot;
    document.getElementById('s_Eeogt').innerHTML = eeogt;
    document.getElementById('s_Eeost').innerHTML = eeost;
    document.getElementById('s_Ruby').innerHTML = ruby;
    document.getElementById('s_Sapphire').innerHTML = sapphire;
    document.getElementById('s_Emerald').innerHTML = emerald;
}

document.getElementsByTagName('tbody')[1].innerHTML = `<tbody>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  <tr>
    <td background="../side.jpg" rowspan="5"><img border="0" src="../side.jpg" width="10" height="44"></td>
    <td width="25%" bgcolor="0"> <span id="s_name">${top.login}</span> <a target="_blank" href="../info.htm#lev">Lev</a>: <span id="s_login">${top.Level}</span> <span id='perc_toggle' onclick='toggle_percents();'>%</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#loc">Loc</a>: <span id="s_Loc">${top.Loc}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#gold">Gold</a>: <span id="s_Gold">${mc(top.Gold)}</span></td>
    <td width="25%" bgcolor="0">
      <span id="s_Exp">
        <table border="0" width="100%" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../ml.jpg"></td>
              <td width="0%" background="../mfy.jpg" align="right"></td>
              <td width="100%" background="../mee.jpg"></td>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../mr.jpg"></td>
            </tr>
          </tbody>
        </table>
      </span>
    </td>
    <td
      background="../side.jpg" rowspan="5"><img border="0" src="../side.jpg" width="10" height="44"></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#str">Str</a>: <span id="s_Str">${mc(top.Str)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#dex">Dex</a>: <span id="s_Dex">${mc(top.Dex)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#agi">Agi</a>: <span id="s_Agi">${mc(top.Agi)}</span></td>
    <td width="25%" bgcolor="0">
      <span id="s_Level">
        <table border="0" width="100%" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../ml.jpg"></td>
              <td width="0%" background="../mfa.jpg" align="right"></td>
              <td width="100%" background="../mee.jpg"></td>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../mr.jpg"></td>
            </tr>
          </tbody>
        </table>
      </span>
    </td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#dur">Dur</a>: <span id="s_Dur">${mc(top.Dur)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#ntl">Ntl</a>: <span id="s_Ntl">${mc(top.Ntl)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#cnc">Cnc</a>: <span id="s_Cnc">${mc(top.Cnc)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#cnt">Cnt</a>: <span id="s_Cnt">${mc(top.Cnt)}</span></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">Inventory Counts</a>: </td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">EEoT</a>: <span id="s_Eeot">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">EEoGT</a>: <span id="s_Eeogt">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">EEoST</a>: <span id="s_Eeost">0</span></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Space</a>: <span id="inv_Space"> </span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Ruby</a>: <span id="s_Ruby">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Emerald</a>: <span id="s_Emerald">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Sapphire</a>: <span id="s_Sapphire">0</span></td>
  </tr>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  </tbody>`

  setTimeout(function() {
    genfull('chat', '/dis', 0);
    top.hotlist.unshift('Rune+Keeper');
    top.hotlist.unshift('NOBODY');
    upbuttons();
  }, 500);