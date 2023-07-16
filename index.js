//var n=window.prompt("Enter");
let inp = document.getElementById("inp");
inp.oninput=function check(e){
    if(e.target.value.length>=5){
        e.target.value=e.target.value.slice(0,4);
   }


}

document.getElementById("bt").addEventListener("click", function call() {
  let inp = document.getElementById("inp");
  inp = inp.value;
  n = inp;
  console.log(inp);
  const a = [1];
  var carry = 0;
  for (var i = 2; i <= n; i++) {
    for (var j = 0; j < a.length; j++) {
      var tmp = a[j] * i;
      var t = parseInt(parseInt(tmp + carry) % 10);
      a[j] = t;
      //alert(t);
      carry = parseInt((tmp + carry) / 10);
    }
    while (carry != 0) {
      a.push(parseInt(carry % 10));
      carry = parseInt(parseInt(carry) / 10);
    }
    parseInt(a);
  }
  toString(a);
  var s = "";
  for (var i = a.length - 1; i >= 0; i--) {
    s += a[i];
  }
  document.getElementById("vl").innerHTML = s;
});
