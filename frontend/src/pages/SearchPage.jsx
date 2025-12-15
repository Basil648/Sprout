// import { useState, useEffect } from "react";
// import api from "../api/axios";

// export default function SearchPage() {
//     const [keyword, setKeyword] = useState("");
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
//     const [star, setStar] = useState("");
//     const [products, setProducts] = useState([]);

//     const handleSearch = async () => {
//         try {
//             const params = {};

//             if (keyword) params.keyword = keyword;
//             if (minPrice) params.minPrice = minPrice;
//             if (maxPrice) params.maxPrice = maxPrice;
//             if (star) params.star = star;

//             const res = await api.get("/search/products", { params });
//             setProducts(res.data.products);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Search Products</h2>

//             {/* Search Input */}
//             <input
//                 type="text"
//                 placeholder="Search by product name..."
//                 value={keyword}
//                 onChange={(e) => setKeyword(e.target.value)}
//                 style={{ padding: "10px", width: "250px", marginRight: "10px" }}
//             />

//             {/* Price Filter */}
//             <input
//                 type="number"
//                 placeholder="Min Price"
//                 value={minPrice}
//                 onChange={(e) => setMinPrice(e.target.value)}
//                 style={{ padding: "10px", width: "120px", marginRight: "10px" }}
//             />

//             <input
//                 type="number"
//                 placeholder="Max Price"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(e.target.value)}
//                 style={{ padding: "10px", width: "120px", marginRight: "10px" }}
//             />

//             {/* Star Filter */}
//             <select
//                 value={star}
//                 onChange={(e) => setStar(e.target.value)}
//                 style={{ padding: "10px", marginRight: "10px" }}
//             >
//                 <option value="">Star Rating</option>
//                 <option value="2">2★ & above</option>
//                 <option value="3">3★ & above</option>
//                 <option value="4">4★ & above</option>
//                 <option value="5">5★ only</option>
//             </select>

//             <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
//                 Search
//             </button>

//             {/* Results */}
//             <div style={{ marginTop: "30px" }}>
//                 <h3>Results:</h3>
//                 {products.length === 0 && <p>No products found.</p>}

//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//                     {products.map((p) => (
//                         <div
//                             key={p._id}
//                             style={{
//                                 border: "1px solid #ddd",
//                                 padding: "10px",
//                                 borderRadius: "8px",
//                             }}
//                         >
//                             <img
//                                 src={p.image}
//                                 alt={p.name}
//                                 style={{ width: "100%", height: "160px", objectFit: "cover" }}
//                             />
//                             <h4>{p.name}</h4>
//                             <p>₹{p.price}</p>
//                             <p>Vendor Rating: {p.vendorRating}★</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// // }
// import { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   TextField,
//   Card,
//   CardMedia,
//   CardContent,
//   Grid,
//   Divider,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import api from "../api/axios";

// export default function SearchPage() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const [keyword, setKeyword] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [star, setStar] = useState("");
//   const [products, setProducts] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const params = {};

//       if (keyword) params.keyword = keyword;
//       if (minPrice) params.minPrice = minPrice;
//       if (maxPrice) params.maxPrice = maxPrice;
//       if (star) params.star = star;

//       const res = await api.get("/search/products", { params });
//       setProducts(res.data.products);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const resetFilters = () => {
//     setKeyword("");
//     setMinPrice("");
//     setMaxPrice("");
//     setStar("");
//     setProducts([]);
//   };

//   const navLinks = ["Home", "Products", "About", "Contact"];

//   return (
//     <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
//       {/* NAVBAR */}
//       <AppBar position="static" sx={{ background: "#1a1a1a" }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Sprout Space
//           </Typography>

//           <Box sx={{ display: { xs: "none", md: "block" } }}>
//             {navLinks.map((link) => (
//               <Button key={link} sx={{ color: "white", mx: 1 }}>
//                 {link}
//               </Button>
//             ))}
//           </Box>

//           <IconButton
//             sx={{ display: { xs: "block", md: "none" }, color: "white" }}
//             onClick={() => setDrawerOpen(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* MOBILE DRAWER */}
//       <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <List sx={{ width: 250 }}>
//           {navLinks.map((text) => (
//             <ListItem key={text}>
//               <ListItemButton>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       {/* MAIN CONTENT */}
//       <Box sx={{ p: 3 }}>
//         {/* Search Bar */}
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             justifyContent: "center",
//             mb: 4,
//             flexWrap: "wrap",
//           }}
//         >
//           <TextField
//             label="Search products..."
//             value={keyword}
//             onChange={(e) => setKeyword(e.target.value)}
//             sx={{ width: { xs: "100%", md: "40%" } }}
//             variant="outlined"
//           />

//           <Button
//             variant="contained"
//             onClick={handleSearch}
//             sx={{
//               background: "#1a1a1a",
//               px: 4,
//               "&:hover": { background: "#000" },
//             }}
//           >
//             Search
//           </Button>
//         </Box>

//         <Grid container spacing={3}>
//           {/* LEFT FILTERS */}
//           <Grid item xs={12} md={3}>
//             <Accordion defaultExpanded>
//               <AccordionSummary expandIcon={<ExpandMore />}>
//                 <Typography variant="h6">Filters</Typography>
//               </AccordionSummary>

//               <AccordionDetails>
//                 <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                   <TextField
//                     label="Min Price"
//                     type="number"
//                     value={minPrice}
//                     onChange={(e) => setMinPrice(e.target.value)}
//                   />

