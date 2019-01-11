let max_level = 3180;


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

function toggle_newbar() {
    if (newbar) {
        newbar = false;
        document.getElementById('delay-button').innerText = "New Delay Bar";
    } else {
        newbar = true;
        document.getElementById('delay-button').innerText = "Old Delay Bar";
    }
    updelay();
}


function toggle_percents() {
    if (!percs) {
        percs = true;
        setPercents();
    } else {
        percs = false;
        resetStats();
    }
}

function toggle_percents() {
    if (!percs) {
        percs = true;
        setPercents();
    } else {
        percs = false;
        resetStats();
    }
}

function getPercents() {
    let total = (parseInt(top.Str) + parseInt(top.Dex) + parseInt(top.Agi) + parseInt(top.Dur) + parseInt(top.Ntl) + parseInt(top.Cnc) + parseInt(top.Cnt));
    let percents = {};
    percents['Str'] = 100 * parseInt(top.Str, 10) / total;
    percents['Dex'] = 100 * parseInt(top.Dex, 10) / total;
    percents['Agi'] = 100 * parseInt(top.Agi, 10) / total;
    percents['Dur'] = 100 * parseInt(top.Dur, 10) / total;
    percents['Ntl'] = 100 * parseInt(top.Ntl, 10) / total;
    percents['Cnc'] = 100 * parseInt(top.Cnc, 10) / total;
    percents['Cnt'] = 100 * parseInt(top.Cnt, 10) / total;
    return percents;
}

function resetStats() {
    top.frames.main.document.getElementById("s_Str").innerText = mc(top.Str);
    top.frames.main.document.getElementById("s_Dex").innerText = mc(top.Dex);
    top.frames.main.document.getElementById("s_Agi").innerText = mc(top.Agi);
    top.frames.main.document.getElementById("s_Dur").innerText = mc(top.Dur);
    top.frames.main.document.getElementById("s_Ntl").innerText = mc(top.Ntl);
    top.frames.main.document.getElementById("s_Cnc").innerText = mc(top.Cnc);
    top.frames.main.document.getElementById("s_Cnt").innerText = mc(top.Cnt);
}

function setPercents() {
    let percents = getPercents();
    let str = mc(top.Str) + ": " + percents['Str'].toString().substring(0, 4) + "%";
    let dex = mc(top.Dex) + ": " + percents['Dex'].toString().substring(0, 4) + "%";
    let agi = mc(top.Agi) + ": " + percents['Agi'].toString().substring(0, 4) + "%";
    let dur = mc(top.Dur) + ": " + percents['Dur'].toString().substring(0, 4) + "%";
    let ntl = mc(top.Ntl) + ": " + percents['Ntl'].toString().substring(0, 4) + "%";
    let cnc = mc(top.Cnc) + ": " + percents['Cnc'].toString().substring(0, 4) + "%";
    let cnt = mc(top.Cnt) + ": " + percents['Cnt'].toString().substring(0, 4) + "%";

    top.frames.main.document.getElementById("s_Str").innerText = str;
    top.frames.main.document.getElementById("s_Dex").innerText = dex;
    top.frames.main.document.getElementById("s_Agi").innerText = agi;
    top.frames.main.document.getElementById("s_Dur").innerText = dur;
    top.frames.main.document.getElementById("s_Ntl").innerText = ntl;
    top.frames.main.document.getElementById("s_Cnc").innerText = cnc;
    top.frames.main.document.getElementById("s_Cnt").innerText = cnt;
}

function getPercents() {
    let total = (parseInt(top.Str) + parseInt(top.Dex) + parseInt(top.Agi) + parseInt(top.Dur) + parseInt(top.Ntl) + parseInt(top.Cnc) + parseInt(top.Cnt));
    let percents = {};
    percents['Str'] = 100 * parseInt(top.Str, 10) / total;
    percents['Dex'] = 100 * parseInt(top.Dex, 10) / total;
    percents['Agi'] = 100 * parseInt(top.Agi, 10) / total;
    percents['Dur'] = 100 * parseInt(top.Dur, 10) / total;
    percents['Ntl'] = 100 * parseInt(top.Ntl, 10) / total;
    percents['Cnc'] = 100 * parseInt(top.Cnc, 10) / total;
    percents['Cnt'] = 100 * parseInt(top.Cnt, 10) / total;
    return percents;
}

