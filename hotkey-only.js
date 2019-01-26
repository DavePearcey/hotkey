/*jshint esversion: 6 */

(function () {
  'use strict';
}());

var newbar = true;
let max_level = 3180;

var p = {
  version: "12",
  pwps: [0, 0, 0, 0],
  current_inventory: [],
  current_inventory_length: 0,
  max_inventory: 50,
};

var fields = {
  general: {
    main: document.getElementById("general"),
    action: document.getElementsByName("action")[0],
    target: document.getElementsByName("target")[0],
    other: document.getElementsByName("other")[0],
    othera: document.getElementsByName("othera")[0],
    submit: () => {
      document.getElementById("s_subbut").childNodes[0].click();
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
    form: document.getElementById("king"),
    target: document.getElementsByName("target")[1],
    other: document.getElementsByName("other")[1],
    othera: document.getElementsByName("othera")[1],
    submit: () => {
      document.getElementById("s_subbut2").childNodes[0].click();
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
      tp.tp(24, 32);
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
  for (let i in top.inventory) {
    if (getType == 27) {
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
          tect++;
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
          storm++;
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
  }
  let pe_html = `L: ${lava} | B: ${blood} | S: ${storm}`;
  let ut_html = `F: ${fire} | L: ${light} | I: ${ice}`;
  let de_html = `ST: ${storm} | FL: ${flames} | SH: ${shards}`;
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
  domes('Addon Version:' + p.version + ' Loaded successfully.');
  domes("You can now ash items by clicking on the Ash Junk items in the addon bar, or Using 'Q' while hotkeys are active. Use this at your own risk, and at your items risk.");
  upbuttons();
}, 500);

function craft() {
  fields.general.action.value = "ts";
  fields.general.upaction();
  fields.general.target.value = document.getElementById("craft-item-type").value;
  fields.general.uptarget();
  fields.general.other.value = document.getElementById("craft-item-value").value;
  fields.general.submit();
  setTimeout(() => {
    update_crafted_items();
  }, 200);
}

function update_crafted_items(itemval) {
  let relics = [
    36, 37, 38, 39, 51, 52, 58, 59, 64, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    81, 82, 83, 84, 85, 86, 87, 88
  ];
  if (document.getElementById('hide-dotb').checked == true) {
    relics.push(35);
  }
  if (document.getElementById('hide-bp').checked == true) {
    relics.push(22);
  }
  if (document.getElementById('hide-apex').checked == true) {
    relics.push(54);
  }
  if (document.getElementById('hide-lod').checked == true) {
    relics.push(53);
  }
  if (document.getElementById('hide-soc').checked == true) {
    relics.push(31);
  }
  let temp = ``;
  let inventory = top.Inventory.split("-").filter(e => String(e).trim());
  for (let value of inventory) {
    if (getitem(value).indexOf("*") < 0 && parseInt(value % 1000, 10) < 79) {
      let relic = Math.floor(parseInt(value - 10000, 10));
      if (!relics.includes(relic)) {
        if (parseInt(value / 1000, 10) % 100 !== 11 && parseInt(value / 1000, 10) % 100 !== 27) {
          temp += `<option value=${value}>${getitem(value)}</option>`;
        }
      }
    }
  }
  document.getElementById('crafted-item-burn').innerHTML = temp;
  if (arguments[0] != undefined) {
    setTimeout(() => {
      let options = document.getElementById('crafted-item-burn').options;
      for (let option of options) {
        if (option.value == arguments[0]) {
          document.getElementById('crafted-item-burn').value = arguments[0];
          break;
        }
      }
    }, 200);
  }
}

function burn_crafted_item() {
  let item = document.getElementById('crafted-item-burn').value;
  if (item != undefined) {
    burnit(item);
  }
  setTimeout(() => {
    update_crafted_items(item);
  }, 200);
}

function toggle_crafting() {
  if (document.getElementById("crafting-helper").hidden == false) {
    document.getElementById("crafting-helper").hidden = true;
    document.getElementById("chb").innerHTML = "Show Crafting";
  } else {
    document.getElementById("crafting-helper").hidden = false;
    document.getElementById("chb").innerHTML = "Hide Crafting";
  }
}

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

function craft() {
  fields.general.action.value = "ts";
  fields.general.upaction();
  fields.general.target.value = document.getElementById("craft-item-type").value;
  fields.general.uptarget();
  fields.general.other.value = document.getElementById("craft-item-value").value;
  fields.general.submit();
  setTimeout(() => {
    update_crafted_items();
  }, 200);
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
  let kingdoms = parseInt(prompt("Number of kingdoms"), 10) || 0;
  let kings = parseInt(prompt("What is your Kingsmanship Skill"), 10) || 0;
  let hours = parseInt(prompt("Number of hours"), 10) || 24;
  let collectia = confirm("Do you have collectia") || false;
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
    domes("Cancled.");
  }
}

function toggle_chatmod() {
  if (mod_chat) {
    mod_chat = false;
    domes("No longer modding chat.");
  } else {
    mod_chat = true;
    domes("Chat modder enabled");
  }
}

function update_chanting() {
  var pure = [];
  var dirty = [];
  var relic = [];
  var inventory = [];

  for (let x in top.inventory) {
    if (top.inventory[x] != "") {
      inventory.push(top.inventory[x]);
    }
  }

  for (let value of inventory) {
    if (value >= 10000 && value <= 10088) {
      relic.push(value);
    }
    if (getitem(value).indexOf("*") > -1 && ((value < 10000 || value > 10999)) && (value < 11000 || value > 11999) && (value < 27000 || value > 27999)) {
      dirty.push(value);
    }
    if (getitem(value).indexOf("*") == -1 && ((value < 10000 || value > 10999)) && (value < 11000 || value > 11999) && (value < 27000 || value > 27999)) {
      pure.push(value);
    }
  }

  let temp = "";

  for (let relics of relic) {
    let name = getitem(relics);
    temp += `<option value='${relics}'>${name}</option>`;
  }
  document.getElementById('chant-pure-relics').innerHTML = temp;
  temp = "";

  for (let pures of pure) {
    let name = getitem(pures);
    temp += `<option value='${pures}'>${name}</option>`;
  }
  document.getElementById('chant-clean-items').innerHTML = temp;
  temp = "";

  for (let dirtys of dirty) {
    let name = getitem(dirtys);
    temp += `<option value='${dirtys}'>${name}</option>`;
  }
  document.getElementById('chant-dirty-items').innerHTML = temp;
  temp = "";
}

function burn_pure_relic() {
  fields.general.action.value = "burn";
  fields.general.upaction();
  fields.general.target.value = document.getElementById("chant-pure-relics").value;
  let indexer = document.getElementById("chant-dirty-items").selectedIndex;
  fields.general.submit();
  setTimeout(() => {
    update_chanting();
    document.getElementById("chant-pure-relics").selectedIndex = indexer;
  }, 200);
}

function burn_pure_item() {
  fields.general.action.value = "sell";
  fields.general.upaction();
  fields.general.target.value = document.getElementById("chant-clean-items").value;
  let indexer = document.getElementById("chant-clean-items").selectedIndex;
  fields.general.submit();
  setTimeout(() => {
    update_chanting();
    document.getElementById("chant-clean-items").selectedIndex = indexer;
  }, 200);
}

function disenchant_dirty_item() {
  fields.general.action.value = "ds";
  fields.general.upaction();
  fields.general.target.value = document.getElementById("chant-dirty-items").value;
  let indexer = document.getElementById("chant-dirty-items").selectedIndex;
  fields.general.submit();
  setTimeout(() => {
    update_chanting();
    document.getElementById("chant-dirty-items").selectedIndex = indexer;
  }, 200);
}

function enchant_pure_item() {
  fields.general.action.value = "es";
  fields.general.upaction();
  fields.general.target.value = document.getElementById("chant-clean-items").value;
  let indexer = document.getElementById("chant-clean-items").selectedIndex;
  fields.general.uptarget();
  fields.general.other.value = document.getElementById("chant-pure-relics").value;
  let indexer2 = document.getElementById("chant-pure-relics").selectedIndex;
  fields.general.submit();
  setTimeout(() => {
    update_chanting();
    document.getElementById("chant-pure-relics").selectedIndex = indexer2;
    document.getElementById("chant-clean-items").selectedIndex = indexer;
  }, 200);
}

function toggle_chanting() {
  let elem = document.getElementById('chanting-helper');
  let butt = document.getElementById('chanting');
  if (elem.hidden == true) {
    elem.hidden = false;
    butt.innerText = "Hide Chanting";
    update_chanting();
  } else {
    elem.hidden = true;
    butt.innerText = "Show Chanting";
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
    top.mytodown = setTimeout(function () {
      downdelay();
    }, 1000);
    return;
  }
  if ((top.dActionDelay * 100 / top.dActionInc) >= 100) {
    top.frames.main.s_Response.innerHTML = "<font size=4>Request timed out...check your connection and try again.</font>";
    top.Update = 0;
    top.dActionDelay = 0;
  } else if ((top.dActionDelay * 100 / top.dActionInc) < 100 && top.Update == 1) {
    if (top.mytodown)
      clearTimeout(top.mytodown);
    top.mytodown = setTimeout(function () {
      downdelay();
    }, 100);
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
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">UTs</a>: <span id="s_Ut">T: F | L: 0 | I: 0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">DEs</a>: <span id="s_De">ST: 0 | FL: 0 | SH: 0</span></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Space</a>: <span id="inv_Space"> </span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">War</a>: <span id="s_War">T: 0 | S: 0 </span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://jimcav.com">Treasure</a>: <span id="s_Treasure">T: 0 | GT: 0 | ST: 0</span></td>
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

                                    <div id='chanting-helper' hidden>
                                        Enchanted Items: <select id='chant-dirty-items'>
                                        </select>
                                        <button onclick="disenchant_dirty_item()">Disenchant</button>
                                        <br>
                                        Pure Items: <select id='chant-clean-items'>
                                        </select>
                                        Relics: <select id='chant-pure-relics'>
                                        </select>
                                        <br>
                                        <button onclick="burn_pure_item()">Sell Pure Item</button> <button onclick="burn_pure_relic()">Sell
                                            Pure Relic</button> <button onclick="enchant_pure_item()">Enchant Item With
                                            Relic</button>
                                        <br>
                                    </div>

                                    <div id='crafting-helper' hidden>
                                        Item Type: <select id="craft-item-type">
                                            <option selected>Select Item Type</option>
                                            <option value="0">Weapon</option>
                                            <option value="1">Helmet</option>
                                            <option value="2">Shield</option>
                                            <option value="3">Gauntlets</option>
                                            <option value="4">Mantle</option>
                                            <option value="5">Sleeves</option>
                                            <option value="6">Damage Spell</option>
                                            <option value="7">Leggings</option>
                                            <option value="8">Boots</option>
                                            <option value="9">Heal Spell</option>
                                            <option value="10">Relic</option>
                                            <option value="12">Bow</option>
                                            <option value="13">Arrow</option>
                                            <option value="14">Light Weapons</option>
                                            <option value="15">Heavy Weapons</option>
                                            <option value="16">Precise Weapons</option>
                                            <option value="17">Rapid Damage Spells</option>
                                            <option value="18">Major Damage Spells</option>
                                            <option value="19">Accurate Damage Spells</option>
                                            <option value="20">Durability Helmets</option>
                                            <option value="21">Durability Shields</option>
                                            <option value="22">Durability Gauntlets</option>
                                            <option value="23">Durability Mantles</option>
                                            <option value="24">Durability Sleeves</option>
                                            <option value="25">Durability Leggings</option>
                                            <option value="26">Durability Boots</option>
                                            <option value="27">Essence Elements</option>
                                        </select>

                                        Item: <select id="craft-item-value">
                                            <option selected>Please Select Type</option>
                                        </select>

                                        <button onclick="craft()">Craft</button>

                                        <br>

                                        Destroy Items: <select id='crafted-item-burn'> </select>

                                        <button onclick="burn_crafted_item()">Destroy</button> <br>
                                        Hide: <label>DOTB<input type='checkbox' id="hide-dotb" onclick="update_crafted_items();"
                                                checked></label>
                                        <label>BP<input type='checkbox' id="hide-bp" onclick="update_crafted_items();"
                                                checked></label>
                                        <label>LoD<input type='checkbox' id="hide-lod" onclick="update_crafted_items();"
                                                checked></label>
                                        <label>Apex<input type='checkbox' id="hide-apex" onclick="update_crafted_items();"
                                                checked></label>
                                        <label>SoC<input type='checkbox' id="hide-soc" onclick="update_crafted_items();"></label>
                                    </div>
                                    <font color="slate">
                                    <button onclick="deposit_gold()">Deposit Max</button>
                                    <button onclick="embezzle_gold()">Embezzle Max</button>
                                    <button onclick='toggle_crafting();' id='chb'>Show Crafting</button>
                                    <button onclick='toggle_chanting();' id='chanting'>Show Chanting</button>
                                    <button onclick="peaValue();">Calculate Pea</button>
                                    <button onclick="toggle_waypoints();" id="wpb">Show Waypoints</button>
                                    <button onclick="toggle_chatmod();">Toggle Chat Mods</button>
                                    <button onclick="toggle_newbar();" id="delay-button">Old Delay Bar</button>
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
  setTimeout(() => {
    update_crafted_items();
  }, 1500);
  updelay();
})();

setTimeout(() => {
  document.getElementById("craft-item-type").addEventListener("change", () => {
    switch (document.getElementById("craft-item-type").value) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "7":
      case "8":
      case "12":
      case "13":
      case "20":
      case "21":
      case "22":
      case "23":
      case "24":
      case "25":
      case "26":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Dirty Rag</option>
           <option value=1>Cloth</option>
           <option value=2>Woven</option>
           <option value=3>Lined Mail</option>
           <option value=4>Bamboo Plate</option>
           <option value=5>Hardened Bark</option>
           <option value=6>Tin Platemail</option>
           <option value=7>Rusty Ringmail</option>
           <option value=8>Darkskin</option>
           <option value=9>Copper Scalemail</option>
           <option value=10>Bloody Iron Plate</option>
           <option value=11>Silvery Jointed Plate</option>
           <option value=12>Shiny Ringmail</option>
           <option value=13>Blackened Scalemail</option>
           <option value=14>Spiked Guard</option>
           <option value=15>Etched Adamantine</option>
           <option value=16>Gold Tipped Lined Mail</option>
           <option value=17>Heavy Cast Iron</option>
           <option value=18>Buffed Crystalline</option>
           <option value=19>Ageless Alchemist Ringmail</option>
           <option value=20>Spider Silk Woven</option>
           <option value=21>Shiny Platemail</option>
           <option value=22>Blackened Mennonite</option>
           <option value=23>Undead Skinned</option>
           <option value=24>Regenerating Troll Skin</option>
           <option value=25>Fire Dragon Scale</option>
           <option value=26>Molten Ringmail</option>
           <option value=27>Ice Dragon Scale</option>
           <option value=28>Magma Pounded Platemail</option>
           <option value=29>Angel Wing</option>
           <option value=30>Avenger Shieldskin</option>
           <option value=31>Aged Crystal</option>
           <option value=32>Fire Enderamoth</option>
           <option value=33>Indefinite Protection</option>
           <option value=34>Cry Ender</option>
           <option value=35>Cyclop's Eye</option>
           <option value=36>Unholy Intervention</option>
           <option value=37>Demon's Horn</option>
           <option value=38>Elemental Deceit</option>
           <option value=39>Ultimate Indifference</option>
           <option value=40>Enamalace Endoskeleton</option>
           <option value=41>Torment Skin</option>
           <option value=42>Refolded Diamond Plate</option>
           <option value=43>Damage Disregarder</option>
           <option value=44>Impenetrable Lamentation</option>
           <option value=45>Fortrousness Steelmail</option>
           <option value=46>Ancient Fortitude</option>
           <option value=47>Dragon Wing</option>
           <option value=48>Density Stone Guard</option>
           <option value=49>Unbreaking Body</option>
           <option value=50>Ice Forged</option>
           <option value=51>Melted Crystal</option>
           <option value=52>Woven Angel Hair</option>
           <option value=53>Tusk Spiked</option>
           <option value=54>Mortared Magma</option>
           <option value=55>Ageless Alkaline</option>
           <option value=56>Thousand Spun Silk</option>
           <option value=57>Smelted Carbonite</option>
           <option value=58>Widow Web</option>
           <option value=59>Acidified Stone</option>
           <option value=60>Lipased Enzyme</option>
           <option value=61>Regretless Mesh</option>
           <option value=62>Life Vigor</option>
           <option value=63>Perpetual Ice</option>
           <option value=64>Virgin Diamond</option>
           <option value=65>Creedless Cyrosilk</option>
           <option value=66>Treant Regrowth</option>
           <option value=67>Petrified Ancientscale</option>
           <option value=68>Behemoth Skin</option>
           <option value=69>Timeless Fortitude</option>
           <option value=70>Perforation Crafted</option>
           <option value=71>Imbued Perfection</option>
           <option value=72>Reivived Organismal</option>
           <option value=73>Clarified Creation</option>
           <option value=74>Enlightened Everbearing</option>
           <option value=75>Divine Transcension</option>
           <option value=76>Staggering Unsurpassment</option>
           <option value=77>Demon's Adulation</option>
           <option value=78>Protectant Prevailation</option>
           <option value=79>Devouring Lifeless Demise</option>
           </select>`;
        break;

      case "0":
      case "14":
      case "15":
      case "16":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Rusty Dagger</option>
        <option value=1>Old Knife</option>
        <option value=2>Broken Short Sword</option>
        <option value=3>Tarnished Scythe</option>
        <option value=4>Iron Mallet</option>
        <option value=5>Long Spear</option>
        <option value=6>Dull Katana</option>
        <option value=7>Strong Staff</option>
        <option value=8>Polished Tusk</option>
        <option value=9>Bronze Sharpened Dagger</option>
        <option value=10>Iron Claw</option>
        <option value=11>Naginata</option>
        <option value=12>Gold Plated Mallet</option>
        <option value=13>Etched Scythe</option>
        <option value=14>Poison Spear</option>
        <option value=15>Silver Tip Axe</option>
        <option value=16>Two Handed Battle Axe</option>
        <option value=17>Shimmering Long Sword</option>
        <option value=18>Ancient Katana</option>
        <option value=19>Blackened Pole</option>
        <option value=20>Crystal Staff</option>
        <option value=21>Engraved Dragon Bone</option>
        <option value=22>Bane Claw</option>
        <option value=23>Imploded Wand</option>
        <option value=24>Ovaline Double Sword</option>
        <option value=25>Molten Axe</option>
        <option value=26>Adversary Avenger Blade</option>
        <option value=27>Titans Mallet</option>
        <option value=28>Angel Fang Katana</option>
        <option value=29>Diamond Scorn Maret</option>
        <option value=30>Ancient Eye Wand</option>
        <option value=31>Head Heavy Staff</option>
        <option value=32>Scythe of Deliverance</option>
        <option value=33>Angled Razor Sword of Reznor</option>
        <option value=34>Undercurved Flesh Dispatcher</option>
        <option value=35>Cane of Tumultuous Torment</option>
        <option value=36>Axe of the Caged Angel</option>
        <option value=37>Demon Bone Mace</option>
        <option value=38>Katana of Ninth Life</option>
        <option value=39>Sword of Righteous Revenge</option>
        <option value=40>Mysterious Blade</option>
        <option value=41>Sword Of Omens</option>
        <option value=42>Dirk of Dark Magic</option>
        <option value=43>Rustic Light Shard</option>
        <option value=44>Eviscerating Eagle Claw</option>
        <option value=45>Dragon Tail Chain</option>
        <option value=46>Unforgiving Edge</option>
        <option value=47>Blackened Dragon Fang</option>
        <option value=48>Repressed Samurai Sword</option>
        <option value=49>Elimbinator</option>
        <option value=50>Crackling Tendril</option>
        <option value=51>Hammer of Execution</option>
        <option value=52>Bloodblack Recurve</option>
        <option value=53>Blackened Reaver</option>
        <option value=54>Flamberge of Flames</option>
        <option value=55>Bone Bladed Scythe</option>
        <option value=56>Unforgiving Flail</option>
        <option value=57>Brute Chopper</option>
        <option value=58>Enchanted Battle Staff</option>
        <option value=59>Rediron Pike</option>
        <option value=60>Reaping Rapier</option>
        <option value=61>Poison Barbed Whip</option>
        <option value=62>Bloodforge Axe</option>
        <option value=63>Cold Iron Claymore</option>
        <option value=64>Dwarven Double Edge</option>
        <option value=65>Bone Serrator</option>
        <option value=66>Combine Long Sword</option>
        <option value=67>Whip of Severance</option>
        <option value=68>Beheaden Blade</option>
        <option value=69>Rustless Lifeceaser</option>
        <option value=70>Mace of Resurrection</option>
        <option value=71>Double Axe of Durability</option>
        <option value=72>Bloodraker</option>
        <option value=73>Tension Torqer</option>
        <option value=74>Sword of Heavenly Ascension</option>
        <option value=75>Pandemoniums Vociferation</option>
        <option value=76>Awe Bringer</option>
        <option value=77>Avengment of the Fallen</option>
        <option value=78>Angels Eye Piercer</option>
        <option value=79>Claw of Demon Praise</option>`;
        break;

      case "9":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Minor Sanation</option>
        <option value=1>Regain Breath</option>
        <option value=2>Endow Health</option>
        <option value=3>Summon Breath</option>
        <option value=4>Aether Heal</option>
        <option value=5>Unrupture</option>
        <option value=6>Well of Life</option>
        <option value=7>White Light</option>
        <option value=8>Minor Rejuvenation</option>
        <option value=9>Elemental Breath</option>
        <option value=10>Regainment</option>
        <option value=11>Minor Recovery</option>
        <option value=12>Sanation</option>
        <option value=13>Regain Energy</option>
        <option value=14>Pain Forgettence</option>
        <option value=15>Summon Life</option>
        <option value=16>Aether Resurrection</option>
        <option value=17>White Life</option>
        <option value=18>Elemental Recovery</option>
        <option value=19>Rejuvenation</option>
        <option value=20>Summon Angels</option>
        <option value=21>Major Sanation</option>
        <option value=22>Regain Resistance</option>
        <option value=23>Endow Life</option>
        <option value=24>Undo Harm</option>
        <option value=25>Strength Remembrance</option>
        <option value=26>Unbegotten</option>
        <option value=27>Ceased Suffering</option>
        <option value=28>Major Rejuvenation</option>
        <option value=29>Reap Repair</option>
        <option value=30>Healers Omen</option>
        <option value=31>Omega Sanation</option>
        <option value=32>Asuwere</option>
        <option value=33>Regain Life</option>
        <option value=34>Effervescence</option>
        <option value=35>Replenish</option>
        <option value=36>Total Recall</option>
        <option value=37>Unending Regeneration</option>
        <option value=38>Rebirth</option>
        <option value=39>Breath of Life</option>
        <option value=40>Retainers Revelation</option>
        <option value=41>Life Empowerment</option>
        <option value=42>Angelic Anomaly</option>
        <option value=43>Forgetful Rendation</option>
        <option value=44>Disallowed Torment</option>
        <option value=45>Blinding Whiteness</option>
        <option value=46>Revelation of Health</option>
        <option value=47>Arrogant Regainment</option>
        <option value=48>Unholy Recollection</option>
        <option value=49>Eternal Enhancement</option>
        <option value=50>Wings of Support</option>
        <option value=51>Unbreaking Bones</option>
        <option value=52>Angelic Wind</option>
        <option value=53>Adoption</option>
        <option value=54>Begone Affliction</option>
        <option value=55>Devil of Lights Curse</option>
        <option value=56>Eye Glisten</option>
        <option value=57>Rebel Rehab</option>
        <option value=58>Rekindled Flame</option>
        <option value=59>Endall Suffering</option>
        <option value=60>Blinkback</option>
        <option value=61>Sorrowless</option>
        <option value=62>Pains Demise</option>
        <option value=63>Former State</option>
        <option value=64>Forced Blood Flow</option>
        <option value=65>Staggerless Agane</option>
        <option value=66>Blessing from Below</option>
        <option value=67>Restoration</option>
        <option value=68>Ardent Alignment</option>
        <option value=69>Livagane</option>
        <option value=70>Healthinator</option>
        <option value=71>Goshimhappy</option>
        <option value=72>Healmesoftly</option>
        <option value=73>Pheelgud</option>
        <option value=74>Lifeomatic</option>
        <option value=75>Gadam!</option>
        <option value=76>Sumholishit</option>
        <option value=77>Omagawad</option>
        <option value=78>Heavenly Recirculation</option>
        <option value=79>Everlasting Aura</option>`;
        break;

      case "10":
        document.getElementById('craft-item-value').innerHTML = `<option value="0">Strong Arm</option>
        <option value="1">Archers Eye</option>
        <option value="2">Cats Feet</option>
        <option value="3">Merlins Insight</option>
        <option value="4">Mental Focus</option>
        <option value="5">Impediment</option>
        <option value="6">Priests Touch</option>
        <option value="7">The Calling of Titus</option>
        <option value="8">Debilitator</option>
        <option value="9">Maladroit</option>
        <option value="10">Dawdle</option>
        <option value="11">Stupidify</option>
        <option value="12">Distraction</option>
        <option value="13">Mind Pierce</option>
        <option value="14">Touch of the Damned</option>
        <option value="15">The Calling of Cassius</option>
        <option value="16">Siphon Strength</option>
        <option value="17">Stolen Hands</option>
        <option value="18">Filched Feet</option>
        <option value="19">Pilfered Intellect</option>
        <option value="20">Lifted Thoughts</option>
        <option value="21">Purloinment</option>
        <option value="22">Blood Pinch</option>
        <option value="23">The Calling of Lestat</option>
        <option value="24">Confusion</option>
        <option value="25">Life Roulette</option>
        <option value="26">Annulment</option>
        <option value="27">Damage Shield</option>
        <option value="28">Damage Capacitor</option>
        <option value="29">The Calling of Cara</option>
        <option value="30">Dexterous Hoist</option>
        <option value="31">Stream of Conscious</option>
        <option value="32">Blood Bath</option>
        <option value="33">Vampiric Leech</option>
        <option value="34">Death Spike</option>
        <option value="35">Denial of the Believer</option>
        <option value="56">Encephalon Decay</option>
        <option value="57">Vogars Vice</option>
        <option value="40">Unerring Edge</option>
        <option value="41">Faithful Severity</option>
        <option value="42">Clarity</option>
        <option value="43">Mental Virtue</option>
        <option value="44">Devestation</option>
        <option value="45">Rectification</option>
        <option value="46">Allegiance</option>
        <option value="47">Impetuosity</option>
        <option value="48">Preservation</option>
        <option value="49">Monasticism</option>
        <option value="50">Theurgal Equalizer</option>
        <option value="60">Voidance</option>
        <option value="54">Apex</option>
        <option value="53">Leather of Delegation</option>`;
        break;

      case "6":
      case "17":
      case "18":
      case "19":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Acid Drop</option>
        <option value="1">Flame Blast</option>
        <option value="2">Striking Shadows</option>
        <option value="3">Soulwrack</option>
        <option value="4">Elemental Invocation</option>
        <option value="5">Unholy Provocation</option>
        <option value="6">Frost Whip</option>
        <option value="7">Flesh Rot</option>
        <option value="8">Dark Lash</option>
        <option value="9">Fire Burst</option>
        <option value="10">Bleeding Pores</option>
        <option value="11">Vile Curse</option>
        <option value="12">Crystal Shards</option>
        <option value="13">Chilling Scythe</option>
        <option value="14">Meteor Swarm</option>
        <option value="15">Lightening Arc</option>
        <option value="16">Flaming Spears</option>
        <option value="17">Aether Inferno</option>
        <option value="18">Agonizing Torment</option>
        <option value="19">Bolt of Death</option>
        <option value="20">Reaving Relent</option>
        <option value="21">Brain Decay</option>
        <option value="22">Mystic Mirage</option>
        <option value="23">Howl From Below</option>
        <option value="24">Incineration</option>
        <option value="25">Regenerating Talons</option>
        <option value="26">Chaos Hammer</option>
        <option value="27">Banshee Wail</option>
        <option value="28">Lightnings Lament</option>
        <option value="29">Bath of Razors</option>
        <option value="30">Feast of the Demons</option>
        <option value="31">Earthen Maw</option>
        <option value="32">Arcane Vengeance</option>
        <option value="33">Arctic Chill</option>
        <option value="34">Hell Fury</option>
        <option value="35">Spirit Annihilation</option>
        <option value="36">Frost Gate</option>
        <option value="37">Mind Shatter</option>
        <option value="38">Shriek of the Damned</option>
        <option value="39">Oblivion Orb</option>
        <option value="40">Obsidian Undershimmer</option>
        <option value="41">Unrelentious Retribution</option>
        <option value="42">Lost Souls Suffering</option>
        <option value="43">Relentless Clouds</option>
        <option value="44">Scream of the Unending</option>
        <option value="45">Retribution of the Wronged</option>
        <option value="46">Brain Boilation</option>
        <option value="47">Holocaustic Nuke</option>
        <option value="48">Shattering Blood Rebellion</option>
        <option value="49">Unholy Derangement</option>
        <option value="50">Nuke of Nosferatu</option>
        <option value="51">Belials Calling</option>
        <option value="52">Nerve Collapse</option>
        <option value="53">Inner Incineration</option>
        <option value="54">Eyesplode</option>
        <option value="55">Spirit Invocation</option>
        <option value="56">Hades Glimpse</option>
        <option value="57">Comfortless Pillow</option>
        <option value="58">Angelic Anguish</option>
        <option value="59">Demon Summonation</option>
        <option value="60">Silent Serenity</option>
        <option value="61">Lucifers Lament</option>
        <option value="62">Naysay</option>
        <option value="63">Manifest Corpse</option>
        <option value="64">Heretic Howl</option>
        <option value="65">Death Shroud</option>
        <option value="66">Morbid Provocation</option>
        <option value="67">Blood Curdle</option>
        <option value="68">Shriek of Satan</option>
        <option value="69">Lifeless Growls</option>
        <option value="70">Sinners Rebirth</option>
        <option value="71">Body Singe Durability</option>
        <option value="72">Spirit Bind</option>
        <option value="73">Eternal Yearning</option>
        <option value="74">Vivacity Arbitration</option>
        <option value="75">Boiling Contempt</option>
        <option value="76">Demons Despisal</option>
        <option value="77">Disparagement of the Forgotten</option>
        <option value="78">Hellacious Rebirth</option>
        <option value="79">Horrendous Defilation</option>`;
        break;

      case "27":
        document.getElementById('craft-item-value').innerHTML = `<option value="18">Essence Element of Treasure</option>
        <option value="19">Essence Element of Great Treasure</option>
        <option value="30">Essence Element of Superior Treasure</option>`;
        break;

    }
  });
  update_crafted_items();
}, 1000);

function savePersonalWaypoints() {
  let server;
  if (location.host.indexOf("rwk1") == -1) {
    server = "rwk2";
  } else {
    server = "rwk1";
  }
  let url = `http://rwkpd.s3.amazonaws.com/${server}-${top.login.toLowerCase()}.json`;
  let waypoints = [tp.wp.loc_1, tp.wp.loc_2, tp.wp.loc_3, tp.wp.loc_4].join(";");
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      domes("Player waypoints saved.");
    }
  };
  xhttp.open('PUT', url, true);
  xhttp.setRequestHeader('content-type', 'text/plain');
  xhttp.send(waypoints);
}

function loadPersonalWaypoints() {
  let server;
  if (location.host.indexOf("rwk2") >= 0) {
    server = "rwk2";
  } else {
    server = "rwk1";
  }
  let url = `http://rwkpd.s3.amazonaws.com/${server}-${top.login.toLowerCase()}.json`;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let waypoints = this.responseText.split(";");
      tp.wp.loc_1 = waypoints[0].split(",");
      tp.wp.loc_2 = waypoints[1].split(",");
      tp.wp.loc_3 = waypoints[2].split(",");
      tp.wp.loc_4 = waypoints[3].split(",");
      domes("Player waypoints have been loaded");
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send(null);
}

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
  essences();
  if (percs) {
    getPercents();
  }
  if (top.LastAction == "ts" || top.LastAction == "es" || top.LastAction == "ds") {
    update_crafted_items();
    update_chanting();
  }
  genInventoryDisplay();
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

upchat("");
up("");
upbuttons();
updelay();
top.hotlist.unshift('Rune+Keeper');
top.hotlist.unshift('Nobody');