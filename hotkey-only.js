/*jshint esversion: 6 */

(function () {
  'use strict';
}());

let max_level = 3190;

var p = {
  version: "13",
  pwps: [0, 0, 0, 0],
  current_inventory: [],
  current_inventory_length: 0,
  max_inventory: 50,
};

var fields = {
  general: {
    main: document.getElementById("general0"),
    action: document.getElementsByName("action")[0],
    target: document.getElementsByName("target")[0],
    other: document.getElementsByName("other")[0],
    othera: document.getElementsByName("othera")[0],
    submit: () => {
      document.getElementById("s_subbut0").childNodes[0].click();
      return true;
    },
    upaction: () => {
      updateaction(fields.general.action.value, fields.general.main);
      return true;
    },
    uptarget: () => {
      updatetarget(fields.general.action.value, fields.general.target.value, fields.general.main);
      return true;
    }
  },
  misc: {
    security: document.getElementById("s_Response"),
    message: document.getElementById("s_FightWin")
  },
  kingdom: {
    action: document.getElementsByName("action")[1],
    form: document.getElementById("king0"),
    target: document.getElementsByName("target")[1],
    other: document.getElementsByName("other")[1],
    othera: document.getElementsByName("othera")[1],
    submit: () => {
      document.getElementById("s_subbutk0").childNodes[0].click();
    },
    upaction: () => {
      updateaction(fields.kingdom.action.value, fields.kingdom.form);
    },
    uptarget: () => {
      updatetarget(fields.kingdom.action.value, fields.kingdom.target.value, fields.kingdom.form);
    }
  }
};

