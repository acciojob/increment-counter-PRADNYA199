//your JS code here. If required.
let count=0;
<button onclick="myFunction()">Increment</button>
<p id="counter"></p>
function myFunction() {
  document.getElementById("counter").innerHTML = count++;
}