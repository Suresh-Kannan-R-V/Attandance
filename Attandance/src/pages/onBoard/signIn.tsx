import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import OnBoard from "./onBoard";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Role-based navigation
    if (email.includes("student")) {
      navigate("/student-dashboard");
    } else if (email.includes("teacher")) {
      navigate("/teacher-dashboard");
    } else if (email.includes("admin")) {
      navigate("/admin-dashboard");
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };

  return (
    <OnBoard>
      <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
        <h2>BIT Attendance Portal</h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </form>

        <div
          style={{ margin: "16px 0", display: "flex", alignItems: "center" }}
        >
          <hr
            style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }}
          />
          <span style={{ margin: "0 12px", fontSize: "12px", color: "#777" }}>
            Or continue with
          </span>
          <hr
            style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }}
          />
        </div>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleGoogleSignIn}
          startIcon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 488 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
          }
        >
          Sign in with Google
        </Button>
      </div>
    </OnBoard>
  );
};
