import React, { useState } from "react";
import { CartItem } from "./cartItem";
import { useCart } from "../Context/cartContext";
import axios from "axios";
import { API_BASE_URL } from "./utils";

export const ShoppingCart = ({ isCheckoutPage, setIsOpen }) => {
  const { cart, totalPrice, clearCart } = useCart();

  const [confirmation, setConfirmation] = useState("");

  const handleOrder = async () => {
    if (cart.length === 0) {
      // Om varukorgen är tom, avbryt funktionen och returnera ingenting
      return;
    }

    const order = {
      products: cart.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
    };

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/orders`,
        order,
        { headers: { Authorization: `Bearer ${localStorage.getItem("authtoken")}` } }
      );
      console.log(res);

      setConfirmation("Tack för din order! Vi återkommer så snart vi kan.");

      if (res.status === 201) {
        clearCart();
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.length < 1 && (
          <div className="empty-cart">
            <p> Din varukorg är tom! </p>
          </div>
        )}
        
        {cart.map((item) => (
          <CartItem key={`cart_${item.product._id}`} item={item}  />
        ))} 
      </div>

      <hr className="divider"  />

      <div className="total-section">
        <div className="total-price">
          <p>Totala Priset: {totalPrice} kr</p>
          <small>Inkl. moms</small>
        </div>
        <div className="checkout-buttons">
          {isCheckoutPage ? (
            <></>
          ) : (
            <button onClick={handleOrder} className="checkout-link">
              {" "}
              Lägg till order!{" "}
            </button>
          )}
        </div>
        {confirmation && <p>{confirmation}</p>}
      </div>
    </div>
  );
};
