function openDonate() {
    document.getElementById("popup").style.display = "flex";
}

function closeDonate() {
    document.getElementById("popup").style.display = "none";
}

let selectedAmount = 200;

function setAmount(amount) {
    selectedAmount = amount;
    document.getElementById("selectedAmount").innerHTML =
        "Selected: ₹" + amount;
}

const customAmount = document.getElementById("customAmount");

if (customAmount) {
    customAmount.addEventListener("input", function () {
        if (this.value !== "") {
            selectedAmount = this.value;
            document.getElementById("selectedAmount").innerHTML =
                "Selected: ₹" + this.value;
        }
    });
}

function copyUPI() {
    navigator.clipboard.writeText("9272065482-2@axl");
    alert("UPI ID Copied Successfully");
}

window.onclick = function (event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
setInterval(function () {
    const bar = document.querySelector(".bar");
    if (bar) {
        bar.style.width = "35%";
        bar.innerHTML = "35%";
    }
}, 1000);
function animateValue(id, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 20);

    const timer = setInterval(() => {
        current += increment;

        if (current >= end) {
            current = end;
            clearInterval(timer);
        }

        document.getElementById(id).innerHTML = Math.floor(current);
    }, 20);
}

animateValue("donors", 0, 185, 2000);
animateValue("raised", 0, 70000, 2500);
animateValue("volunteers", 0, 25, 2000);
window.onscroll = function () {

    const btn = document.getElementById("topBtn");

    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }

};

function topFunction(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

function toggleTheme(){

    document.body.classList.toggle("dark");

}
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("hide");
    }
});