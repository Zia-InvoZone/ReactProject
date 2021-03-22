import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Removeproduct } from "./actions";

const Cart = () => {
  const products = useSelector((state: any) => state.Addedproducts);
  const dispatch = useDispatch();

  return (
    <div className="pt-40 max-w-screen-lg m-auto">
      <div className="text-lg font-bold">Cart page</div>
      {products.cart.length === 0 && (
        <div className="text-center m-10">Cart is empty.</div>
      )}
      {products.cart.map((product: any) => (
        <div className="overflow-hidden block  mb-5 mt-10 shadow-md p-5">
          <div className="w-1/6 float-left border mr-10">
            <img src={product.imagelink} alt={product.imagealt} />
          </div>
          <div className="float-left text-lg font-bold text-left">
            <div className="">{product.name}</div>
            <div className="">{product.price}</div>
          </div>
          <button
            type="submit"
            onClick={() => dispatch(Removeproduct(product.id))}
            className="bg-black text-white p-2 float-right"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
