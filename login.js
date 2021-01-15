
//login
let passSave = "admin";


let passCount = 1;
let passMax = 3;

// this is what is called from the onsubmit
function checkPass() {

	// lets get what ever is in the form for password
	let passWord = document.forms["formName"]["password"].value;
	// note that we need both the forms name and the name of the input tha we want to get

	//first check if the user is below the max number of changes
	if (passCount <= passMax) {

		// Check if the passWord is  not correct
		if (passWord != passSave) {
			console.log(passCount);
			// make a var to hold the number of attempts left
			var attemptsLeft = 4 - passCount;

			//inform the user of how its going for them
			document.getElementById("passStatus").innerHTML = "You have " + attemptsLeft + " attempts left!";

			// update the count for each failed password check
			passCount++;

			// then return false, so that the submit action wont run
			return false;
		} else {
			// if there is something in the password, return true so the submit action happends
			return true;
		}

	} else {
		// if the user is above the max changes for the password check they are locked out
		//inform the user of how its going for them
		document.getElementById("passStatus").innerHTML = "NO LOGIN FOR YOU!";
		// and also make it red
		document.getElementById("passStatus").style.color = "red";
		return false;

	}
}

//number of times visited page
function GetCookie (name) { 
var arg = name + "="; 
var alen = arg.length; 
var clen = document.cookie.length; 
var i = 0; 
while (i < clen) {
var j = i + alen; 
if (document.cookie.substring(i, j) == arg) 
return getCookieVal (j); 
i = document.cookie.indexOf(" ", i) + 1; 
if (i == 0) break; 
} 
return null;
}
function SetCookie (name, value) { 
var argv = SetCookie.arguments; 
var argc = SetCookie.arguments.length; 
var expires = (argc > 2) ? argv[2] : null; 
var path = (argc > 3) ? argv[3] : null; 
var domain = (argc > 4) ? argv[4] : null; 
var secure = (argc > 5) ? argv[5] : false; 
document.cookie = name + "=" + escape (value) + 
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
((path == null) ? "" : ("; path=" + path)) + 
((domain == null) ? "" : ("; domain=" + domain)) + 
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) { 
var exp = new Date(); 
exp.setTime (exp.getTime() - 1); 
var cval = GetCookie (name); 
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 30;
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt(){
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('count')
SetCookie('count',newcount,exp)
return count
}
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

