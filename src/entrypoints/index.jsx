import { render } from 'solid-js/web';
import { createSignal, createEffect } from 'solid-js';
import HelloWorld from '../hello-world';
import TriggerCart from '../helpers/trigger-cart';
import CartDrawer from '../components/cart-drawer';
import registerSwiper from '../components/swiper-element';
import listenForAddTobagEvents from '../helpers/addToCart';

const [isCartOpen, setIsCartOpen] = createSignal(false);

render(() => (
  <TriggerCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
), document.getElementById('app-root'));

createEffect(() => {
  render(() => (
    <CartDrawer isOpen={isCartOpen} />
  ), document.getElementById('cart-drawer-root'));
});

function onPageLoad(){
	registerSwiper()
  listenForAddTobagEvents()
}
onPageLoad()