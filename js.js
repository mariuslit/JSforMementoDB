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

