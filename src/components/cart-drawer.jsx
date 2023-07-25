import { onCleanup, onMount } from "solid-js";

function CartDrawer({ isOpen }) {
  let drawerRef;
  const cartContent = document.querySelector('.cart-drawer').getAttribute('data-cart-heading')

  return (
    <Show when={isOpen()}>
      <section class="container" ref={drawerRef}>
        <div class="cart-drawer">
          <header>{cartContent}</header>
        </div>
      </section>
    </Show>
  );
}

export default CartDrawer;