function resetStats() {
    top.frames.main.document.getElementById("s_Str").innerText = mc(top.Str);
    top.frames.main.document.getElementById("s_Dex").innerText = mc(top.Dex);
    top.frames.main.document.getElementById("s_Agi").innerText = mc(top.Agi);
    top.frames.main.document.getElementById("s_Dur").innerText = mc(top.Dur);
    top.frames.main.document.getElementById("s_Ntl").innerText = mc(top.Ntl);
    top.frames.main.document.getElementById("s_Cnc").innerText = mc(top.Cnc);
    top.frames.main.document.getElementById("s_Cnt").innerText = mc(top.Cnt);
}

function setPercents() {
    let percents = getPercents();
    let str = mc(top.Str) + ": " + percents['Str'].toString().substring(0, 4) + "%";
    let dex = mc(top.Dex) + ": " + percents['Dex'].toString().substring(0, 4) + "%";
    let agi = mc(top.Agi) + ": " + percents['Agi'].toString().substring(0, 4) + "%";
    let dur = mc(top.Dur) + ": " + percents['Dur'].toString().substring(0, 4) + "%";
    let ntl = mc(top.Ntl) + ": " + percents['Ntl'].toString().substring(0, 4) + "%";
    let cnc = mc(top.Cnc) + ": " + percents['Cnc'].toString().substring(0, 4) + "%";
    let cnt = mc(top.Cnt) + ": " + percents['Cnt'].toString().substring(0, 4) + "%";

    top.frames.main.document.getElementById("s_Str").innerText = str;
    top.frames.main.document.getElementById("s_Dex").innerText = dex;
    top.frames.main.document.getElementById("s_Agi").innerText = agi;
    top.frames.main.document.getElementById("s_Dur").innerText = dur;
    top.frames.main.document.getElementById("s_Ntl").innerText = ntl;
    top.frames.main.document.getElementById("s_Cnc").innerText = cnc;
    top.frames.main.document.getElementById("s_Cnt").innerText = cnt;
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
    if (percs) {
      getPercents();
    }
    if (top.LastAction == "ts" || top.LastAction == "es" || top.LastAction == "ds") {
      update_crafted_items();
      update_chanting();
    }
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

function loadInterface() {
    document.getElementsByTagName('tbody')[1].innerHTML = `<tbody>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  <tr>
    <td background="../side.jpg" rowspan="5"><img border="0" src="../side.jpg" width="10" height="44"></td>
    <td width="25%" bgcolor="0"> <span id="s_name">${top.login}</span> <a target="_blank" href="../info.htm#lev">Lev</a>: <span id="s_login">${top.Level}/${max_level}</span> <span id='perc_toggle' onclick='toggle_percents();'>%</span></td>
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
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Inventory Counts</a>: </td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">EEoT</a>: <span id="s_Eeot">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">EEoGT</a>: <span id="s_Eeogt">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">EEoST</a>: <span id="s_Eeost">0</span></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Space</a>: <span id="inv_Space"> </span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Ruby</a>: <span id="s_Ruby">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Emerald</a>: <span id="s_Emerald">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Sapphire</a>: <span id="s_Sapphire">0</span></td>
  </tr>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  </tbody>`
    let abc = document.getElementsByTagName('table')[0].childNodes[0];
    let xxz = document.getElementsByTagName('table')[0].childNodes[0].childNodes[2];
    abc.insertBefore(document.createElement("tr"), xxz);
    abc.id = 'addon-tr';
    var styler = document.createElement('style');
    styler.innerHTML = `select {
  color: #fafaf8;
  background-color: #181817;
  }

  optgroup {
    background-color: #343330;
    color: #bda14c;
  }
  `;
    document.getElementsByTagName('head')[0].appendChild(styler);
    updelay();
}