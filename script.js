


Window.location.href = "../home.html";








function applyAlert(){
    alert("✅ Application Submitted Successfully!");
}


function apply(){
    alert("Applied Successfully! 🎉");
}







// add cart
let total = 0;

function addToCart(name, price){
    let cartItems = document.getElementById("cartItems");
    let li = document.createElement("li");
    li.textContent = name + " - ₹" + price;
    cartItems.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function checkout(){
    if(total === 0){
        alert("Your cart is empty!");
    } else {
        alert("Thank you for booking! Total Amount: ₹" + total);
        location.reload();
    }
}