var tp = {
  form: {
    act: () => {
      document.getElementsByName("action")[0].value = "tele";
      updateaction("tele", document.getElementById("general"));
    },
    x: document.getElementsByName("target")[0],
    y: document.getElementsByName("other")[0],
    sub: () => {
      document.getElementById("general").submit();
    },
  },
  to: (x, y) => {
    tp.form.act();
    tp.form.x.value = x;
    tp.form.y.value = y;
    tp.form.sub();
  },
  heaven: {
    palace: () => {
      tp.to(162, 159);
    },
    keep: () => {
      tp.to(66, 66);
    },
    citizen: () => {
      tp.to(150, 150);
    },
  },
  sky: {
    shrine: () => {
      tp.to(100, 250);
    },
    citizen: () => {
      tp.to(69, 157);
    },
  },
  surface: {
    mines: () => {
      tp.to(162, 159);
    },
    keeper: () => {
      tp.to(150, 150);
    },
    pub: () => {
      tp.to(150, 145);
    },
    puddle: () => {
      tp.to(140, 190);
    },
    brawl: () => {
      tp.to(40, 140);
    },
  },
  dungeon: {
    insane: () => {
      tp.to(100, 200);
    },
  },
  hell: {
    keep: () => {
      tp.to(66, 66);
    },
    collector: () => {
      tp.to(141, 174);
    },
    forge: () => {
      tp.to(141, 146);
    },
  },
  forge: {
    fhermit: () => {
      tp.to(24, 32);
    }
  },
  quest: {
    shore: () => {
      tp.to(145, 153);
    },
    mountians: () => {
      tp.to(207, 188);
    },
    lava: () => {
      tp.to(9, 256);
    },
    sky: () => {
      tp.to(78, 242);
    },
    dungeon: () => {
      tp.to(240, 60);
    },
    lake: () => {
      tp.to(40, 140);
    },
    temple: () => {
      tp.to(40, 225);
    },
  },
  port: {
    dillusia: () => {
      tp.to(274, 158);
    },
    disseria: () => {
      tp.to(268, 244);
    },
    kravot: () => {
      tp.to(267, 208);
    },
    crovesk: () => {
      tp.to(247, 184);
    },
    belania: () => {
      tp.to(261, 20);
    },
    satinia: () => {
      tp.to(290, 75);
    },
    demainia: () => {
      tp.to(247, 104);
    },
    wefaria: () => {
      tp.to(210, 10);
    },
    angilek: () => {
      tp.to(193, 9);
    },
    retrok: () => {
      tp.to(173, 19);
    },
    tuval: () => {
      tp.to(117, 14);
    },
    gretia: () => {
      tp.to(25, 31);
    },
    merlana: () => {
      tp.to(24, 61);
    },
    devell: () => {
      tp.to(17, 174);
    },
    hykra: () => {
      tp.to(17, 271);
    },
    rayvosk: () => {
      tp.to(209, 281);
    },
    slevisk: () => {
      tp.to(178, 244);
    },
    honar: () => {
      tp.to(56, 208);
    },
    kremk: () => {
      tp.to(47, 290);
    },
    naneesh: () => {
      tp.to(128, 234);
    },
    redock: () => {
      tp.to(223, 268);
    },
    berena: () => {
      tp.to(277, 277);
    },
    drehador: () => {
      tp.to(267, 226);
    },
    afelik: () => {
      tp.to(245, 124);
    },
    drevina: () => {
      tp.to(155, 43);
    },
    carella: () => {
      tp.to(129, 51);
    },
    treval: () => {
      tp.to(97, 21);
    },
    roggork: () => {
      tp.to(50, 49);
    },
    andal: () => {
      tp.to(130, 164);
    },
    perydan: () => {
      tp.to(150, 197);
    },
  },
  wp: {
    loc_1: [0, 0],
    loc_2: [0, 0],
    loc_3: [0, 0],
    loc_4: [0, 0],
    jump1: () => {
      tp.to(parseInt(tp.wp.loc_1[0], 10), parseInt(tp.wp.loc_1[1], 10));
    },
    jump2: () => {
      tp.to(parseInt(tp.wp.loc_2[0], 10), parseInt(tp.wp.loc_2[1], 10));
    },
    jump3: () => {
      tp.to(parseInt(tp.wp.loc_3[0], 10), parseInt(tp.wp.loc_3[1], 10));
    },
    jump4: () => {
      tp.to(parseInt(tp.wp.loc_4[0], 10), parseInt(tp.wp.loc_4[1], 10));
    },
    set1: () => {
      tp.wp.loc_1 = [top.LocX, top.LocY];
      domes("Waypoint has been set to " + tp.wp.loc_1[0] + "," + tp.wp.loc_1[1]);
      savePersonalWaypoints();
    },
    set2: () => {
      tp.wp.loc_2 = [top.LocX, top.LocY];
      domes("Waypoint has been set to " + tp.wp.loc_2[0] + "," + tp.wp.loc_2[1]);
      savePersonalWaypoints();
    },
    set3: () => {
      tp.wp.loc_3 = [top.LocX, top.LocY];
      domes("Waypoint has been set to " + tp.wp.loc_3[0] + "," + tp.wp.loc_3[1]);
      savePersonalWaypoints();
    },
    set4: () => {
      tp.wp.loc_4 = [top.LocX, top.LocY];
      domes("Waypoint has been set to " + tp.wp.loc_4[0] + "," + tp.wp.loc_4[1]);
      savePersonalWaypoints();
    },
    load: () => {
      loadPersonalWaypoints();
    },
    save: () => {
      savePersonalWaypoints();
    },
  }
};

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function porter(location) {
  switch (location) {
    case "palace":
      tp.heaven.palace();
      break;
    case "vkeep":
      tp.heaven.keep();
      break;
    case "vcitizen":
      tp.heaven.citizen();
      break;
    case "shrine":
      tp.sky.shrine();
      break;
    case "scitizen":
      tp.sky.citizen();
      break;
    case "mines":
      tp.surface.mines();
      break;
    case "keeper":
      tp.surface.keeper();
      break;
    case "pub":
      tp.surface.pub();
      break;
    case "puddle":
      tp.surface.puddle();
      break;
    case "brawl":
      tp.surface.brawl();
      break;
    case "id":
      tp.dungeon.insane();
      break;
    case "lkeep":
      tp.hell.keep();
      break;
    case "collector":
      tp.hell.collector();
      break;
    case "forge":
      tp.hell.forge();
      break;
    case "shore":
      tp.quest.shore();
      break;
    case "mountians":
      tp.quest.mountians();
      break;
    case "lava":
      tp.quest.lava();
      break;
    case "sky":
      tp.quest.sky();
      break;
    case "dungeon":
      tp.quest.dungeon();
      break;
    case "lake":
      tp.quest.lake();
      break;
    case "temple":
      tp.quest.temple();
      break;
    case "jump1":
      tp.wp.jump1();
      break;
    case "jump2":
      tp.wp.jump2();
      break;
    case "jump3":
      tp.wp.jump3();
      break;
    case "jump4":
      tp.wp.jump4();
      break;
    case "set1":
      tp.wp.set1();
      break;
    case "set2":
      tp.wp.set2();
      break;
    case "set3":
      tp.wp.set3();
      break;
    case "load":
      tp.wp.load();
      break;
    case "save":
      tp.wp.save();
      break;
    case "fhermit":
      tp.forge.fhermit();
      break;

    default:
      //No matching case found. Where did you try to go?
      console.log(location);
      break;
  }
}

