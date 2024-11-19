// Import the necessary functions and files
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import cartReducer

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Assign cartReducer to the cart slice of the state
    },
});

// Export the configured store
export default store;
