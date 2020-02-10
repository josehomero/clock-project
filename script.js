function increment() {
    var date = new Date();
    document.getElementById('date-text').innerHTML = date.toDateString();
    document.getElementById('clock-text').innerHTML = date.toLocaleTimeString();
}
setInterval(increment, 1000);
increment();