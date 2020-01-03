

function increment() {
    var d = new Date();
document.getElementById('demo').innerHTML = d.toDateString();
var g = new Date()
document.getElementById('tried').innerHTML = g.toLocaleTimeString();  
}
setInterval(increment, 1000);





