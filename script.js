

let str = prompt("Enter a String: ");

  for (let i = 1; i < str.length; i++) {
  	let ct = 1;
	  for (let j = i+1; j < str.length; j++) {
	  	    if (str.charAt(i) == str.charAt(i-1)) {
	  	    	ct++;
	  	    }
	  }

	  if (ct == 1) {
	  	alert(str.charAt(i));
		break;
	  }
  }
