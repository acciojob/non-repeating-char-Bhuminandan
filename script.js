

let str = prompt("Enter a String: ");

for (let i = 0; i < str.length; i++) {
	if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
		alert(str.charAt(i));
		break;
	}
}
  
