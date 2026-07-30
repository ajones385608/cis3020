function calculateNumber() {
    let total = 0;

    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");
    let card3 = document.getElementById("card3");
    let card4 = document.getElementById("card4");
    let card5 = document.getElementById("card5");
    let card6 = document.getElementById("card6");
    let resultArea = document.getElementById("result");

    if(card1.checked) { total += 1; }
    if(card2.checked) { total += 2; }
    if(card3.checked) { total += 4; }
    if(card4.checked) { total += 8; }
    if(card5.checked) { total += 16; }
    if(card6.checked) { total += 32; }

    if (total === 0) {
        resultArea.innerText = "Select at least one card where your choosen number appears."
    } else {
        resultArea.innerText = "Your selected number is " + total + ".";

    }
}
document.getElementById("calc-btn").addEventListener("click", calculateNumber);