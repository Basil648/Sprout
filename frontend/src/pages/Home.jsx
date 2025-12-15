import AOS from "aos";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";

import AgricultureIcon from "@mui/icons-material/Agriculture";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SpaIcon from "@mui/icons-material/Spa";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleStart = () => {
    if (!user) return (window.location.href = "/login");
    if (user.role === "customer") return (window.location.href = "/customer");
    if (user.role === "vendor") return (window.location.href = "/vendor");
    if (user.role === "admin") return (window.location.href = "/admin");
  };

  const slides = [
    { img: "/assets/caro1.jpg", title: "Sprout Space", subtitle: "Direct produce from farmers to your home." },
    { img: "/assets/caro2.jpg", title: "Sprout Space", subtitle: "Sustainable farming for a better tomorrow." },
    { img: "/assets/caro3.jpg", title: "Sprout Space", subtitle: "Good food starts with the right people." },
  ];

  return (
    <Box sx={{ backgroundColor: "#F5EFE7" }}>

      {/* HERO SECTION */}
      <Box sx={{ height: "75vh", overflow: "hidden" }}>
        <Carousel interval={4000} indicators={false} swipe animation="fade">
          {slides.map((s, i) => (
            <Paper
              key={i}
              sx={{
                height: "75vh",
                position: "relative",
                borderRadius: 0,
                overflow: "hidden",
              }}
              elevation={0}
            >
              <img
                src={s.img}
                alt={s.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(55%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  textAlign: "center",
                  px: 2,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 900, textTransform: "uppercase", mb: 1 }}
                  data-aos="fade-up"
                >
                  {s.title}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ maxWidth: 700, opacity: 0.85, mb: 3 }}
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  {s.subtitle}
                </Typography>

                <Button
                  onClick={handleStart}
                  sx={{
                    px: 4,
                    py: 1.3,
                    borderRadius: 0,
                    backgroundColor: "#C8A27A",
                    color: "#3C2F2F",
                    fontWeight: 700,
                    letterSpacing: 1,
                    "&:hover": { backgroundColor: "#A67C52" },
                  }}
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  GET STARTED
                </Button>
              </Box>
            </Paper>
          ))}
        </Carousel>
      </Box>

      {/* WHAT WE OFFER */}
      <Box
        sx={{
          py: 10,
          px: { xs: 3, md: 10 },
          textAlign: "center",
          background: "linear-gradient(to bottom, #F5EFE7, #EFE6DB)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mb: 6,
            color: "#3C2F2F",
            letterSpacing: 1,
          }}
        >
          WHAT WE OFFER
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {[
            {
              icon: <AgricultureIcon sx={{ fontSize: 50 }} />,
              title: "Farm Fresh Daily",
              text: "Direct produce from ethical farmers.",
            },
            {
              icon: <LocalFloristIcon sx={{ fontSize: 50 }} />,
              title: "Chemical-Free",
              text: "Pure organic crops grown naturally.",
            },
            {
              icon: <HandshakeIcon sx={{ fontSize: 50 }} />,
              title: "Fair Trade",
              text: "Supporting farmer families & communities.",
            },

          ].map((f, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                data-aos="fade-up"
                data-aos-delay={i * 120}
                sx={{
                  p: 4,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0D6CC",
                  height: "100%",
                  borderRadius: 0,
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box sx={{ color: "#A67C52", mb: 2 }}>{f.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: "#3C2F2F" }}>
                  {f.title}
                </Typography>
                <Typography sx={{ color: "#6D625F" }}>{f.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* PARALLAX SECTION */}
      <Box
        sx={{
          height: "55vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506765515384-028b60a970df')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            textAlign: "center",
            color: "#FFFFFF",
            textShadow: "0 4px 25px rgba(0,0,0,0.5)",
          }}
          data-aos="fade-up"
        >
          NATURE MATTERS —
          <br />
          SO WE FARM WITH RESPECT.
        </Typography>
      </Box>

      {/* HOW IT WORKS */}
      <Box sx={{ py: 10, px: { xs: 3, md: 10 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 900, textAlign: "center", mb: 6, color: "#3C2F2F" }}
        >
          HOW IT WORKS
        </Typography>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {[
            {
              num: "01",
              title: "Farmers Harvest",
              text: "Local farmers prepare the freshest seasonal produce.",
            },
            {
              num: "02",
              title: "We Curate Quality",
              text: "We sort, check and ensure premium organic grade.",
            },
            {
              num: "03",
              title: "You Get It Fresh",
              text: "Delivered to your doorstep — fast, clean, ethical.",
            },
          ].map((step, i) => (
            <Grid
              item
              xs={12}
              md={4}
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ maxWidth: 300 }} data-aos="fade-up" data-aos-delay={i * 150}>
                <Typography
                  sx={{
                    fontSize: "40px",
                    color: "#C8A27A",
                    fontWeight: 900,
                    mb: 1,
                  }}
                >
                  {step.num}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    color: "#2B2727",
                  }}
                >
                  {step.title}
                </Typography>

                <Typography sx={{ color: "#6D625F", lineHeight: 1.7 }}>
                  {step.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* PARALLAX STRIP */}
      <Box
        sx={{
          height: "45vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498654200943-1088dd4438ae')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          px: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            maxWidth: 800,
            textAlign: "center",
            textShadow: "0 4px 25px rgba(0,0,0,0.5)",
          }}
          data-aos="zoom-in"
        >
          “A HEALTHY COMMUNITY STARTS WITH HEALTHY SOIL.”
        </Typography>
      </Box>

      {/* TESTIMONIALS */}
      <Box sx={{ py: 10, backgroundColor: "#E8E0D7", px: { xs: 3, md: 10 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 900, mb: 6, color: "#3C2F2F" }}
        >
          WHAT OUR CLIENTS SAY
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {[
            { text: "Amazing produce quality and super fresh!", name: "Priya" },
            { text: "A beautiful initiative empowering farmers.", name: "Arjun" },
            { text: "Affordable prices and ethical sourcing!", name: "Meera" },
          ].map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                data-aos="zoom-in"
                sx={{
                  backgroundColor: "#fff",
                  p: 4,
                  border: "1px solid #E0D6CC",
                  height: "100%",
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 25px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography sx={{ color: "#6D625F" }}>“{t.text}”</Typography>
                <Typography
                  sx={{ mt: 2, fontWeight: 800, color: "#3C2F2F" }}
                >
                  — {t.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FINAL CTA */}
      <Box
        sx={{
          py: 10,
          backgroundColor: "#3C2F2F",
          textAlign: "center",
          color: "#F5EFE7",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
          JOIN OUR COMMUNITY
        </Typography>

        <Typography sx={{ mb: 4, opacity: 0.85 }}>
          Fresh produce • Ethical sourcing • Zero compromise.
        </Typography>

        <Button
          onClick={handleStart}
          sx={{
            px: 6,
            py: 1.6,
            borderRadius: 0,
            backgroundColor: "#C8A27A",
            color: "#3C2F2F",
            fontWeight: 900,
            letterSpacing: 1,
            "&:hover": { backgroundColor: "#A67C52" },
          }}
        >
          GET STARTED
        </Button>
      </Box>
    </Box>
  );
}
