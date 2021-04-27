function viewOfWeekday(moment, s, pirm, savBusena) {
//var pirm = field("Pirmadienio Data")
//var savBusena = field("savaitės būsena")

// savaitės diena (1 jei pirmadienis...):
//var s = 1

// simbolių priskyrimas
var symb = ""
if (s == 1) symb = "🔹" // field("smbSavNr")
if (s == 6) symb = "št" //field("smbSestadienis")
if (s == 7) symb = "sk" //field("smbSekmadienis")

var pd = moment(pirm)
var pm = pd.month()+1;
var sm = pd.add(1, "w").month()+1

var data = moment(pirm).add(s - 1, 'd');
var dabarNow = moment().format("YYYY-MM-DD")
//field("Šiandienos Data YYYY.MM.DD");

var mm = data.format("MM") 
var dd = data.format("DD")
var weekNr = ""//data.format("w") - 1
// jei pirmadienis
if (s == 1) weekNr = data.format("w")
if (dd == "01") dd = "1️⃣"

// jei šiandien pirmadienis
if (data.format("YYYY-MM-DD") == dabarNow) symb="🔴"

ats = mm + "-" + dd + "\n" 
ats += symb + weekNr

// jei pereinamosios savaitės
if (savBusena > 0) {

  if (savBusena == 1) {

  // pirma eilutė
  if (mm*1 == pm) ats
  else ats = ""
  }else{

  // antra eilutė
  if (mm*1 == sm) ats
  else ats = ""
  
  return ats;
}}
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//_________________________________

// kai perkelsiu į colors.js tolesnes funkcijas ištrinti
/*
function TraditionalColors(d) {
  var ats = "";
  var white = "#ffffff";
  var black = "#000000";
  var red = "#ff0000";
  var green = "#00ff00";
  var blue = "#0000ff";
  var cyan = "#00ffff";
  var rozine = "#ff00ff";
  var yellow = "#ffff00";
  var lGray = "#a8a8a8";
  var gray = "#333333";
  return [
  white, // index 0
  gray,
  white,
  yellow,
  white,
  green,
  red,
  red][d];
}

function GrayColors(d) {
  return [
  "#ffffff",
  "#999999",
  "#777777",
  "#555555",
  "#333333",
  "#FDD835", // gelt
  "#FF6F00", // oranž
  "#D50000" // raud
  ][d]
}

function FluentUIcolors(d) {
  return [
  "#7A7574", // pilk
  "#8E8CD8", // viol
  "#EF6950", // rusv
  "#00B7C3", // melsv
  "#FFB900", // gelt
  "#F7630C", // oranž
  "#E81123"  // raud
  ][d];
}

function MaterialColors7weekDays(d) {
  return ["#BF360C", // index 0=7
  "#CFD8DC",
  "#FFF9C4",
  "#FFEE58",
  "#9CCC65",
  "#558B2F",
  "#FF6D00",
  "#BF360C"
  ][d];
}

function MaterialColorsGoodBad(x) {
  return [
  "#ffffff", // non
  "#FF3D00", // bed raud
  "#FF6E40",
  "#FF9E80",
  "#BDBDBD", // neutr pilk
  "#CCFF90",
  "#B2FF59", // good žal
  "#76FF03"
  ][x];
}

function MaterialColorsVaterDrink(d) {
  return [
  "#ffffff",
  "#BF360C",
  "#FF6F00",
  "#FFECB3",
  "#9E9E9E",
  "#B3E5FC",
  "#4FC3F7",
  "#2962FF"
  ][d];
}
*/
