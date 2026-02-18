import { useRef } from 'react';
import CartModal from './CartModal.jsx';
import { CartContext } from '../Store/Cart-Create-Context.jsx';
import { useContext } from 'react';
export default function Header({}) {
  const modal = useRef();
 
  const {item} = useContext(CartContext);

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (item.length > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({item.length})</button>
        </p>
      </header>
    </>
  );
}
