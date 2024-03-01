const express = require("express");

const userController = require("../features/user/user.controller");

const authController = require("../features/auth/auth.controller");
const cardController = require("../features/card/card.controller");

const socMedController = require("../features/social_media/social_media.controller");
const socMedMemberController = require("../features/social_media_member/social_media_member.controller");
const { memberMiddleware, adminMiddleware } = require("../middleware");
const { responseJSON } = require("../helper/app");
const { urlNotFound } = require("../helper/message_response");

const router = express.Router();

router.get("/", (_, res) => {
  res.status(200).send("Welcome to API");
});

// router.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

//CEK ROUTE JIKA TIDAK ADA
// const definedRoutes = router.stack
//   .filter((layer) => layer.route)
//   .map((layer) => layer.route.path);

// if (!definedRoutes.includes(req.url)) {
//   console.log(`Route ${req.url} not found`);
//   return responseJSON(res, 404, urlNotFound);
// }
// next();
// });

// ROUTER MEMBER
router.post("/member/login", authController.loginMember);

router.post("/member/check/:card_number", authController.isRegisteredMember);

router.put(
  "/member/profile",
  memberMiddleware,
  authController.updateProfileMember
);

router.post("/member/register", userController.register);

router.post("/member/forgot", userController.changePasswordFromForgot);

router.post("/member/change_password", userController.changePassword);

router.post("/member/verify/email", userController.verifyEmail);

router.post("/member/verify/card", userController.verifyCard);

router.post("/member/request_otp", userController.requestOtp);

router.get(
  "/member/social_media/:id",
  memberMiddleware,
  socMedMemberController.getAllSocMed
);

router.post(
  "/member/social_media",
  memberMiddleware,
  socMedMemberController.createSocMed
);

router.put(
  "/member/social_media/:id",
  memberMiddleware,
  socMedMemberController.updateSocmed
);

router.delete(
  "/member/social_media/:id",
  memberMiddleware,
  socMedMemberController.deleteSocmed
);

// ROUTER ADMIN
router.post("/admin/login", authController.loginAdmin);

// MEMBER
router.get("/admin/member", adminMiddleware, userController.getAllUser);

// SOCIAL MEDIA
router.get("/admin/social_media", socMedController.getAllSocMed);

router.post(
  "/admin/social_media",
  adminMiddleware,
  socMedController.createSocMed
);

router.put(
  "/admin/social_media/:id",
  adminMiddleware,
  socMedController.updateSocmed
);

router.delete(
  "/admin/social_media/:id",
  adminMiddleware,
  socMedController.deleteSocmed
);

router.post("/admin/card", adminMiddleware, cardController.generateCard);

module.exports = router;
