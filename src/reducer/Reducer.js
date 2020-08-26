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
      return { state };
      // Logic for removing item from basket
      break;
    default:
      return state;
  }
};
export default reducer;
