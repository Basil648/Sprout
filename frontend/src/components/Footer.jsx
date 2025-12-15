import { Box, Grid, Typography, IconButton, TextField, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#0d0d0d",
        color: "#f1f1f1",
        pt: 8,
        pb: 4,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={6}>
        
        {/* COMPANY BRANDING */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Sprout Space
          </Typography>

          <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
            Sprout Space is your go-to destination for all things plants.Delivered within hours, safe and reliable
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "#f1f1f1" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#f1f1f1" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#f1f1f1" }}>
              <XIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* NAVIGATION LINKS */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Explore
          </Typography>

          {["Home", "Products", "About", "Contact"].map((text) => (
            <Typography
              key={text}
              sx={{
                my: 1,
                cursor: "pointer",
                "&:hover": { color: "#1E88E5" },
              }}
            >
              {text}
            </Typography>
          ))}
        </Grid>

        {/* SUPPORT LINKS */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Support
          </Typography>

          {["Customer Service", "Returns", "Warranty", "FAQs"].map((text) => (
            <Typography
              key={text}
              sx={{
                my: 1,
                cursor: "pointer",
                "&:hover": { color: "#1E88E5" },
              }}
            >
              {text}
            </Typography>
          ))}
        </Grid>

        {/* NEWSLETTER */}
    
      </Grid>

      {/* COPYRIGHT */}
      <Box sx={{ textAlign: "center", mt: 8, opacity: 0.7 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Sprout Space. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
