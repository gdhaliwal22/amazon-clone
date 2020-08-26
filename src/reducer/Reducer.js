export const initialState = {
  basket: [
    {
      id: "1",
      title: "Nintendo Switch Console [Neon Blue/Red]",
      price: "448.00",
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51vKlrdRKYL._AC_UL480_SR480,480_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      // Logic for adding item to basket
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart`
        );
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};
export default reducer;
