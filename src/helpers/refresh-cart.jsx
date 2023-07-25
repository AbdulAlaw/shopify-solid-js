async function refreshCart() {
  try {
    const response = await fetch('/cart.js');
    if (!response.ok) {
      throw new Error('Failed to fetch cart items.');
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return [];
  }
}

export default refreshCart; 

