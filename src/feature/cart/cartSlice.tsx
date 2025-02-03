import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Enhanced interfaces
interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
  maxQuantity?: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  isLoading: boolean;
  error: string | null;
}

// Get cart from localStorage
const loadCartFromStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const initialState: CartState = {
  items: loadCartFromStorage(),
  totalItems: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      
      // Update totals
      cartSlice.caseReducers.updateCartTotals(state);
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      cartSlice.caseReducers.updateCartTotals(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && (!item.maxQuantity || item.quantity < item.maxQuantity)) {
        item.quantity += 1;
        cartSlice.caseReducers.updateCartTotals(state);
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        cartSlice.caseReducers.updateCartTotals(state);
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity >= 0) {
        item.quantity = quantity;
        cartSlice.caseReducers.updateCartTotals(state);
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalAmount = 0;
      localStorage.removeItem('cart');
    },

    updateCartTotals: (state) => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
});

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotalItems = (state: { cart: CartState }) => state.cart.totalItems;
export const selectCartTotalAmount = (state: { cart: CartState }) => state.cart.totalAmount;
export const selectCartItemById = (id: string) => (state: { cart: CartState }) => 
  state.cart.items.find(item => item.id === id);

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;


// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface CartItem {
//   id: string;
//   quantity: number;
//   [key: string]: any; // For other product properties
// }

// interface CartState {
//   cart: CartItem[];
// }

// const initialState: CartState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
//       const item = action.payload;
//       const existingItem = state.cart.find((product) => product.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cart.push({ ...item, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((product) => product.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.cart = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
