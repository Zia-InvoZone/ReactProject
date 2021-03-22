export const signIn = (userData: any) => {
  return {
    type: "SignIn",
    user: userData,
  };
};
export const signOut = () => {
  return {
    type: "SignOut",
  };
};

export const Addproduct = (product: any) => {
  return {
    type: "Add_To_Cart",
    payload: product,
  };
};

export const Removeproduct = (PId: number) => {
  return {
    type: "Remove_Cart_Item",
    payload: {
      ProductId: PId,
    },
  };
};

// export const toggleChk = (data: any) => {
//   return { type: "Toggle", ApiData: data };
// };
