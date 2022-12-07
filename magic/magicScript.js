let lifeTotal = 0
let lifeBox = document.getElementById("life-total")

function changeLifeTotal(value) {
    let lifeChange = value
    lifeTotal = lifeTotal + lifeChange
    lifeBox.innerText = lifeTotal
}

function resetLifeTotal(value) {
    let lifeChange = value
    lifeTotal = lifeChange
    lifeBox.innerText = lifeTotal
}
