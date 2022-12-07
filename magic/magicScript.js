let lifeTotal = 0
let lifeBox = document.getElementById("life-total")

function changeLifeTotal(value) {
    console.log(value)
    let lifeChange = value
    console.log(value)
    lifeTotal = lifeTotal + lifeChange
    lifeBox.innerText = lifeTotal
}
