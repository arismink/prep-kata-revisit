const urlDecode = function(text) {
  let obj = {};
  let arr1 = text.replace(/%20/g, " ").split(/&/);

  for (let str of arr1) {
    let arr2 = str.split(/=/);

    for (let a = 0; a < arr2.length; a++) {
      if (a === 0) obj[arr2[a]] = arr2[a + 1];
    }
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
