let total = 0;
let grandTotal = 0;
function handleClick(target){
    const cardName = (target.childNodes[3].childNodes[3].innerText);
    const calculateContainer = document.getElementById('show-items-name');
    const li = document.createElement('li');
    li.style.listStyleType = 'decimal';
    li.innerText = cardName;
    calculateContainer.appendChild(li);
    
    // get price element
    const price =  (target.childNodes[3].childNodes[5].innerText.split(' ')[0])
    total = parseFloat(total) + parseFloat(price);

    // total price calculate
    const sumOfTotal = parseFloat(total.toFixed(2))
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText =sumOfTotal.toFixed(2);
    
    // total calculation
    const totalElement = document.getElementById('total');
    totalElement.innerText =sumOfTotal.toFixed(2);

}