//                   <TextField
//                     label="Max Price"
//                     type="number"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                   />

//                   <FormControl fullWidth>
//                     <InputLabel>Star Rating</InputLabel>
//                     <Select
//                       value={star}
//                       label="Star Rating"
//                       onChange={(e) => setStar(e.target.value)}
//                     >
//                       <MenuItem value="">Any</MenuItem>
//                       <MenuItem value="2">2★ & above</MenuItem>
//                       <MenuItem value="3">3★ & above</MenuItem>
//                       <MenuItem value="4">4★ & above</MenuItem>
//                       <MenuItem value="5">5★ only</MenuItem>
//                     </Select>
//                   </FormControl>

//                   <Button
//                     variant="outlined"
//                     color="error"
//                     onClick={resetFilters}
//                   >
//                     Reset Filters
//                   </Button>
//                 </Box>
//               </AccordionDetails>
//             </Accordion>
//           </Grid>

//           {/* PRODUCT GRID */}
//           <Grid item xs={12} md={9}>
//             {products.length === 0 ? (
//               <Typography>No products found.</Typography>
//             ) : (
//               <Grid container spacing={3}>
//                 {products.map((p) => (
//                   <Grid item xs={12} sm={6} md={4} key={p._id}>
//                     <Card
//                       sx={{
//                         height: 320,
//                         display: "flex",
//                         flexDirection: "column",
//                         borderRadius: 3,
//                         boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//                       }}
//                     >
//                       <CardMedia
//                         component="img"
//                         height="160"
//                         image={p.image}
//                         alt={p.name}
//                         sx={{ objectFit: "cover" }}
//                       />

//                       <CardContent sx={{ flexGrow: 1 }}>
//                         <Typography variant="subtitle1" fontWeight={600}>
//                           {p.name}
//                         </Typography>
//                         <Typography variant="body2" sx={{ mt: 1 }}>
//                           ₹{p.price}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Vendor Rating: {p.vendorRating}★
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }


import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import api from "../api/axios";

export default function SearchPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [star, setStar] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const params = {};

      if (keyword) params.keyword = keyword;
      if (minPrice) params.minPrice = minPrice;
      if (maxPrice) params.maxPrice = maxPrice;
      if (star) params.star = star;

      const res = await api.get("/search/products", { params });
      setProducts(res.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  const resetFilters = () => {
    setKeyword("");
    setMinPrice("");
    setMaxPrice("");
    setStar("");
    setProducts([]);
  };

  const navLinks = ["Home", "Products", "About", "Contact"];

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <AppBar position="static" sx={{ background: "#1a1a1a" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sprout Space
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((link) => (
              <Button key={link} sx={{ color: "white", mx: 1 }}>
                {link}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((text) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* MAIN CONTENT */}
      <Box sx={{ p: 3 }}>
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="Search products..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            sx={{ width: { xs: "100%", md: "40%" } }}
            variant="outlined"
          />

          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              background: "#1a1a1a",
              px: 4,
              "&:hover": { background: "#000" },
            }}
          >
            Search
          </Button>
        </Box>

        <Grid container spacing={3}>
          {/* FILTERS LEFT */}
          <Grid item xs={12} md={3}>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Filters</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Min Price"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />

                  <TextField
                    label="Max Price"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />

                  <FormControl fullWidth>
                    <InputLabel>Star Rating</InputLabel>
                    <Select
                      value={star}
                      label="Star Rating"
                      onChange={(e) => setStar(e.target.value)}
                    >
                      <MenuItem value="">Any</MenuItem>
                      <MenuItem value="2">2★ & above</MenuItem>
                      <MenuItem value="3">3★ & above</MenuItem>
                      <MenuItem value="4">4★ & above</MenuItem>
                      <MenuItem value="5">5★ only</MenuItem>
                    </Select>
                  </FormControl>

                  <Button variant="outlined" color="error" onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* SEARCH RESULTS */}
          <Grid item xs={12} md={9}>
            {products.length === 0 ? (
              <Typography>No products found.</Typography>
            ) : (
              <Grid container spacing={3}>
                {products.map((p) => (
                  <Grid item xs={12} sm={6} md={4} key={p._id}>
                    {/* FIXED RECTANGULAR CARD */}
                    <Card
                      sx={{
                        width: "300px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        bgcolor: "#fff",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={p.image}
                        alt={p.name}
                        sx={{
                          height: 180,
                          width: "100%",
                          objectFit: "cover",
                          backgroundColor: "#eee",
                        }}
                      />

                      <CardContent
                        sx={{
                          flexGrow: 1,
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "15px",
                            color: "#111",
                            mb: 1,
                          }}
                        >
                          {p.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "15px",
                            color: "#333",
                          }}
                        >
                          ₹{p.price}
                        </Typography>
                      </CardContent>

                      <CardActions sx={{ px: 2, pb: 2 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={() =>
                            (window.location.href = `/product/${p._id}`)
                          }
                          sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "6px",
                            paddingY: "10px",
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            position: "relative",
                            overflow: "hidden",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: "-100%",
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#fff",
                              transition: "all 0.3s ease",
                              zIndex: 1,
                            },
                            "&:hover": { color: "#000" },
                            "&:hover::after": { left: 0 },
                            "& > span": { position: "relative", zIndex: 2 },
                          }}
                        >
                          <span>VIEW DETAILS</span>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
