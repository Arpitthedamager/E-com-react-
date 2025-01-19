import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      style={{
        top: 0,
        zIndex: 1100, 
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar className="flex justify-between items-center px-4">
        <Typography
          variant="h6"
          className={isScrolled ? "text-white" : "text-gray-800"}
        >
          EtawahCommerce
        </Typography>

        {isDesktop ? (
          <div className="flex gap-6">
            <a href="#home" className={isScrolled ? "text-white hover:no-underline" : "text-gray-600 hover:text-white"}>
              Home
            </a>
            <a href="#about" className={isScrolled ? "text-white hover:no-underline" : "text-gray-600 hover:text-white"}>
              About
            </a>
            <a href="#product" className={isScrolled ? "text-white hover:no-underline" : "text-gray-600 hover:text-white"}>
              Products
            </a>
            <a href="#contact" className={isScrolled ? "text-white hover:no-underline" : "text-gray-600 hover:text-white"}>
              Contact
            </a>
          </div>
        ) : (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon className={isScrolled ? "text-white" : "text-gray-800"} />
          </IconButton>
        )}

        <div className="flex items-center gap-4">
          <IconButton>
            <SearchIcon className={isScrolled ? "text-white" : "text-gray-800"} />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon onClick={() => setIsOpen(true)} className={isScrolled ? "text-white" : "text-gray-800"} />
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={handleCartClose}></div>
            )}

            <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-20`}>
              <div className="p-4 border-b">
                <h2 className="text-lg font-bold text-red-500">Your Cart</h2>
                <button onClick={handleCartClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">&#x2715;</button>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img src="https://via.placeholder.com/60" alt="NX-Speaker" className="w-16 h-16 rounded-md" />
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-black">NX-Speaker</h3>
                    <p className="text-red-500">$140.00 USD</p>
                  </div>
                  <input type="number" min="1" className="w-16 border rounded-md text-center" defaultValue={1} />
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-red-500">$140.00 USD</span>
                </div>
                <button className="bg-red-500 w-full text-white py-2 rounded-md hover:bg-red-600">
                  Continue to Checkout
                </button>
              </div>
            </div>
          </IconButton>
        </div>
      </Toolbar>

      <Menu anchorEl={anchorEl} open={!isDesktop && Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}><a href="#home" className="text-gray-800">Home</a></MenuItem>
        <MenuItem onClick={handleMenuClose}><a href="#about" className="text-gray-800">About</a></MenuItem>
        <MenuItem onClick={handleMenuClose}><a href="#products" className="text-gray-800">Products</a></MenuItem>
        <MenuItem onClick={handleMenuClose}><a href="#contact" className="text-gray-800">Contact</a></MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
