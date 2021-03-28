let productsArray = JSON.parse(localStorage.getItem("productsInCart"));
if (productsArray == null) productsArray = new Array();

function renderOrder(){
  const products = $("#products");
  let sum = 0;

  productsArray.forEach(e => {
    let productRow =
    `<tr>
    <td>${e.title}</td>
    <td id="quantity">
    <button type="button" class="btn btn-primary decrease-btn" id="${e.id}">-</button>
    <span>${e.amount}</span>
    <button type="button" class="btn btn-primary increase-btn" id="${e.id}">+</button>
    </td>
    <td id="price"><span>${e.price}</span>$ 
    <button type="button" class="btn btn-primary float-right remove-btn" id="${e.id}">X</button>
    </td>
    </tr>`;
    
    products.append(productRow);
    sum += e.price * e.amount;
  });

  let totalRow = 
  `<tr>
  <td>Total:</td>
  <td></td>
  <td><span id="sum">${sum.toFixed(2)}</span>$</td>
  </tr>`;
  products.append(totalRow);

  addEventsToButtons();
}

function increaseQuantity() {
  productsArray.find(item => item.id == this.id).amount++;
  updateOrder(this, "+");
  localStorage.setItem("productsInCart", JSON.stringify(productsArray));
}

function decreaseQuantity() {
  productsArray.find(item => item.id == this.id).amount--;
  updateOrder(this, "-");
  localStorage.setItem("productsInCart", JSON.stringify(productsArray));
}

function removeProduct() {
  updateOrder(this, "x");
  localStorage.setItem("productsInCart", JSON.stringify(productsArray));
}

function addEventsToButtons() {
  $(".increase-btn").click(increaseQuantity);
  $(".decrease-btn").click(decreaseQuantity);
  $(".remove-btn").click(removeProduct);
}

function updateOrder(product, operator) {
  let quantity = Number($(product).parent().parent().children("#quantity").children("span").text());
  let text = $(product).parent().parent().children("#quantity").children("span");
  let price = Number($(product).parent().parent().children("#price").children("span").text());
  let sum = Number($("#sum").text());

  if(operator == "+") {
    sum += price;
    text.text(++quantity);
    quantity += 1;
  } else if(operator == "-") {
    sum -= price;
    text.text(--quantity);
    quantity -= 1;

    if(quantity == -1){
      productsArray = productsArray.filter(item => item.id != product.id);
      $(product).parent().parent().remove();
    }
  } else {
    sum -= (quantity * price);
    quantity -= quantity;
    productsArray = productsArray.filter(item => item.id != product.id);
    $(product).parent().parent().remove();
  }
 
  $("#sum").text(sum.toFixed(2));
}
