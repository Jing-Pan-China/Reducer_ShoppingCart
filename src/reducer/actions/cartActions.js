// ./reducers/actions/cartActions.js

// 添加商品到购物车的动作创建器
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      item
    }
  };
};

// 从购物车中移除商品的动作创建器
export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      itemId

    }
  };
};

// cartActions.js

// 清空购物车的动作创建器
export const clearCart = () => {
  return {
    type: "CLEAR_CART"
  };
};

