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

function MenesiuZodziuLTrump(m) {
	return ["", 
	"Sa", 
	"Va", 
	"Ko", 
	"Ba", 
	"Ge", 
	"Bi", 
	"Li", 
	"Rp", 
	"Rs", 
	"Sp", 
	"La", 
	"Gr"][m];
}

function getItemTestMemory(x) {
	return ArrTestMemory()[x];
}

/*
console.log(MenesiuZodziuTrump(6))
*/
