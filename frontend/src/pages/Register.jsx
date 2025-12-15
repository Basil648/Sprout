// // import { useState } from "react";
// // import api from "../api/axios";
// // import { useNavigate } from "react-router-dom";

// // export default function Register() {
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "customer",
// //     phone: ""
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await api.post("/auth/register", form);

// //       localStorage.setItem("registerUserId", res.data.userId);

// //       navigate("/verify");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Register failed");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>

// //       <form onSubmit={handleRegister}>
// //         <input name="name" placeholder="Name" onChange={handleChange} />
// //         <input name="email" placeholder="Email" onChange={handleChange} />
// //         <input name="password" placeholder="Password" onChange={handleChange} />
// //         <input name="phone" placeholder="Phone" onChange={handleChange} />

// //         <select name="role" onChange={handleChange}>
// //           <option value="customer">Customer</option>
// //           <option value="vendor">Vendor</option>
// //         </select>

// //         <button type="submit">Register</button>
// //       </form>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "customer",
//     phone: ""
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/auth/register", form);

//       localStorage.setItem("registerUserId", res.data.userId);

//       navigate("/verify");
//     } catch (err) {
//       alert(err.response?.data?.message || "Register failed");
//     }
//   };

//   return (
//     <div
//       className="d-flex"
//       style={{
//         height: "100vh",
//         backgroundColor: "#F7F7F2",
//         overflow: "hidden"
//       }}
//     >
//       {/* LEFT IMAGE SECTION (70%) */}
//       <div
//         className="d-none d-md-block"
//         style={{
//           width: "70%",
//           backgroundImage: "url('https://media.gettyimages.com/id/1495293871/photo/group-of-farmer-family-and-community-working-on-rice-field-together.jpg?s=612x612&w=0&k=20&c=H6o5_NYAklTTAXYiNiYlw3bYa5THiH3jLsEgBbIBA_g=')",
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}
//       ></div>

