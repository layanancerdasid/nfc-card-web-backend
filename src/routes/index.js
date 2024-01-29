const express = require("express");

const userController = require("../features/user/user.controller");

const authController = require("../features/auth/auth.controller");

const socMedController = require("../features/social_media/social_media.controller");

const router = express.Router();

router.get("/", (_, res) => {
  res.status(200).send("Welcome to API");
});

// Middleware untuk logging request
router.use((req, _, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ROUTER MEMBER
router.post("/login/member", authController.loginMember);

router.post("/member/register", userController.register);

router.post("/member/verify/email", userController.verifyEmail);

router.post("/member/verify/card", userController.verifyCard);

router.post("/member/request_otp", userController.requestOtp);

// ROUTER ADMIN
router.post("/admin/social_media", socMedController.createSocMed);
router.put("/admin/social_media/:id", socMedController.updateSocmed);

module.exports = router;
