import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  useMediaQuery
} from "@mui/material";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [tempToken, setTempToken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // STEP 1 — SUBMIT EMAIL
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/get-security-question", { email });
      setQuestion(res.data.question);
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "Error fetching security question");
    }
  };

  // STEP 2 — SUBMIT ANSWER
  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/verify-security-answer", {
        email,
        answer,
      });

      setTempToken(res.data.tempToken);
      setStep(3);
    } catch (err) {
      alert(err.response?.data?.message || "Wrong answer");
    }
  };

  // STEP 3 — RESET PASSWORD
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/reset-password", {
        newPassword,
        tempToken,
      });

      alert("Password reset successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Reset failed");
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
        p: 2,
      }}
    >
      {/* FLOATING SHAPES */}
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
          right: "-10%",
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
          left: "-10%",
        }}
      />

      {/* CENTER FORM */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
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
              mb: 3,
              color: "#3C2F2F",
              letterSpacing: 1,
            }}
          >
            Reset Password
          </Typography>

          {/* STEP 1 — ENTER EMAIL */}
          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <TextField
                fullWidth
                label="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "10px",
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                sx={{
                  py: 1.4,
                  backgroundColor: "#C8A27A",
                  color: "#3C2F2F",
                  fontWeight: 900,
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#A67C52",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                CONTINUE
              </Button>
            </form>
          )}

          {/* STEP 2 — ENTER ANSWER */}
          {step === 2 && (
            <form onSubmit={handleAnswerSubmit}>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: "#3C2F2F",
                }}
              >
                {question}
              </Typography>

              <TextField
                fullWidth
                label="Your answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "10px",
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                sx={{
                  py: 1.4,
                  backgroundColor: "#C8A27A",
                  color: "#3C2F2F",
                  fontWeight: 900,
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#A67C52",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                VERIFY ANSWER
              </Button>
            </form>
          )}

          {/* STEP 3 — NEW PASSWORD */}
          {step === 3 && (
            <form onSubmit={handlePasswordReset}>
              <TextField
                fullWidth
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "10px",
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                sx={{
                  py: 1.4,
                  backgroundColor: "#C8A27A",
                  color: "#3C2F2F",
                  fontWeight: 900,
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#A67C52",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                RESET PASSWORD
              </Button>
            </form>
          )}
        </Box>
      </Box>
    </Box>
  );
}