function log(message, log_level) {
  switch (log_level) {
    case 0:
      //information
      top.OldChat.unshift(`<font style='color:green'>${message}</font>`);
      break;

    case 1:
      //warning
      top.OldChat.unshift(`<font style='color:yellow'>${message}</font>`);
      break;

    case 2:
      //security
      top.OldChat.unshift(`<font style='color:red'>${message}</font>`);
      break;

    case 3:
      //security
      top.OldChat.unshift(`${message}`);
      break;

    case 4:
    case undefined:
      //system
      top.OldChat.unshift(`<font style='color:#CC00CC'>${message}</font>`);
      break;

    default:
      console.log(message);
      break;
  }
  upchat('');
}

function ashJunk() {
  findJunk();
  if (junkItems.length > 0) {
    burnit(junkItems[0]);
    domes(`Burnt ${getitem(junkItems[0])}`);
    junkItems = junkItems.splice(1, junkItems.length);
  } else {
    domes("No ashable items.");
  }
}

function findJunk(ret) {
  junkItems = [];
  let relics = [
    35,
    36,
    37,
    38,
    39,
    46,
    47,
    51,
    52,
    53,
    54,
    55,
    58,
    59,
    60,
    64,
    66,
    67,
    68,
    69,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88
  ];
  let equipped_items = [
    top.Weapon,
    top.Shield,
    top.Cast,
    top.Heal,
    top.Helmet,
    top.Mantle,
    top.Sleeves,
    top.Leggings,
    top.Boots,
    top.Gauntlets
  ];
  let inventory = top.Inventory.split("-").filter(e => String(e).trim());
  for (let i in inventory) {
    let item = inventory[i];
    let item_name = getitem(item);
    if (item_name.indexOf("*") > -1 && (parseInt(item, 10) % 1000 < 70)) {
      if (relics.indexOf(parseInt(item / 100000, 10) % 100 - 1) < 0) {
        if (equipped_items.indexOf(item) < 0) {
          junkItems.push(item);
        }
      }
    }
  }
  if (ret) {
    return junkItems.length;
  }
}

function getEnch(itemnumber) {
  return parseInt(itemnumber / 100000, 10) % 100 - 1;
}

function getType(itemnumber) {
  return parseInt(itemnumber / 1000, 10) % 100;
}

function getValue(itemnumber) {
  return parseInt(itemnumber, 10) % 1000;
}

