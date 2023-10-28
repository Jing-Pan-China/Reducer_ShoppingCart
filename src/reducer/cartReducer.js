const initialCartState = {
  cart: {
    items: [
      {
        id: 1,
        name: 'Chocolate',
        price: 1.99,
        quantity: 0
      },
      {
        id: 2,
        name: 'Poets of the Fall - Concert tickets',
        price: 35,
        quantity: 0
      },
      {
        id: 3,
        name: 'Sweater',
        price: 24.99,
        quantity: 0
      }
    ],
    total: 0,
  },
};

const cartReducer = (state = initialCartState, action) => {
  console.log("cart state now:${JSON.stringify(state)}")
  console.log('action:${JSON.stringify(action')

  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload.item;
      const existingItemIndex = state.cart.items.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.cart.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
        return {
          cart: {
            items: updatedItems,
            total: state.total + (newItem.price * 1),
          }
        }
      } else {
        return { 
          cart: {
            items: [...state.cart.items, newItem],
            total: state.total + (newItem.price * 1),
          }
        }
      }
    case "REMOVE_FROM_CART":
      const removedItem = action.payload.item;
      const removedItemIndex = state.cart.items.findIndex(item => item.id === removedItem.id);
      if (removedItemIndex !== -1) {
        const removedItemPrice = state.cart.items[removedItemIndex].price * state.cart.items[removedItemIndex].quantity;
        const updatedItems = state.cart.items.map((item, index) => {
          if (index === removedItemIndex) {
            return {
              ...item,
              quantity: 0
            }
          }
          return item
        })
        return {
          cart: {
            items: updatedItems,
            total: state.total - removedItemPrice,
          }
        }
      } else {
        return state;
      }
    case "CLEAR_CART":
      return initialCartState;
    default:
      return state;
  }
}

export default cartReducer;