//       {/* RIGHT REGISTER SECTION (30%) */}
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{
//           width: "100%",
//           maxWidth: "30%",
//           backgroundColor: "#8FAF9F",
//           padding: "20px"
//         }}
//       >
//         {/* WHITE REGISTER BOX */}
//         <div
//           className="shadow-lg p-4 rounded"
//           style={{
//             width: "100%",
//             maxWidth: "350px",
//             backgroundColor: "white"
//           }}
//         >
//           <h2
//             className="text-center fw-bold mb-4"
//             style={{ color: "#8FAF9F" }}
//           >
//             REGISTER
//           </h2>

//           <form onSubmit={handleRegister}>
//             {/* NAME */}
//             <div className="mb-3">
//               <input
//                 name="name"
//                 placeholder="Name"
//                 onChange={handleChange}
//                 required
//                 className="form-control p-3"
//                 style={{
//                   borderRadius: "10px",
//                   border: "1px solid #D6D6D6",
//                   boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
//                 }}
//               />
//             </div>

//             {/* EMAIL */}
//             <div className="mb-3">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 required
//                 className="form-control p-3"
//                 style={{
//                   borderRadius: "10px",
//                   border: "1px solid #D6D6D6",
//                   boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
//                 }}
//               />
//             </div>

//             {/* PASSWORD */}
//             <div className="mb-3">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//                 className="form-control p-3"
//                 style={{
//                   borderRadius: "10px",
//                   border: "1px solid #D6D6D6",
//                   boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
//                 }}
//               />
//             </div>

//             {/* PHONE */}
//             <div className="mb-3">
//               <input
//                 name="phone"
//                 placeholder="Phone"
//                 onChange={handleChange}
//                 required
//                 className="form-control p-3"
//                 style={{
//                   borderRadius: "10px",
//                   border: "1px solid #D6D6D6",
//                   boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
//                 }}
//               />
//             </div>

//             {/* ROLE */}
//             <div className="mb-4">
//               <select
//                 name="role"
//                 onChange={handleChange}
//                 className="form-select p-3"
//                 style={{
//                   borderRadius: "10px",
//                   border: "1px solid #D6D6D6",
//                   boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
//                 }}
//               >
//                 <option value="customer">Customer</option>
//                 <option value="vendor">Vendor</option>
//               </select>
//             </div>

//             {/* REGISTER BUTTON */}
//             <button
//               type="submit"
//               className="btn w-100 fw-semibold py-2"
//               style={{
//                 backgroundColor: "#8FAF9F",
//                 color: "white",
//                 borderRadius: "10px",
//                 letterSpacing: "1px"
//               }}
//             >
//               REGISTER
//             </button>
//           </form>

//           {/* GOTO LOGIN */}
//           <p className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
//             Already have an account?{" "}
//             <span
//               onClick={() => navigate("/login")}
//               style={{
//                 cursor: "pointer",
//                 color: "#8FAF9F",
//                 fontWeight: "600"
//               }}
//             >
//               Login
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   useMediaQuery,
// } from "@mui/material";

// export default function Register() {
//   const navigate = useNavigate();
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     role: "customer",
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await api.post("/auth/register", form);
//       localStorage.setItem("pendingEmail", form.email);
//       navigate("/verify");
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         background: "linear-gradient(to bottom right, #EFE6DB, #D9C9B4)",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* FLOATING PREMIUM BLOBS */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: 300,
//           height: 300,
//           background: "#C8A27A",
//           opacity: 0.25,
//           filter: "blur(120px)",
//           borderRadius: "50%",
//           top: "-10%",
//           right: "-10%",
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           width: 350,
//           height: 350,
//           background: "#A67C52",
//           opacity: 0.2,
//           filter: "blur(135px)",
//           borderRadius: "50%",
//           bottom: "-15%",
//           left: "-10%",
//         }}
//       />

//       {/* LEFT SIDE — FORM (mirrored login) */}
//       <Box
//         sx={{
//           width: isMobile ? "100%" : { md: "50%", lg: "45%" },
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           p: { xs: 3, sm: 4, md: 6 },
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             maxWidth: 420,
//             background: "rgba(255, 255, 255, 0.75)",
//             backdropFilter: "blur(12px)",
//             borderRadius: "18px",
//             boxShadow: "0 25px 55px rgba(0,0,0,0.18)",
//             p: { xs: 3, md: 4 },
//             border: "1px solid rgba(255,255,255,0.4)",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 900,
//               textAlign: "center",
//               mb: 2,
//               color: "#3C2F2F",
//               letterSpacing: 1,
//             }}
//           >
//             Create Account
//           </Typography>

//           <Typography
//             sx={{
//               textAlign: "center",
//               mb: 4,
//               color: "#6D625F",
//               fontSize: "0.95rem",
//             }}
//           >
//             Join Sprout Space and be part of our community.
//           </Typography>

//           <form onSubmit={handleRegister}>
//             {/* NAME */}
//             <TextField
//               fullWidth
//               name="name"
//               label="Full Name"
//               onChange={handleChange}
//               required
//               sx={{
//                 mb: 3,
//                 "& .MuiOutlinedInput-root": {
//                   background: "rgba(255,255,255,0.7)",
//                   borderRadius: "10px",
//                 },
//               }}
//             />

//             {/* EMAIL */}
//             <TextField
//               fullWidth
//               name="email"
//               label="Email"
//               type="email"
//               onChange={handleChange}
//               required
//               sx={{
//                 mb: 3,
//                 "& .MuiOutlinedInput-root": {
//                   background: "rgba(255,255,255,0.7)",
//                   borderRadius: "10px",
//                 },
//               }}
//             />

//             {/* PHONE */}
//             <TextField
//               fullWidth
//               name="phone"
//               label="Phone Number"
//               type="tel"
//               onChange={handleChange}
//               required
//               sx={{
//                 mb: 3,
//                 "& .MuiOutlinedInput-root": {
//                   background: "rgba(255,255,255,0.7)",
//                   borderRadius: "10px",
//                 },
//               }}
//             />

//             {/* PASSWORD */}
//             <TextField
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               onChange={handleChange}
//               required
//               sx={{
//                 mb: 3,
//                 "& .MuiOutlinedInput-root": {
//                   background: "rgba(255,255,255,0.7)",
//                   borderRadius: "10px",
//                 },
//               }}
//             />

//             {/* ROLE DROPDOWN */}
//             <TextField
//               fullWidth
//               select
//               name="role"
//               label="Select Role"
//               value={form.role}
//               onChange={handleChange}
//               required
//               sx={{
//                 mb: 4,
//                 "& .MuiOutlinedInput-root": {
//                   background: "rgba(255,255,255,0.7)",
//                   borderRadius: "10px",
//                 },
//               }}
//             >
//               <MenuItem value="customer">Customer</MenuItem>
//               <MenuItem value="vendor">Vendor</MenuItem>
//             </TextField>

//             {/* REGISTER BUTTON */}
//             <Button
//               type="submit"
//               fullWidth
//               sx={{
//                 py: 1.4,
//                 backgroundColor: "#C8A27A",
//                 color: "#3C2F2F",
//                 fontWeight: 900,
//                 letterSpacing: 1,
//                 borderRadius: "10px",
//                 transition: "0.3s",
//                 "&:hover": {
//                   backgroundColor: "#A67C52",
//                   transform: "translateY(-2px)",
//                 },
//               }}
//             >
//               REGISTER
//             </Button>
//           </form>

//           {/* LOGIN LINK */}
//           <Typography
//             sx={{
//               mt: 3,
//               textAlign: "center",
//               color: "#6D625F",
//               fontSize: "0.9rem",
//             }}
//           >
//             Already have an account?{" "}
//             <span
//               onClick={() => navigate("/login")}
//               style={{
//                 cursor: "pointer",
//                 color: "#A67C52",
//                 fontWeight: 700,
//               }}
//             >
//               Login
//             </span>
//           </Typography>
//         </Box>
//       </Box>

//       {/* RIGHT SIDE IMAGE (mirrored layout) */}
//       {!isMobile && (
//         <Box
//           sx={{
//             width: { md: "50%", lg: "55%" },
//             backgroundImage: "url('/assets/register-side.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             filter: "brightness(82%)",
//           }}
//         />
//       )}
//     </Box>
//   );
// }


import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  useMediaQuery,
} from "@mui/material";