function essences() {
  let eeot = 0;
  let eeogt = 0;
  let eeost = 0;
  let ruby = 0;
  let sapphire = 0;
  let emerald = 0;
  let fire = 0;
  let ice = 0;
  let tects = 0;
  let stones = 0;
  let light = 0;
  let blood = 0;
  let lava = 0;
  let storm = 0;
  let shards = 0;
  let flames = 0;
  let storms = 0;

  for (let i in top.inventory) {
    if (getType(top.inventory[i]) == 27) {
      switch (parseInt(top.inventory[i])) {
        case 27000:
          fire++;
          break;
        case 27001:
          light++;
          break;
        case 27002:
          ice++;
          break;
        case 27003:
          lava++;
          break;
        case 27004:
          storm++;
          break;
        case 27005:
          blood++;
          break;
        case 27020:
          tects++;
          break;
        case 27021:
          stone++;
          break;
        case 27022:
          flames++;
          break;
        case 27023:
          shards++;
          break;
        case 27024:
          storms++;
          break;
        case 27018:
          eeot++;
          break;
        case 27019:
          eeogt++;
          break;
        case 27020:
          tect++;
          break;
        case 27021:
          stone++;
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
  }
  let pe_html = `L: ${lava} | B: ${blood} | S: ${storm}`;
  let ut_html = `F: ${fire} | L: ${light} | I: ${ice}`;
  let de_html = `ST: ${storms} | FL: ${flames} | SH: ${shards}`;
  let ts_html = `T: ${tects} | S: ${stones}`;
  let tres_html = `T: ${eeot} | GT: ${eeogt} | ST: ${eeost}`;
  let gem_html = `E: ${emerald} | S: ${sapphire} | R: ${ruby}`;

  document.getElementById('s_Pe').innerHTML = pe_html;
  document.getElementById('s_Ut').innerHTML = ut_html;
  document.getElementById('s_De').innerHTML = de_html;
  document.getElementById('s_War').innerHTML = ts_html;
  document.getElementById('s_Treasure').innerHTML = tres_html;
  document.getElementById('s_Gems').innerHTML = gem_html;
}

setTimeout(function () {
  genfull('chat', '/dis', 0);
  domes('Final Version Loaded successfully.');
  domes(`Please check out the forums to suggest updates. <br> I appreciate everyone of you so much for using the addon and allowing me to become a better developer in the process. I hope I've reignited your passion in rwk and hope for multiple updates to come in the future to support the player base. Thank you again - Anubis</font>`);
  upbuttons();
}, 500);

function toggle_waypoints() {
  if (document.getElementById("waypoint-menu").hidden == false) {
    document.getElementById("waypoint-menu").hidden = true;
    document.getElementById("wpb").innerHTML = "Show Waypoints";
  } else {
    document.getElementById("waypoint-menu").hidden = false;
    document.getElementById("wpb").innerHTML = "Hide Waypoints";
  }
}

function deposit_gold() {
  if (top.LocZ != "For") {
    let gold = parseInt(top.Gold, 10);
    let tres = parseInt(top.Tres, 10);
    let fill_value = parseInt(2000000000 - tres, 10);
    if (gold >= fill_value) {
      fields.kingdom.action.value = "deposit";
      fields.kingdom.upaction();
      fields.kingdom.othera.value = fill_value;
      fields.kingdom.submit();
    } else {
      fields.kingdom.action.value = "deposit";
      fields.kingdom.upaction();
      fields.kingdom.othera.value = gold;
      fields.kingdom.submit();
    }
  } else {
    domes("Cannot be used in forge");
  }
}

function embezzle_gold() {
  if (top.LocZ != "For") {
    let gold = parseInt(top.Gold, 10);
    let tres = parseInt(top.Tres, 10);
    let fill_value = parseInt(2000000000 - gold, 10);
    if (fill_value <= tres) {
      fields.kingdom.action.value = "embezzle";
      fields.kingdom.upaction();
      fields.kingdom.othera.value = fill_value;
      fields.kingdom.submit();
    } else {
      fields.kingdom.action.value = "embezzle";
      fields.kingdom.upaction();
      fields.kingdom.othera.value = tres;
      fields.kingdom.submit();
    }
  } else {
    domes("Cannot be used in forge");
  }
}

function setAction(action = 'fight', target = '0', other = '0', othera = 'none') {
  fields.general.action.value = action;
  fields.general.upaction();
  fields.general.target.value = target;
  fields.general.uptarget();
  fields.general.other.value = other;
  fields.general.othera.value = othera;
}

document.addEventListener("keydown", (event) => {
  if (HK && !InputHasFocus()) {
    if (event.keyCode === 109) {
      event.preventDefault();
      tp.wp.jump1();
    }
    if (event.keyCode === 81) {
      event.preventDefault();
      ashJunk();
    }
  }

});

function peaValue() {
  let kingdoms = parseInt(prompt("Number of kingdoms"), 10);
  if (kingdoms <= 0) {
    domes("Stopped calculating pea value.");
    return;
  }
  let kings = parseInt(prompt("What is your Kingsmanship Skill"), 10);
  if (kings <= 0) {
    domes("Stopped calculating pea value.");
    return;
  }
  let hours = parseInt(prompt("Number of hours"), 10);
  if (hours <= 0) {
    domes("Stopped calculating pea value.");
    return;
  }
  let collectia = confirm("Do you have collectia");
  if (!collectia) {
    domes("")
    return;
  }
  if (kingdoms != 0 && kings != 0 && hours != 0) {
    let corruption = 0;
    let interest = 0.0;
    let embezzle = 0;

    if (kingdoms >= 1000 && kingdoms < 2499) {
      corruption = ((500 / kingdoms) + 0.5);
    } else if (kingdoms >= 2500) {
      corruption = (1750 / kingdoms);
    } else {
      corruption = 1;
    }

    if (collectia) {
      interest = parseFloat(0.0057 * (1 + Math.round((kings - 0.5) / 2) / 100) * 1.1);
    } else {
      interest = parseFloat(0.0057 * (1 + Math.round((kings - 0.5) / 2) / 100) * 1);
    }

    embezzle = Math.floor(2000000000 - (2000000000 / Math.pow((1 + (interest * corruption)), hours))) - 10000;
    //document.getElementById("chattybox").value = `/pe ${embezzle}`;
    genfull("chat", `/pea ${embezzle}`, 0);
    domes("<font color='red'>Total Bezz: " + parseInt(embezzle * kingdoms, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</font>");
  } else {
    domes("Stopped calculating pea value.");
  }
}

var percs = false;

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
  percents.Str = 100 * parseInt(top.Str, 10) / total;
  percents.Dex = 100 * parseInt(top.Dex, 10) / total;
  percents.Agi = 100 * parseInt(top.Agi, 10) / total;
  percents.Dur = 100 * parseInt(top.Dur, 10) / total;
  percents.Ntl = 100 * parseInt(top.Ntl, 10) / total;
  percents.Cnc = 100 * parseInt(top.Cnc, 10) / total;
  percents.Cnt = 100 * parseInt(top.Cnt, 10) / total;
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
  let str = mc(top.Str) + ": " + percents.Str.toString().substring(0, 4) + "%";
  let dex = mc(top.Dex) + ": " + percents.Dex.toString().substring(0, 4) + "%";
  let agi = mc(top.Agi) + ": " + percents.Agi.toString().substring(0, 4) + "%";
  let dur = mc(top.Dur) + ": " + percents.Dur.toString().substring(0, 4) + "%";
  let ntl = mc(top.Ntl) + ": " + percents.Ntl.toString().substring(0, 4) + "%";
  let cnc = mc(top.Cnc) + ": " + percents.Cnc.toString().substring(0, 4) + "%";
  let cnt = mc(top.Cnt) + ": " + percents.Cnt.toString().substring(0, 4) + "%";

  top.frames.main.document.getElementById("s_Str").innerText = str;
  top.frames.main.document.getElementById("s_Dex").innerText = dex;
  top.frames.main.document.getElementById("s_Agi").innerText = agi;
  top.frames.main.document.getElementById("s_Dur").innerText = dur;
  top.frames.main.document.getElementById("s_Ntl").innerText = ntl;
  top.frames.main.document.getElementById("s_Cnc").innerText = cnc;
  top.frames.main.document.getElementById("s_Cnt").innerText = cnt;
}

var mainLoad = (function () {
  loadPersonalWaypoints();
  document.getElementsByTagName('tbody')[1].innerHTML = `<tbody>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  <tr>
    <td background="../side.jpg" rowspan="5"><img border="0" src="../side.jpg" width="10" height="44"></td>
    <td width="25%" bgcolor="0"> <span id="s_name">${top.login}</span> <a target="_blank" href="../info.htm#lev">Lev</a>: <span id="s_login">${top.Level}</span><span> / ${max_level}</span> <span id='perc_toggle' onclick='toggle_percents();'>%</span></td>
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
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Essence Counts</a>: </td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">PEs</a>: <span id="s_Pe">L: 0 | B: 0 | S: 0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">UTs</a>: <span id="s_Ut">F: 0 | L: 0 | I: 0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">DEs</a>: <span id="s_De">ST: 0 | FL: 0 | SH: 0</span></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Space</a>: <span id="inv_Space"> </span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">War</a>: <span id="s_War">T: 0 | S: 0 </span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Tres</a>: <span id="s_Treasure">T: 0 | GT: 0 | ST: 0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Gems</a>: <span id="s_Gems">E: 0 | S: 0 | R: 0</span></td>
  </tr>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  </tbody>`;
  let abc = document.getElementsByTagName('table')[0].childNodes[0];
  let xxz = document.getElementsByTagName('table')[0].childNodes[0].childNodes[2];
  abc.insertBefore(document.createElement("tr"), xxz);
  abc.id = 'addon-tr';
  var styler = document.createElement('style');
  styler.innerHTML = `select {
    background-color: #343330;
    color: #bda14c;
  }

  button {
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    background-color: #778899;
  }

  optgroup {
    background-color: #343330;
    color: #bda14c;
  }
  `;
  document.getElementsByTagName('head')[0].appendChild(styler);
  var cm = document.createElement('script');
  cm.type = 'text/javascript';
  cm.src = 'https://s3.amazonaws.com/rwk-assets/chatmod.js';
  document.getElementsByTagName('head')[0].appendChild(cm);
  let xlr = `
  <td width="100%" colspan="2" id="addon">
    <table id="addon-table" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#808080" text-align='center'>
        <tbody>
            <tr>
                <td background="../top.jpg" align="center" colspan="5">
                    <img border="0" src="../top.jpg" width="44" height="10">
                </td>
            </tr>
            <tr>
                <td rowspan="5" background="../side.jpg">
                    <img border="0" src="../side.jpg" width="10" height="44">
                </td>
                <td bgcolor="0" width="0">
                    <img border="0" src="../dragon.jpg">
                </td>
                <td width="100%" bgcolor="0">
                    <table width="100%" style='text-align:center;'>
                        <tr id='tb_1'>
                            <td>
                                <center>
                                    <div id="waypoint-menu" hidden>
                                        Waypoints: <select id="waypoints">
                                            <optgroup label="PERSONAL">
                                                <option value="jump1">Personal 1</option>
                                                <option value="jump2">Personal 2</option>
                                                <option value="jump3">Personal 3</option>
                                                <option value="jump4">Return</option>
                                                <option value="set1">Set 1</option>
                                                <option value="set2">Set 2</option>
                                                <option value="set3">Set 3</option>
                                                <option value="load">Load Waypoints</option>
                                                <option value="save">Save Waypoints</option>
                                            </optgroup>
                                            <optgroup label="HEAVEN">
                                                <option value="palace">Forbidden Palace</option>
                                                <option value="vkeep">Heaven Keep</option>
                                                <option value="vcitizen">A Citizen</option>
                                            </optgroup>
                                            <optgroup label="SKY">
                                                <option value="shrine">Skill Shrine</option>
                                                <option value="scitizen">A Citizen</option>
                                            </optgroup>
                                            <optgroup label="SURFACE">
                                                <option value="mines">Forbidden Mines</option>
                                                <option value="keeper">Ash Keeper</option>
                                                <option value="pub">Stallions Pub</option>
                                                <option value="puddle">Le Puddle Deep</option>
                                                <option value="brawl">Inquest Brawl</option>
                                            </optgroup>
                                            <optgroup label="DUNGEON">
                                                <option value="id">Insane Dungeon</option>
                                            </optgroup>
                                            <optgroup label="HELL">
                                                <option value="lkeep">Hell Keep</option>
                                                <option value="collector">Ash Collector</option>
                                                <option value="forge">Forge Entrance</option>
                                            </optgroup>
                                            <optgroup label="FORGE">
                                                <option value="fhermit">Hermit</option>
                                            </optgroup>
                                            <optgroup label="QUEST">
                                                <option value="shore">Hell Shore</option>
                                                <option value="mountians">Dungeon Mountians</option>
                                                <option value="lava">Dungeon Lava</option>
                                                <option value="sky">Sky Entrance</option>
                                                <option value="dungeon">Dungeon Entrance</option>
                                                <option value="lake">Heaven Lake</option>
                                                <option value="temple">The Temple</option>
                                            </optgroup>
                                        </select><button onclick="porter(document.getElementById('waypoints').value)">Teleport</button>
                                    </div>
                                    <font color="slate">
                                    <button onclick="deposit_gold()">Deposit Max</button>
                                    <button onclick="embezzle_gold()">Embezzle Max</button>
                                    <button onclick="peaValue();">Calculate Pea</button>
                                    <button onclick="toggle_waypoints();" id="wpb">Show Waypoints</button>
                                    <button onclick="toggle_chatmod();">Toggle Chat Mods</button>
                                    <button onclick="ashJunk();" >Ash Junk</button>
                                    </font>
                                </center>
                            </td>
                        </tr>
                    </table>
                    </center>
                </td>
                <td bgcolor="#000000" width="0" align="right">
                    <img border="0" src="../minotaur.jpg">
                </td>
                <td rowspan="4" background="../side.jpg">
                    <img border="0" src="../side.jpg" width="10" height="44">
                </td>
            </tr>
            <tr>
                <td background="../top.jpg" align="center" colspan="5">
                    <img border="0" src="../top.jpg" width="44" height="10">
                </td>
            </tr>
        </tbody>
    </table>
</td>`;
  document.getElementsByTagName('table')[0].childNodes[0].childNodes[2].innerHTML = xlr;
  chat.target.focus();
  updelay();
})();

function convertserver(name) {
  let load = `http://rwkpd.s3.amazonaws.com/rwk2-${name}.json`;
  let save = `http://rwkpd.s3.amazonaws.com/rwk1-${name}.json`;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = this.responseText;
      let xhttp2 = new XMLHttpRequest();
      xhttp2.open('PUT', save, true);
      xhttp2.send(response);
    }
  };
  xhttp.open('GET', load, true);
  xhttp.send(null);
}

function autoFill(info) {
  let save = `http://rwkpd.s3.amazonaws.com/${info[0]}-${info[1].toLowerCase()}.json`;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Saved data");
    }
  };
  xhttp.open('PUT', save, true);
  xhttp.send(info[2]);
}

