function listenForAddTobagEvents() {
	const addToCartForms = document.querySelectorAll('form[action="/cart/add"]')

	addToCartForms.forEach((item) => {
    item.addEventListener('submit', function(event) {
			event.preventDefault()		
			let formData = new FormData(this);	
			console.log(JSON.stringify(formData))
			fetch(window.Shopify.routes.root + 'cart/add.js', {
				method: 'POST',
				body: formData
			})
			.then(response => {
        console.log(response, "i was submited")
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		})
  })

}

export default listenForAddTobagEvents
