

import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  useMediaQuery
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "customer") navigate("/customer");
      if (res.data.user.role === "vendor") navigate("/vendor");
      if (res.data.user.role === "admin") navigate("/admin");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: "linear-gradient(to bottom right, #EFE6DB, #D9C9B4)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* FLOATING PREMIUM SHAPES */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "#C8A27A",
          opacity: 0.25,
          filter: "blur(120px)",
          borderRadius: "50%",
          top: "-10%",
          left: "-10%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          background: "#A67C52",
          opacity: 0.2,
          filter: "blur(140px)",
          borderRadius: "50%",
          bottom: "-15%",
          right: "-10%",
        }}
      />

      {/* LEFT SIDE IMAGE */}
      {!isMobile && (
        <Box
          sx={{
            width: { md: "50%", lg: "55%" },
            backgroundImage: "url('/assets/caro1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(80%)",
          }}
        />
      )}

      {/* RIGHT LOGIN SECTION */}
      <Box
        sx={{
          width: isMobile ? "100%" : { md: "50%", lg: "45%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, sm: 4, md: 6 },
        }}
      >
        {/* GLASS CARD */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 380,
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(12px)",
            borderRadius: "18px",
            boxShadow: "0 25px 55px rgba(0,0,0,0.18)",
            p: { xs: 3, md: 4 },
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              textAlign: "center",
              mb: 2,
              color: "#3C2F2F",
              letterSpacing: 1,
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              mb: 4,
              color: "#6D625F",
              fontSize: "0.95rem",
            }}
          >
            Log in to continue your journey with Sprout Space
          </Typography>

          {/* FORM */}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.7)",
                },
              }}
            />

            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              onChange={handleChange}
              required
              sx={{
                mb: 1.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.7)",
                },
              }}
            />

            {/* FORGOT PASSWORD LINK */}
            <Typography
              sx={{
                textAlign: "right",
                fontSize: "0.85rem",
                color: "#A67C52",
                fontWeight: 700,
                cursor: "pointer",
                mb: 3,
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Typography>

            {/* LOGIN BUTTON */}
            <Button
              type="submit"
              fullWidth
              sx={{
                py: 1.4,
                fontWeight: 800,
                letterSpacing: 1,
                borderRadius: "10px",
                backgroundColor: "#C8A27A",
                color: "#3C2F2F",
                transition: "0.3s ease",
                "&:hover": {
                  backgroundColor: "#A67C52",
                  transform: "translateY(-2px)",
                },
              }}
            >
              LOGIN
            </Button>
          </form>

          {/* REGISTER LINK */}
          <Typography
            sx={{
              mt: 3,
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#6D625F",
            }}
          >
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              style={{
                cursor: "pointer",
                color: "#A67C52",
                fontWeight: "700",
              }}
            >
              Register
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