export default function Register() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const securityQuestions = [
    "What is your pet’s name?",
    "What is your favorite food?",
    "What city were you born in?",
    "What is your mother’s maiden name?",
    "What is your first school name?"
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "customer",
    securityQuestion: "",
    securityAnswer: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
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
      {/* FLOATING PREMIUM BLOBS */}
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
          filter: "blur(135px)",
          borderRadius: "50%",
          bottom: "-15%",
          left: "-10%",
        }}
      />

      {/* LEFT SIDE — FORM */}
      <Box
        sx={{
          width: isMobile ? "100%" : { md: "50%", lg: "45%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, sm: 4, md: 6 },
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
              mb: 2,
              color: "#3C2F2F",
              letterSpacing: 1,
            }}
          >
            Create Account
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              mb: 4,
              color: "#6D625F",
              fontSize: "0.95rem",
            }}
          >
            Join Sprout Space and be part of our community.
          </Typography>

          <form onSubmit={handleRegister}>
            {/* NAME */}
            <TextField
              fullWidth
              name="name"
              label="Full Name"
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: "10px",
                },
              }}
            />

            {/* EMAIL */}
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: "10px",
                },
              }}
            />

            {/* PHONE */}
            <TextField
              fullWidth
              name="phone"
              label="Phone Number"
              type="tel"
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: "10px",
                },
              }}
            />

            {/* PASSWORD */}
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: "10px",
                },
              }}
            />

            {/* ROLE DROPDOWN */}
            <TextField
              fullWidth
              select
              name="role"
              label="Select Role"
              value={form.role}
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: "10px",
                },
              }}
            >
              <MenuItem value="customer">Customer</MenuItem>
              <MenuItem value="vendor">Vendor</MenuItem>
            </TextField>

            {/* SECURITY QUESTION */}
            <TextField
              fullWidth
              select
              name="securityQuestion"
              label="Security Question"
              value={form.securityQuestion}
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: "10px",
                },
              }}
            >
              {securityQuestions.map((q, i) => (
                <MenuItem key={i} value={q}>
                  {q}
                </MenuItem>
              ))}
            </TextField>

            {/* SECURITY ANSWER */}
            <TextField
              fullWidth
              name="securityAnswer"
              label="Answer"
              onChange={handleChange}
              required
              sx={{
                mb: 4,
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: "10px",
                },
              }}
            />

            {/* REGISTER BUTTON */}
            <Button
              type="submit"
              fullWidth
              sx={{
                py: 1.4,
                backgroundColor: "#C8A27A",
                color: "#3C2F2F",
                fontWeight: 900,
                letterSpacing: 1,
                borderRadius: "10px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#A67C52",
                  transform: "translateY(-2px)",
                },
              }}
            >
              REGISTER
            </Button>
          </form>

          {/* LOGIN LINK */}
          <Typography
            sx={{
              mt: 3,
              textAlign: "center",
              color: "#6D625F",
              fontSize: "0.9rem",
            }}
          >
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{
                cursor: "pointer",
                color: "#A67C52",
                fontWeight: 700,
              }}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Box>

      {/* RIGHT SIDE IMAGE */}
      {!isMobile && (
        <Box
          sx={{
            width: { md: "50%", lg: "55%" },
            backgroundImage: "url('/assets/register-side.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(82%)",
          }}
        />
      )}
    </Box>
  );
}
