/*jshint esversion: 6 */

(function () {
  'use strict';
}());

let max_level = 3190;

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

function upinventory(shouldi, ughi) {
  for (var xi6 = 0; xi6 < 4; xi6++) {
    if (top.Inventory == "" || top.Inventory == null)
      top.inventory = ["EMPTY", ""];
    else
      top.inventory = top.Inventory.split("-");

    if (xi6 == 0) {
      var eeot = 0;
      var eeogt = 0;
      var eeost = 0;
      var ruby = 0;
      var sapphire = 0;
      var emerald = 0;
      var fire = 0;
      var ice = 0;
      var tects = 0;
      var stones = 0;
      var light = 0;
      var blood = 0;
      var lava = 0;
      var storm = 0;
      var shards = 0;
      var flames = 0;
      var storms = 0;

      var subarr = top.inventory;
      var amount = subarr.length - 1;
      if (amount == 1) {
        amount = 2;
        subarr[1] = -1;
      }
      for (var i = 1; i < amount; i++) {
        var itype = parseInt(top.inventory[i] / 1000, 10) % 100;
        if (itype != 27)
          continue;
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
            stones++;
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

      document.getElementById('s_bot0').innerHTML = "" + lava + "/" + blood + "/" + storm;
      document.getElementById('s_bot1').innerHTML = "" + fire + "/" + light + "/" + ice;
      document.getElementById('s_bot2').innerHTML = "" + storms + "/" + flames + "/" + shards;
      document.getElementById('s_bot3').innerHTML = "" + tects + "/" + stones;
      document.getElementById('s_bot4').innerHTML = "" + eeot + "/" + eeogt + "/" + eeost;
      document.getElementById('s_bot5').innerHTML = "" + emerald + "/" + sapphire + "/" + ruby;
    }


    inputt = top.frames.main.document.getElementById('general' + xi6).action.value;
    var g = top.frames.main.document.getElementById('general' + xi6);
    var itemtog = [];
    itemtog[0] = top.Weapon;
    itemtog[1] = top.Shield;
    itemtog[2] = top.Gauntlets;
    itemtog[3] = top.Mantle;
    itemtog[4] = top.Sleeves;
    itemtog[5] = top.Cast;
    itemtog[6] = top.Leggings;
    itemtog[7] = top.Boots;
    itemtog[8] = top.Heal;
    itemtog[9] = top.Relic1;
    itemtog[10] = top.Relic2;
    itemtog[11] = top.Relic3;
    itemtog[12] = top.Relic4;
    itemtog[13] = top.Relic5;
    itemtog[14] = top.Relic6;
    itemtog[15] = top.Helmet;

    if (inputt == "equip" || inputt == "trade" || inputt == "sell" || inputt == "burn" || inputt == "ds" || inputt == "es") {
      if (shouldi != 0) {
        if (inputt == "equip" || inputt == "sell" || inputt == "burn" || inputt == "ds" || ughi == 1)
          var h = g.target;
        else
          var h = g.other;

        top.stickiinv = h.selectedIndex;

        var subarr = top.inventory;
        var lasttype = 99;
        var amount = subarr.length - 1;
        if (amount == 1) {
          amount = 2;
          subarr[1] = -1;
        }
        h.length = amount - 1;
        var displace = 0;
        for (var i = 1; i < amount + displace; i++) {
          var skipit = 0;
          for (var x = 0; x < 16; x++) {
            if (itemtog[x] == "Nothing") continue;
            if (itemtog[x] == subarr[i - displace]) {
              itemtog[x] = "Nothing";
              skipit = 1;
              break;
            }
          }
          var itype = parseInt(subarr[i - displace] / 1000, 10) % 100;
          if (lasttype != itype) {
            displace++;
            h.length = h.length + 1;
            if (itype == 0)
              h.options[i - 1].text = "Weapons";
            else if (itype == 1)
              h.options[i - 1].text = "Helmets";
            else if (itype == 2)
              h.options[i - 1].text = "Shields";
            else if (itype == 3)
              h.options[i - 1].text = "Gauntlets";
            else if (itype == 4)
              h.options[i - 1].text = "Mantles";
            else if (itype == 5)
              h.options[i - 1].text = "Sleeves";
            else if (itype == 6)
              h.options[i - 1].text = "Damage Spells";
            else if (itype == 7)
              h.options[i - 1].text = "Leggings";
            else if (itype == 8)
              h.options[i - 1].text = "Boots";
            else if (itype == 9)
              h.options[i - 1].text = "Heal Spells";
            else if (itype == 10)
              h.options[i - 1].text = "Relics";
            else if (itype == 11)
              h.options[i - 1].text = "Others";
            else if (itype == 12)
              h.options[i - 1].text = "Bows";
            else if (itype == 13)
              h.options[i - 1].text = "Arrows";
            else if (itype == 14)
              h.options[i - 1].text = "Light Weapons";
            else if (itype == 15)
              h.options[i - 1].text = "Heavy Weapons";
            else if (itype == 16)
              h.options[i - 1].text = "Precise Weapons";
            else if (itype == 17)
              h.options[i - 1].text = "Rapid Damage Spells";
            else if (itype == 18)
              h.options[i - 1].text = "Major Damage Spells";
            else if (itype == 19)
              h.options[i - 1].text = "Accurate Damage Spells";
            else if (itype == 20)
              h.options[i - 1].text = "Durability Helmets";
            else if (itype == 21)
              h.options[i - 1].text = "Durability Shields";
            else if (itype == 22)
              h.options[i - 1].text = "Durability Gauntlets";
            else if (itype == 23)
              h.options[i - 1].text = "Durability Mantles";
            else if (itype == 24)
              h.options[i - 1].text = "Durability Sleeves";
            else if (itype == 25)
              h.options[i - 1].text = "Durability Leggings";
            else if (itype == 26)
              h.options[i - 1].text = "Durability Boots";
            else if (itype == 27)
              h.options[i - 1].text = "Essence Elements";
            h.options[i - 1].text = "__________________" + h.options[i - 1].text + "__________________";
            h.options[i - 1].value = 999999999;
            i++;
          }
          lasttype = itype;
          if (skipit == 1)
            h.options[i - 1].text = getitem(subarr[i - displace]) + " (EQUIPPED)";
          else
            h.options[i - 1].text = getitem(subarr[i - displace]);
          h.options[i - 1].value = subarr[i - displace];
        }
      }
      if (shouldi != 0) {
        if (top.stickiinv < 0)
          top.stickiinv = 0;
        if (top.stickiinv >= h.length)
          top.stickiinv = h.length - 1;
        h.selectedIndex = top.stickiinv;
      }
      if (inputt != "equip")
        continue;
      var itype = parseInt(g.target.options[g.target.selectedIndex].value / 1000, 10) % 100;

      var tmpchar = g.target.options[g.target.selectedIndex].text;
      if (tmpchar.charAt(tmpchar.length - 1) == ")") {
        g.other.length = 1;
        g.other.options[0].text = "UNEQUIP";
        g.other.options[0].value = 11;
      } else if (itype == 1 || itype == 3 || itype == 4 || itype == 5 || itype == 7 || itype == 8 || itype == 20 || itype == 22 || itype == 23 || itype == 24 || itype == 25 || itype == 26) {
        g.other.length = 1;
        g.other.options[0].text = "AUTO";
        g.other.options[0].value = 0;
      } else if (itype == 0 || itype == 2 || itype == 12 || itype == 13 || itype == 14 || itype == 15 || itype == 16 || itype == 21) {
        g.other.length = 2;
        g.other.options[0].text = "Left Hand";
        g.other.options[0].value = 1;
        g.other.options[1].text = "Right Hand";
        g.other.options[1].value = 2;
      } else if (itype == 6 || itype == 9 || itype == 17 || itype == 18 || itype == 19) {
        g.other.length = 2;
        g.other.options[0].text = "Spell One";
        g.other.options[0].value = 3;
        g.other.options[1].text = "Spell Two";
        g.other.options[1].value = 4;
      } else if (itype == 10) {
        g.other.length = 6;
        g.other.options[0].text = "Relic 1";
        g.other.options[0].value = 5;
        g.other.options[1].text = "Relic 2";
        g.other.options[1].value = 6;
        g.other.options[2].text = "Relic 3";
        g.other.options[2].value = 7;
        g.other.options[3].text = "Relic 4";
        g.other.options[3].value = 8;
        g.other.options[4].text = "Relic 5";
        g.other.options[4].value = 9;
        g.other.options[5].text = "Relic 6";
        g.other.options[5].value = 10;
      } else {
        g.other.length = 1;
        g.other.options[0].text = "UNEQUIPABLE";
        g.other.options[0].value = 0;
      }
    }
  }
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

var mainLoad = (function () {
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
})();