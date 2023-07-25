
function TriggerCart({ isCartOpen, setIsCartOpen }) {

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen());
    console.log('Cart status:', isCartOpen());
  };

  return (
    <section>
      <a href="#" onClick={toggleCart}>Trigger Cart</a>
    </section>
  );
}
export default TriggerCart;


