let products = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1000}
];

let container = document.getElementById("products");

products.forEach((item, index) => {
  container.innerHTML += `
    <div class="product">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
  `;
});

let cart = [];

function addToCart(index) {
  cart.push(products[index]);
  alert("Added to cart");
}

function viewCart() {
  let items = cart.map(item => item.name).join(", ");
  alert("Cart: " + items);
}