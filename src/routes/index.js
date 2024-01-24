const express = require("express");
const userController = require("../features/user/user.controller");
const authController = require("../features/auth/auth.controller");
const router = express.Router();

router.get("/", (_, res) => {
    res.status(200).send("Welcome to API");
});


router.post("/login/member", authController.loginMember);

router.post("/register", userController.register);

router.post("/verify/email", userController.verifyEmail);

router.post("/request_otp", userController.requestOtp);


module.exports = router;