//create array to get number from user to array
let allNumber = [];
//this function made for take number from input and take into array
function getNumbers() {
    //create parameter and take value from input syntax by method getElementById
    if (allNumber.length === 0) {
        alert('Please enter number to analyse');
    }
    let n = document.getElementById('getNumbers').value
    n = parseInt(n);
    //push n to allNumber array
    allNumber.push(n);
    updateUI();
}

function updateUI() {
    const tBodyEle = document.getElementById('tableBody');
    tBodyEle.innerHTML = "";
    for (let i = 0; i < allNumber.length; i++) {
        tBodyEle.innerHTML += `
        <tr>
        <td>${allNumber[i]}</td>
        <td><Button onclick="Delete(${i})">Del</Button></td></tr>`
    }
}

function Delete(indexOfArray) {
    allNumber.splice(indexOfArray, 1);
    updateUI();
}

function analyseNumbers() {
    if (allNumber.length === 0) {
        alert('Please enter number to analyse');
        return;
    }

    // sort array from lower to higher then set minimum as index 0 and maximum as last index 
    allNumber.sort((a, b) => a - b);
    let minimum = allNumber[0];
    let maximum = allNumber[allNumber.length - 1];
    console.log(allNumber);

    //calculate the sum using a for loop
    let sum = 0
    for (let i = 0; i < allNumber.length; i++) {
        sum += allNumber[i];
    }
    let avg = sum / allNumber.length
    showInnerHTML(minimum, maximum, sum, avg)
}

function showInnerHTML(min, max, sum, avg) {
    let sumEle = document.getElementById('sum');
    let minEle = document.getElementById('min');
    let maxEle = document.getElementById('max');
    let avgEle = document.getElementById('avg')
    sumEle.innerHTML = `<div>Sum : ${sum}</div>`
    minEle.innerHTML = `<div>Min : ${min}</div>`
    maxEle.innerHTML = `<div>Max : ${max}</div>`
    avgEle.innerHTML = `<div>Average : ${avg}</div>`
}