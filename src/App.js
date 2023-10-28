import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./reducer/actions/cartActions"

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("")

  const filteredItems = cartItems.cart.items.filter(item => {
    return item.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const addToCartHandler = (item) => {
    console.log('Adding to cart:', item);
    dispatch(addToCart(item));
  }

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  }

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search items"
      />
      {filteredItems.map(item => {
        console.log('Mapping item:', item);
        return (
          <div key={item.id}>
            <div>
              {item.name}-Price:${item.price}-Quantity:{item.quantity}
            </div>
            <div>
              <button onClick={() => addToCartHandler(item)}>Add</button>
              <button onClick={() => removeFromCartHandler(item)}>Remove from Cart</button>
            </div>
          </div>
        );
      })}

      <button onClick={clearCartHandler}>Clear Cart</button>
    </div>
  );
}

export default ShoppingCart;