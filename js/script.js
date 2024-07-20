// //Get elements for product 1
const art1PlusBtn = document.getElementById('art1-plus');
const art1MinusBtn = document.getElementById('art1-moins');
const art1QtyInput = document. getElementById('art1-nombre');
// console. log(art1QtyInput)
const art1UnitPrice = document.getElementById('art1-unit');
const art1Total = document.getElementById('art1-total');
const art1RemoveBtn = document.getElementById('art1-remove');
const art1LikeBtn = document.getElementById('art1-like');

// //Get elements for product 2
const art2PlusBtn = document.getElementById('art2-plus');
const art2MinusBtn = document.getElementById('art2-moins');
const art2QtyInput = document.getElementById('art2-nombre');
const art2UnitPrice = document.getElementById('art2-unit');
const art2Total = document.getElementById('art2-total');
const art2RemoveBtn = document.getElementById('art2-remove');
const art2LikeBtn = document.getElementById('art2-like');


// Subtotal element
const subTotalElement = document.getElementById('sub-total');
 function updateTotal() {
 let subTotal = 0;

// Update total for product 1
if (document. getElementById('article1')) {
const art1Qty = parseInt(art1QtyInput.value, 10);
const art1Price = parseInt(art1UnitPrice. textContent, 10);
const art1TotalPrice = art1Qty * art1Price;
art1Total. textContent = art1TotalPrice;
subTotal += art1TotalPrice;
}
// Update total for product 2
if (document. getElementById('article2')) {
    const art2Qty = parseInt(art2QtyInput.value, 10);
    const art2Price = parseInt(art2UnitPrice.textContent, 10);
    const art2TotalPrice = art2Qty * art2Price;
    art2Total. textContent = art2TotalPrice;
    subTotal += art2TotalPrice;
    }



// Update subtotal
subTotalElement.textContent= subTotal;
}
// Add event listeners for product 1
art1PlusBtn.addEventListener('click', () => {
art1QtyInput.value = parseInt(art1QtyInput.value, 10) + 1;
updateTotal();
});
// Add event listeners for product 2
art2PlusBtn.addEventListener('click', () => {
    art2QtyInput.value = parseInt(art2QtyInput.value, 10) + 1;
    updateTotal();
    });
    


art1MinusBtn.addEventListener ('click', () => {
if (parseInt(art1QtyInput.value, 10) > 1)  {
art1QtyInput.value =parseInt(art1QtyInput .value, 10) - 1;
updateTotal();
}
});

art2MinusBtn.addEventListener('click', () => {
    if (parseInt(art2QtyInput.value, 10) > 1)  {
    art2QtyInput.value =parseInt(art2QtyInput .value, 10) - 1;
    updateTotal();
    }
    });


    art1RemoveBtn.addEventListener('click', () => {
        document.getElementById('article1').remove();
        updateTotal();

        });

        art2RemoveBtn.addEventListener('click', () => {
            document.getElementById('article2').remove();
            updateTotal();
            });

art1LikeBtn.addEventListener('click', () => {
art1LikeBtn.classList.toggle('liked');
});

art2LikeBtn.addEventListener('click', () => {
    art2LikeBtn.classList.toggle('liked');
    });

//Initial total calculation
updateTotal() ;
