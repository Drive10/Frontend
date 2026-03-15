import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder, createPayment } from "../services/paymentApi";

export default function Checkout() {
  const navigate = useNavigate();

  const startPayment = async () => {
    const order = await createOrder({
      amount: 499,
      currency: "INR",
    });

    const payment = await createPayment({
      orderId: order.data.orderId,
      method: "CARD",
    });

    navigate("/processing/" + payment.data.paymentId);
  };

  return (
    <div>
      <h2>Checkout</h2>

      <button onClick={startPayment}>Pay ₹499</button>
    </div>
  );
}
