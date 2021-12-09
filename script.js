
function compute() {
	//Calculate interest rate
    var principal = document.getElementById("principal");
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal.value * years * rate / 100;
	//Check if principal greater the 0
	if(principal.value<=0){
		alert("Enter a positive number");
		principal.focus();
		return false;
	}
	var year = new Date().getFullYear()+parseInt(years);
	//Write results
	document.getElementById("result").innerHTML= `
	If you deposit <mark> ${principal.value}</mark>,<br>
	at an interest rate of <mark>${rate}%</mark>.<br>
	You will receive an amount of <mark>${interest}</mark>,<br>
	in the year <mark>${year}</mark>
	`;
    
}

function updateRate() {
	//Return range value
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval+"%";
}