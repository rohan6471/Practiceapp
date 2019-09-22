function calculate() {
    const total = Number(document.getElementById("total").value)
    const rate = Number(document.getElementById("rate").value)

    const tip = total * (rate / 100)
    const tax = total * (5.5/100) 
    const grand_total = total + tip + tax

    document.getElementById("tip").innerHTML = tip
    document.getElementById("tax").innerHTML = tax
    document.getElementById("grand-total").innerHTML = grand_total
}

document.querySelector('#calculate').addEventListener('click', calculate)