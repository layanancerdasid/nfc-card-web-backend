const express = require("express");

const userController = require("../features/user/user.controller");

const authController = require("../features/auth/auth.controller");

const socMedController = require("../features/social_media/social_media.controller");
const socMedMemberController = require("../features/social_media_member/social_media_member.controller");

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

router.post("/member/forgot", userController.changePasswordFromForgot);

router.post("/member/change_password", userController.changePassword);

router.post("/member/verify/email", userController.verifyEmail);

router.post("/member/verify/card", userController.verifyCard);

router.post("/member/request_otp", userController.requestOtp);

router.get("/member/social_media/:id", socMedMemberController.getAllSocMed);

router.post("/member/social_media", socMedMemberController.createSocMed);

router.put("/member/social_media/:id", socMedMemberController.updateSocmed);

router.delete("/member/social_media/:id", socMedMemberController.deleteSocmed);

// ROUTER ADMIN
router.get("/admin/social_media", socMedController.getAllSocMed);

router.post("/admin/social_media", socMedController.createSocMed);

router.put("/admin/social_media/:id", socMedController.updateSocmed);

router.delete("/admin/social_media/:id", socMedController.deleteSocmed);

module.exports = router;
