import {createContext, useEffect, useState} from 'react';

//ADD TO CART FUNCTION ----------------------
const addCartItem = (cartItems, productToAdd) => {
   const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
   if(existingCartItem) {
       return cartItems.map((cartItem) => cartItem.id === productToAdd.id
       ?
       {...cartItem, quantity: cartItem.quantity + 1}
       :
       cartItem
       )
   }
   return [...cartItems, {...productToAdd, quantity: 1}];
}

//-------------------------------------------

//REMOVE FROM CART FUNCTION ---------------------
const removeCartItem = (cartItems, cartItemToRemove) => {
    
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
        ? 
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        )
}

//-------------------------------------------

//CLEAR ITEM FROM CART FUNCTION --------------------
const clearCartItem = (cartItems, cartItemToClear) => 
cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


//--------------------------------------------------


//CART OPEN/CLOSED --------------------------
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    remoteItemFromCart: () => {},
})
//-------------------------------------------


export const CartProvider = ({children}) => {
//USE STATES-------------------------------------------- 
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
//------------------------------------------------------
//CART COUNT BUBBLE-----------------------

useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
}, [cartItems])

//----------------------------------------

//CART TOTAL ON CHECKOUT-------------------
useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartTotal);
}, [cartItems])
//-----------------------------------------

//ADD ITEM TO CART-------------------------
const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
}
//----------------------------------------

//REMOVE ITEM FROM CART----------------------
const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
}

//--------------------------------------------

//CLEAR ITEM FROM CART---------------------
const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
}
//-------------------------------------------


//VALUES-----------------------------
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        clearItemFromCart,
        cartCount,
        cartTotal,
        removeItemFromCart,
    }
//-------------------------------------


return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )

}