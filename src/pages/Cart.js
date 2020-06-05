import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"


function Cart() {
  const { cartItems, removeFromCart } = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
  const [caption, setCaption] = useState("Place Order")

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setCaption("Ordering...")
    setTimeout(() => {
      console.log("Order placed!")
      setCaption("Place Order")
      cartItems.map(item => item.id).map(id => removeFromCart(id))
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {
        cartItems.length > 0 ?
          <div className="order-button">
            <button onClick={placeOrder}>{caption}</button>
          </div> :
          <p>You have no items in your cart.</p>
      }
    </main>
  )
}

export default Cart
