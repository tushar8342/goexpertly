import React from "react";
import Layout from "./layout";
// import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import { MdClear } from "react-icons/md";
import CartItem from "./CartItem";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
          <div className="rounded-lg bg-white p-8 text-center shadow-xl">
            <h1 className="mb-4 text-4xl font-bold">Your cart is empty!</h1>
            <p className="text-gray-600">Add Course to it now.</p>
            <Link
              to="/"
              className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            >
              {" "}
              Go back to Home{" "}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <div>
      <Layout>
        <CartWrapper>
          <div className="container">
            <div className="cart-pg-title">
              <h3>Shopping Cart</h3>
            </div>
            <div className="cart-grid grid">
              {/* card grid left */}
              <div className="cart-grid-left">
                <div className="flex flex-wrap flex-between">
                  <div className="cart-count-info">
                    <span className="fw-7 fs-18">{total_items}</span> Course in
                    Cart
                  </div>
                  <button
                    type="button"
                    className="cart-clear-btn flex fs-15 fw-6 text"
                    onClick={() => clearCart()}
                  >
                    <MdClear className="text-pink" />
                    <span className="d-inline-block text-pink ml-2">
                      Clear All
                    </span>
                  </button>
                </div>

                <div className="cart-items-list grid">
                  {cartItems.map((cartItem) => {
                    return (
                      <CartItem key={cartItem.courseID} cartItem={cartItem} />
                    );
                  })}
                </div>
              </div>
              {/* end of grid left */}
              {/* cart grid right */}
              <div className="cart-grid-right">
                <div className="cart-total">
                  <span className="d-block fs-18 fw-6">Total:</span>
                  <div className="cart-total-value fw-8">
                    ${total_amount.toFixed(2)}
                  </div>
                  <button
                    type="button"
                    className="checkout-btn bg-purple text-white fw-6"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CartWrapper>
      </Layout>
    </div>
  );
}

// const NotFoundWrapper = styled.div`
//   padding: 30px 0;
//   font-weight: 600;
// `;

const CartWrapper = styled.div`
  padding: 30px 0;
  .card-pg-title {
    padding: 20px 0 6px 0;
  }
  .cart-grid {
    row-gap: 40px;
    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-left: 6px;
      }
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value {
      font-size: 34px;
    }
    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-dark);
      }
    }
    .cart-total {
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }
`;

export default Cart;
