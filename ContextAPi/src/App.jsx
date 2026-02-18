import { useState } from 'react';
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import { CartContext } from './Store/Cart-Create-Context.jsx';
function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }
  const contextval ={
    item:shoppingCart.items,
    additemcontext :handleAddItemToCart,
    updateitemcontext :handleUpdateCartItemQuantity
  }

  return (
    <CartContext.Provider value={contextval}>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}  />
          </li>
        ))}
        </Shop>
    </CartContext.Provider>
  );
}

export default App;


// in react we also have an method called 
// useredux this usereduc method would return us an array of exactly two elements on it
// just like usestate 
// then this first one is state , secound one is dispather 
// and useredux would demand an function 
// in which that state and dispatcher would be passed 
// and to use this dispather we can write function give values 
// that we needed 

// now the main question is we have to add tasks in that webpage 
// to add the task we would create a new


// byusing the createcontext and usecontext we can pass data in any component without 
// prop drilling 
// okay lets give a chance to tasks 