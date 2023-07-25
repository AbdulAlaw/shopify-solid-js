function CartDrawerItems({ items }) {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))
      ) : (
        <li>Cart is empty.</li>
      )}
    </ul>
  );
}

export default CartDrawerItems;
