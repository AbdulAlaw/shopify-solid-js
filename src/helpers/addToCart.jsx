import refreshCart from './refresh-cart'; 

function listenForAddToCartEvents() {
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

  addToCartForms.forEach((item) => {
    item.addEventListener('submit', function (event) {
      event.preventDefault();
      let formData = new FormData(this);
      console.log(JSON.stringify(formData));
      fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          console.log(response, "I was submitted");
          // After successfully adding to cart, trigger a refresh
          return refreshCart().then((items) => {
            console.log('Cart items:', items);
            // Handle the updated cart items here, if needed
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  });
}

export default listenForAddToCartEvents;
