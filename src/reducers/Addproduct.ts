const initialState = { cart: [] };
const Addproduct = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { cart } = state;
  switch (action.type) {
    case "Add_To_Cart":
      return { ...state, cart: [...cart, action.payload] };
    case "Remove_Cart_Item":
      return {
        ...state,
        cart: cart.filter((item: any) => item.id !== action.payload.ProductId),
      };
    default:
      return state;
  }
};
export default Addproduct;
