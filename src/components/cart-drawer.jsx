import { createEffect, createSignal, Show } from "solid-js";
import CartDrawerItems from './cart-drawer-items';
import refreshCart  from '../helpers/refresh-cart';

function CartDrawer({ isOpen }) {
  const [cartItems, setCartItems] = createSignal([]);

  createEffect(() => {
    if (isOpen()) {
      refreshCart()
        .then(items => setCartItems(items))
        .catch(error => console.error('Error updating cart items:', error));
    }
  });
  
  const [cartItemsSignal, setCartItemsSignal] = createSignal(cartItems());

  createEffect(() => {
    setCartItemsSignal(cartItems());
  });

  return (
    <Show when={isOpen()}>
      <section class="container">
        <div class="cart-drawer">
          {cartItemsSignal().length > 0 ? (
            <CartDrawerItems key={cartItemsSignal().length} items={cartItemsSignal()} />
          ) : (
            <div>Cart is empty.</div>
          )}
        </div>
      </section>
    </Show>
  );
}

export default CartDrawer;
