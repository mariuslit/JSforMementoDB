function SavDienZodziuTrump(d) {
return [
	"sk", 
	"pr", 
	"an", 
	"tr", 
	"kt", 
	"pn", 
	"št", 
	"sk"][d];
}

function SavDienZodziuSkTrump(d) {
	return [
	"7 sk", 
	"1 pr", 
	"2 an", 
	"3 tr", 
	"4 kt", 
	"5 pn", 
	"6 št", 
	"7 sk"][d];
}

function SavDienZodziuRomen(d) {
	return [
	"VII", 
	"I", 
	"II", 
	"III", 
	"IV", 
	"V", 
	"VI", 
	"VII"][d];
}

function SavDienZodziuLTrump(d) {
	return [
	"S", 
	"p", 
	"a", 
	"t", 
	"k", 
	"P", 
	"Š", 
	"S"][d];
}

function SavDienZodziuVid(d) {
	return [
	"sekm", 
	"pirm", 
	"antr", 
	"treč", 
	"ketv", 
	"penkt", 
	"šešt", 
	"sekm"][d];
}

function MenesiuZodziuTrump(m) {
	return ["", 
	"Sau", 
	"Vas", 
	"Kov", 
	"Bal", 
	"Geg", 
	"Bir", 
	"Lie", 
	"Rgp", 
	"Rgs", 
	"Spa", 
	"Lap", 
	"Gru"][m];
}

function getItemTestMemory(x) {
	return ArrTestMemory()[x];
}

function ArrTestMemory() {
	return [
{vrd:"Vilija", tel:"1"},
{vrd:"Aidas", tel:"2"},
{vrd:"Indrė", tel:"3"},
{vrd:"Marius", tel:"4"},
{vrd:"Mama", tel:"5"},
{vrd:"Kristina", tel:"6"},
{vrd:"Skirmantas", tel:"7"},
{vrd:"Kitas", tel:"8"}
]}
/*
console.log(MenesiuZodziuTrump(6))
*/
