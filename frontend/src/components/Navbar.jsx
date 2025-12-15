// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Typography,
//   Divider,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// export default function Navbar() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [logoutMenu, setLogoutMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleLogoutClick = (e) => setLogoutMenu(e.currentTarget);
//   const handleLogoutClose = () => setLogoutMenu(null);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   const isActive = (path) => location.pathname === path;

//   const navItems = [
//     { name: "HOME", path: "/" },
//     { name: "PRODUCTS", path: "/customer" },
//     { name: "ABOUT", path: "/about" },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           background: "#ffffff",
//           borderBottom: "1px solid #e5e5e5",
//           color: "#111",
//           px: 2,
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
//           {/* MOBILE MENU BUTTON */}
//           <IconButton
//             sx={{ display: { xs: "flex", md: "none" } }}
//             onClick={() => setMobileOpen(true)}
//           >
//             <MenuIcon sx={{ fontSize: 28 }} />
//           </IconButton>

//           {/* LEFT SPACER (desktop only) */}
//           <Box sx={{ width: 150, display: { xs: "none", md: "block" } }} />

//           {/* CENTER NAV LINKS (desktop only) */}
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               gap: 5,
//               alignItems: "center",
//             }}
//           >
//             {navItems.map((item) => (
//               <Box key={item.path} sx={{ textAlign: "center", position: "relative" }}>
//                 <Button
//                   component={Link}
//                   to={item.path}
//                   disableRipple
//                   sx={{
//                     fontWeight: 600,
//                     letterSpacing: 1,
//                     color: isActive(item.path) ? "#1E88E5" : "#333",
//                     "&:hover": { background: "transparent", color: "#1E88E5" },
//                   }}
//                 >
//                   {item.name}
//                 </Button>

//                 {isActive(item.path) && (
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       bottom: -4,
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                       width: "60%",
//                       height: "3px",
//                       borderRadius: 2,
//                       backgroundColor: "#1E88E5",
//                     }}
//                   />
//                 )}
//               </Box>
//             ))}
//           </Box>

//           {/* RIGHT SECTION (cart + logout + future logo space) */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 2,
//               width: 150,
//               justifyContent: "flex-end",
//             }}
//           >
//             {/* Cart */}
//             <IconButton onClick={() => navigate("/cart")}>
//               <ShoppingCartIcon sx={{ fontSize: 26, color: "#333" }} />
//             </IconButton>

//             {/* Logout Menu */}
//             <IconButton onClick={handleLogoutClick}>
//               <PowerSettingsNewIcon sx={{ fontSize: 26, color: "#d32f2f" }} />
//             </IconButton>

//             <Menu
//               anchorEl={logoutMenu}
//               open={Boolean(logoutMenu)}
//               onClose={handleLogoutClose}
//               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//               transformOrigin={{ horizontal: "right", vertical: "top" }}
//             >
//               <Typography sx={{ px: 2, pt: 1, fontSize: 14 }}>
//                 Account Options
//               </Typography>
//               <Divider />
//               <MenuItem
//                 onClick={handleLogout}
//                 sx={{ color: "#d32f2f", fontWeight: 600 }}
//               >
//                 Logout
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* MOBILE DRAWER MENU */}
//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         sx={{ display: { xs: "block", md: "none" } }}
//       >
//         <Box sx={{ width: 250, p: 2 }}>
//           <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
//             Menu
//           </Typography>

//           <List>
//             {navItems.map((item) => (
//               <ListItem key={item.path} disablePadding>
//                 <ListItemButton
//                   component={Link}
//                   to={item.path}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   <ListItemText
//                     primary={item.name}
//                     primaryTypographyProps={{
//                       fontWeight: isActive(item.path) ? 700 : 500,
//                       color: isActive(item.path) ? "#1E88E5" : "#333",
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>

//           <Divider sx={{ my: 2 }} />

//           <Button
//             fullWidth
//             variant="contained"
//             color="error"
//             onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [logoutMenu, setLogoutMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleLogoutClick = (e) => setLogoutMenu(e.currentTarget);
  const handleLogoutClose = () => setLogoutMenu(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/customer" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // ⭐ LOAD CART COUNT ANY TIME ROUTE CHANGES
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, [location]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          color: "#111",
          px: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>

          {/* LOGO (DESKTOP + MOBILE) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img
              src="/assets/logo.jpg"
              alt="Logo"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* CENTER NAV LINKS (DESKTOP ONLY) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 5,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Box key={item.path} sx={{ textAlign: "center", position: "relative" }}>
                <Button
                  component={Link}
                  to={item.path}
                  disableRipple
                  sx={{
                    fontWeight: 600,
                    letterSpacing: 1,
                    color: isActive(item.path) ? "#1E88E5" : "#333",
                    "&:hover": { background: "transparent", color: "#1E88E5" },
                  }}
                >
                  {item.name}
                </Button>

                {isActive(item.path) && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: "3px",
                      borderRadius: 2,
                      backgroundColor: "#1E88E5",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          {/* RIGHT SIDE: CART + LOGOUT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* CART WITH BADGE */}
            <IconButton onClick={() => navigate("/cart")}>
              <Badge
                badgeContent={cartCount}
                color="error"
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "12px",
                    fontWeight: "700",
                    minWidth: "20px",
                    height: "20px",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ fontSize: 28, color: "#333" }} />
              </Badge>
            </IconButton>

            {/* LOGOUT MENU */}
            <IconButton onClick={handleLogoutClick}>
              <PowerSettingsNewIcon sx={{ fontSize: 26, color: "#d32f2f" }} />
            </IconButton>

            <Menu
              anchorEl={logoutMenu}
              open={Boolean(logoutMenu)}
              onClose={handleLogoutClose}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <Typography sx={{ px: 2, pt: 1, fontSize: 14 }}>
                Account Options
              </Typography>
              <Divider />
              <MenuItem
                onClick={handleLogout}
                sx={{ color: "#d32f2f", fontWeight: 600 }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER MENU */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Menu
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: isActive(item.path) ? 700 : 500,
                      color: isActive(item.path) ? "#1E88E5" : "#333",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
