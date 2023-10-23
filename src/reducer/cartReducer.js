const initialCartState={
    cart:{
        items:[],
        total:0,
    },
};


const cartReducer=(state=initialCartState, action)=>{
    console.log("cart state now:${JSON.stringify(state)}")
    console.log('action:${JSON.stringify(action')

    switch(action.type){
        case "ADD_TO_CART":
            const newItem=action.payload.item;
            const existingItemIndex=state.items.findIndex(item=>item.id===newItem.id);
            if(existingItemIndex!==-1){
                const updatedItems=[...state.items];
                updatedItems[existingItemIndex].quantity+=newItem.quantity;
                return{
                    items:updatedItems,
                    total:state.total+(newItem.price*newItem.quantity),

                };

            } else{
                return{
                    items:[...state.items, newItem],
                    total:state.total+(newItem.price*newItem.quantity),
                };
            }

        case "REMOVE_FROM_CART":
            const removedItem=action.payload.item;
            const removedItemIndex=state.items.findIndex(item=>item.id===removedItem.id);
            if(removedItemIndex!==-1){
                const removedItemPrice=state.items[removedItemIndex].price*state.items[removedItemIndex].quantity;
                return{
                    items:state.items.filter(item=>item.id!=removedItem.id),
                    total:state.total-removedItemPrice,
                };
            
             } else{
                return state;
             }

        case "CLEAR_CART":
                return initialCartState;
            default:
                return state;

       
    }

}

export default cartReducer;