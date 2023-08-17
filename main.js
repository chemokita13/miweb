var counter = document.getElementById("counter")
var btn = document.getElementById("btn")

let times = 0;
function aumentCounter() {
    times = times + 1;
    counter.innerText = times
}

btn.addEventListener("click", aumentCounter)