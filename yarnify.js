
// Add list 
function addItem() {
    const table = document.getElementById('billingTable');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="number" class="serialNumber" placeholder="S No."></td>
                    <td><input type="text" class="productName" placeholder="Product Name"></td>
                    <td><input type="number" class="productQuantity" placeholder="Quantity"></td>
                    <td><input type="number" class="productPrice" placeholder="Product Price"></td>
                    <td class="productTotal">0</td>
    `;

    table.appendChild(newRow);
}

// Print Total
const total=document.getElementById("printTotal");
function calculateTotal() {
    const prices = document.querySelectorAll('.productPrice');
    const quantities = document.querySelectorAll('.productQuantity');
    const totals = document.querySelectorAll('.productTotal');
    

    let grandTotal = 0;

    prices.forEach((priceInput, index) => {
        const price = +parseFloat(priceInput.value) || 0;
        const quantity = parseInt(quantities[index].value) || 0;
        const total = price * quantity;

        totals[index].textContent = "Rs "+total.toFixed(2);
        grandTotal += total;
    });
    document.getElementById('grandTotal').textContent = grandTotal.toFixed(2);
    document.getElementById('billTotal').innerText = 'Rs '+ grandTotal.toFixed(2);
    let a =document.getElementById('payableAmount').textContent = grandTotal.toFixed(2); // Update payable amount
 }


// Function to apply discount
function applyDiscount() {
    const grandTotal = parseFloat(document.getElementById('grandTotal').textContent) || 0;
    const discount = parseFloat(document.getElementById('discount').value) || 0;
    // For Percentage
    // if (discount < 0 || discount > 100) {
    //     alert('Please enter a valid discount percentage (0-100).');
    //     return;
    // }
    // const discountedAmount = grandTotal - (grandTotal * discount / 100);
    const discountedAmount = grandTotal - discount;
    document.getElementById('payableAmount').textContent = discountedAmount.toFixed(2);
}

// Download Function

function downlad(){
    window.print();
}

// Backgroung change function

function purple(){
    document.body.style.backgroundColor =  '#c0b6fd';
}
































// function addItem(){
//     let itemName = document.getElementById("productName").value;
//     let itemQuantity = document.getElementById("productQuantity").value;
//     let itemPrice = document.getElementById("productPrice").value;
//     if (itemName && itemPrice && itemQuantity) {
//         const item = {
//             name: itemName,
//             price: parseFloat(itemPrice),
//             quantity: parseInt(itemQuantity)
//         };

//         items.push(item);

//         // renderItems();
        


//         document.getElementById("productName").value = "";
//         document.getElementById("productQuantity").value = "";
//         document.getElementById("productPrice").value = "";
//     }
// }
// console.log(items[0])