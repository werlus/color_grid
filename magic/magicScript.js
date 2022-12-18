
// Life Button Values
const addValues = [1, 2, 5, 10]
const subtractValues = [-1, -2, -5, -10]

// Page Elements
let lifeBoxEl = document.getElementById("life-total")
let addLifeButtonsEl = document.getElementById("add-life")
let subtractLifeButtonsEl = document.getElementById("subtract-life")

// Local Storage
const retrievedLifeTotal = localStorage.getItem("savedLifeTotalValue")
const savedLifeTotal = JSON.parse(retrievedLifeTotal)

// Life Total 0 or Pull LT from Storage
let lifeTotal = 0
if(savedLifeTotal){
    lifeTotal = savedLifeTotal
} 
lifeBoxEl.innerText = lifeTotal

// Functions
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
    return buttonEl
}

addLifeButtonsEl.innerHTML = addButtons(addValues)
subtractLifeButtonsEl.innerHTML = addButtons(subtractValues)

function changeLifeTotal(value) {
    let lifeChange = value
    lifeTotal = lifeTotal + lifeChange
    let lifeTotalSave = JSON.stringify(lifeTotal)
    localStorage.clear()
    localStorage.setItem("savedLifeTotalValue", lifeTotalSave)
    lifeBoxEl.innerText = lifeTotal
}

function resetLifeTotal(value) {
    let lifeChange = value
    lifeTotal = lifeChange
    let lifeTotalSave = JSON.stringify(lifeTotal)
    localStorage.clear()
    localStorage.setItem("savedLifeTotalValue", lifeTotalSave)
    lifeBoxEl.innerText = lifeTotal
}



