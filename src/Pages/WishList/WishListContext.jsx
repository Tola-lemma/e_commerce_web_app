import { createContext, useContext, useState } from "react";

// Create the Wishlist context
const WishlistContext = createContext();

// Wishlist Provider
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Toggle a product in the wishlist (add if not exists, remove if exists)
  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      // Remove from wishlist if it exists
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.id !== product.id)
      );
    } else {
      // Add to wishlist if it does not exist
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the Wishlist context
export const useWishlist = () => useContext(WishlistContext);
