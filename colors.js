// failas skirtas spalvų paletėms

function Colors7weekDays(d) {
  return [
  "#BF360C", // index 0=7
  "#CFD8DC",
  "#FFF9C4",
  "#FFEE58",
  "#9CCC65",
  "#558B2F",
  "#FF6D00",
  "#BF360C"
  ][d];
}

function Colors7weekDaysGrey(d) {
  return [
  "#E64A19",// index 0=7
  "#FAFAFA",//1
  "#EEEEEE",
  "#FFF59D",//3
  "#E0E0E0",
  "#BDBDBD",
  "#FF5722",//6
  "#E64A19"
  ][d];
}

function ColorsVaterDrink(d) {
  return [
  "#ffffff", // 0
  "#BF360C",
  "#FF6F00",
  "#FFECB3",
  "#EEEEEE", // 4 norma
  "#B3E5FC",
  "#4FC3F7",
  "#0277BD",
  "#2962FF"
  ][d];
}

function ColorsGoodBad(x) {
  return ["AEFF51",
				"#FFBCA7", // red
				"#FFDCD0",
				"#FFF3EF",
				"#FFFFFF", // neutrali
				"#F3FFE5",
				"#CDFF93",
				"#AEFF51"  // green
    ][x];                     
}

function Colors12(x) {
  return [
	"#FF0000", // [0] gruodis
	"#0000FF", // [1] sausis
	"#00FAFF",
	"#9D85E0",
	"#489388",
	"#9CFFAA",
	"#00FF00",
	"#EBFF00",
	"#FF8100",
	"#CCBB58",
	"#7F7F7F",
	"#7F4900",
	"#FF0000"  // [12] gruodis
  ][x];
}
