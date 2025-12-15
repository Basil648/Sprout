

import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Paper,
  Pagination,
} from "@mui/material";

import Carousel from "react-material-ui-carousel";

export default function CustomerDashboard() {
  const [products, setProducts] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const token = localStorage.getItem("token");

  // PAGINATION STATE
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchProducts();
    fetchMyOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      alert("Failed to load products");
    }
  };

  const fetchMyOrders = async () => {
    try {
      const res = await api.get("/orders/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyOrders(res.data);
    } catch (err) {
      alert("Failed to load orders");
    }
  };

  // 
  // Remove carousel imports if any:
  // import Carousel from "react-material-ui-carousel";

  const bannerImage = "/assets/prodbanner.jpg";

  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F2",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Poppins",
      }}
    >
      <Navbar />

      {/* MAIN CONTENT */}
      <Box sx={{ flex: 1, px: { xs: 2, md: 6 }, py: 4 }}>

        {/* TOP BUTTON */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <Button
            variant="contained"
            onClick={() => (window.location.href = "/profile")}
            sx={{
              backgroundColor: "#8FAF9F",
              "&:hover": { backgroundColor: "#7a998b" },
              borderRadius: "10px",
              px: 3,
              py: 1,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            ORDERS
          </Button>
        </Box>

        {/* PREMIUM SINGLE HERO BANNER */}
        <Box
          sx={{
            mb: 5,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={bannerImage}
            alt="Hero Banner"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>



        {/* PRODUCTS SECTION */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 800,
            color: "#0E1A2C",
            letterSpacing: 0.5,
          }}
        >
          PRODUCTS
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ px: { xs: 1, md: 2 } }}
        >
          {products
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((p) => (
              // <Grid
              //   item
              //   key={p._id}
              //   sx={{ display: "flex", justifyContent: "center" }}
              // >
              //   <Card
              //     elevation={8}
              //     sx={{
              //       width: 260, // FIXED WIDTH
              //       height: 380, // FIXED HEIGHT
              //       borderRadius: 0,
              //       display: "flex",
              //       flexDirection: "column",
              //       backgroundColor: "#FFFFFF",
              //       border: "1px solid #E5E7EB",
              //       transition: "0.25s ease",
              //       "&:hover": {
              //         transform: "translateY(-6px)",
              //         boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
              //       },
              //     }}
              //   >
              //     <CardMedia
              //       component="img"
              //       image={p.image}
              //       sx={{
              //         width: "100%",
              //         height: 180,
              //         objectFit: "cover",
              //         borderBottom: "3px solid #2D5BFF",
              //       }}
              //     />

              //     <CardContent sx={{ flexGrow: 1 }}>
              //       <Typography
              //         variant="h6"
              //         sx={{
              //           fontWeight: 900,
              //           fontSize: "17px",
              //           color: "#0E1A2C",
              //           textTransform: "uppercase",
              //           letterSpacing: 0.8,
              //           lineHeight: 1.2,
              //           mb: 1,
              //         }}
              //       >
              //         {p.name}
              //       </Typography>

              //       <Typography
              //         sx={{
              //           color: "#444",
              //           fontWeight: 700,
              //           fontSize: "15px",
              //         }}
              //       >
              //         ₹{p.price}
              //       </Typography>
              //     </CardContent>

              //     <CardActions sx={{ p: 2 }}>
              //       <Button
              //         fullWidth
              //         variant="contained"
              //         onClick={() =>
              //           (window.location.href = `/product/${p._id}`)
              //         }
              //         sx={{
              //           borderRadius: 0,
              //           backgroundColor: "#2D5BFF",
              //           py: 1.1,
              //           fontWeight: 800,
              //           fontSize: "14px",
              //           letterSpacing: 0.7,
              //           "&:hover": { backgroundColor: "#1F47CC" },
              //         }}
              //       >
              //         VIEW DETAILS
              //       </Button>
              //     </CardActions>
              //   </Card>
              // </Grid>
              <Grid item key={p._id} sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  elevation={3}
                  sx={{
                    width: 260,
                    height: 360,
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.2s ease",
                    "&:hover": {
                      borderColor: "#000",
                    },
                  }}
                >
                  {/* PRODUCT IMAGE */}
                  <CardMedia
                    component="img"
                    image={p.image}
                    sx={{
                      width: "100%",
                      height: 170,
                      objectFit: "cover",
                    }}
                  />

                  {/* PRODUCT CONTENT */}
                  <CardContent sx={{ flexGrow: 1, px: 2, py: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#1A1A1A",
                        textTransform: "none",
                        letterSpacing: 0.2,
                        lineHeight: 1.3,
                        mb: 1,
                      }}
                    >
                      {p.name}
                    </Typography>

                    {/* RATING PLACEHOLDER */}
                    <Box sx={{ display: "flex", gap: 0.7, mb: 1 }}>
                      {[...Array(5)].map((_, i) => (
                        <Box
                          key={i}
                          sx={{
                            width: 14,
                            height: 14,
                            backgroundColor: "#E3E3E3",
                            borderRadius: "2px",
                          }}
                        />
                      ))}
                    </Box>

                    <Typography
                      sx={{
                        color: "#333",
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    >
                      ₹{p.price}
                    </Typography>
                  </CardContent>

                  {/* BUTTON */}
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => (window.location.href = `/product/${p._id}`)}
                      sx={{
                        backgroundColor: "#000",
                        color: "#fff",
                        borderRadius: "4px",
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
                        "&:hover": {
                          color: "#000",
                        },
                        "&:hover::after": {
                          left: 0,
                        },
                        "& > span": {
                          position: "relative",
                          zIndex: 2,
                        },
                      }}
                    >
                      <span>VIEW DETAILS</span>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            ))}
        </Grid>

        {/* PAGINATION */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            siblingCount={0}
            boundaryCount={1}
            sx={{
              "& .MuiPaginationItem-root": {
                borderRadius: 0,
                fontWeight: 700,
              },
            }}
          />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
