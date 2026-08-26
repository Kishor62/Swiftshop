import express from "express"

import { signin,signup,forgotPassword,verifyOTP,resetPassword } from "../controllers/authController.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);

// Sign
authRouter.post("/signin", signin);

// Forgot Password
authRouter.post("/forgot-password", forgotPassword);

// Verify OTP
authRouter.post("/verify-otp", verifyOTP);

// Reset Password
authRouter.post("/reset-password", resetPassword);


export default authRouter