var myDate = new Date();
var hours = myDate.getHours();

var greet;

if(hours < 12)
	greet = "Good Morning";
else if(hours >= 12 && hours <= 17)
	greet = "Good Afternoon";
else if(hours >= 17 && hours <= 24)
	greet = "Good Evening"

document.title = greet;

function checkName(){
	var valid = document.getElementById("firstField");
	if (valid.value==""){
		valid.style.border="2px solid red";
		return false;
	}

	function removeBorder(){
		var name = document.getElementById("firstField");
		if(name.value != ""){
			name.style.border="";
		}
	}
}