let lifeTotal = 0
const addValues = [1, 2, 5, 10]
const subtractValues = [-1, -2, -5, -10]
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

console.log("hi")
function addButtons(valueArray){
    let buttonEl = ""
    let modifier = ""
    if (valueArray[0] > 0) {
        method = "add"
        modifier = "+"
    } else {
        method = "subtract"
    }
    for (let i = 0; i < valueArray.length; i++) {

        buttonEl += `
        <button class="${method}" onclick="changeLifeTotal(${valueArray[i]})">${modifier}${valueArray[i]}</button>
        `
    }
    console.log(buttonEl)
}

addButtons(addValues)
addButtons(subtractValues)