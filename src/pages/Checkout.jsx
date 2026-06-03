import { useCart } from "../context/CartContext";

export default function Checkout() {
  return (
    <div className="page">
      <h1 className="page-title">Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-items">
          <h2 className="checkout-section-title">Order Summary </h2>
        </div>
      </div>
    </div>
  );
}
