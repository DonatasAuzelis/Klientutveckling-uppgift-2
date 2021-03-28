function fetchData() {
  const endPoint = "https://webacademy.se/fakestore/";
  const products = $("#row");

  fetch(endPoint)
    .then(resp => resp.json())
    .then(data => data.forEach(e => {
      let product =
      `<div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card-header text-center" style="font-size: 1.5rem" id="title">${e.title}</div>
            <div class="card-body">
              <div> <img  class="img-thumbnail" src="${e.image}" alt="Image of product"></div>
                <div> <p>${e.description} </p></div>
                <div> <p>Price: <span>${e.price.toFixed(2)}</span>$ 
              <button class="btn btn-primary buy-btn" id="${e.id}">Add to cart</Button></p>
            </div>
          </div>
      </div>`;
      products.append(product);
    }))
    .then(() => {$(".buy-btn").click(addToCart);})
    .catch(function (error) {
      console.log(error);
    });
  };

function addToCart() {
  const $id = this.id;
  const $this = $(this);
  let product = productsArray.find(item => item.id == $id);
  if (product == undefined){
    productsArray.push({
    "id": $id, 
    "amount": 1, 
    "title": $this.parent().parent().parent().parent().children("#title").text(), 
    "price": $this.parent().children("span").text()});
  }
  else {
    product.amount++;
  }
  localStorage.setItem("productsInCart", JSON.stringify(productsArray));
  window.location.href = "cart.html";
}