function upbuttons() {
  tempstr = "";

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

  yes = 0;

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
    tempstr += "<img width=72 height=36 style=\"cursor: pointer;\" onmousedown=gattack(\"attack\") border=0" + top.hio + "src='" + top.y + "ButAttack.jpg' title='Attack With Both Weapons'> <img width=72 height=36 style=\"cursor: pointer;\" onmousedown=gattack(\"cast\") border=0" + top.hio + "src='" + top.y + "ButCast.jpg' title='Cast With Both Spells'> <img width=72 height=36 style=\"cursor: pointer;\" onmousedown=gattack(\"lattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid1.jpg' title='Left Weapon and Spell'> <img width=72 height=36 style=\"cursor: pointer;\" onmousedown=gattack(\"rattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid2.jpg' title='Right Weapon and Spell'> <img width=72 height=36 style=\"cursor: pointer;\" onmousedown=gattack(\"defend\") border=0" + top.hio + "src='" + top.y + "ButDefend.jpg' title='Defend'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


    tempstr += " <img border=0 src='" + top.y + "ButVs.jpg'> <a href=javascript:pm('" + mp(top.Target) + "')>" + getcreature(top.Target) + "</a>";
  }
  Essences();
  genInventoryDisplay();
  top.frames.main.s_FightWin.innerHTML = tempstr;
}

function genInventoryDisplay() {
  let current_inventory = top.Inventory.split("-").filter(e => String(e).trim());
  let inv_count = current_inventory.length;
  let quest_items = 0;
  let max_inventory = 50;

  if (current_inventory.includes("11042") || current_inventory.includes("11050")) {
    max_inventory = 75;
  }
  if (current_inventory.includes("11082") || current_inventory.includes("11087")) {
    max_inventory = 90;
  }
  if (current_inventory.includes("11110")) {
    max_inventory = 165;
  }

  top.inventory.forEach(item => {
    if (getType(item) == 11) {
      quest_items++;
    }
  });

  document.getElementById("inv_Space").innerText = `${inv_count - quest_items}/${max_inventory - quest_items} Ashable: ${findJunk(true)}`;
}