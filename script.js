const byteSize = (str) => {
  // write your code here  
	const encoder = new TextEncoder();
    const encodedString = encoder.encode(str);
    return encodedString.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
