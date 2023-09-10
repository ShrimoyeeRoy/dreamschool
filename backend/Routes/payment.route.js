// routes/imageRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const authenticateUser = require("../Middlewear/auth.middlewear.js");
const User = require("../Models/payform.model.js");

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + extension);
    },
});

// Multer file filter to allow only images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"), false);
    }
};

// Multer upload instance
const upload = multer({ storage, fileFilter });

router.post("/upload", authenticateUser, upload.single("image"), async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        const imageFileName = req.body.image;
        user.paymentScreenshot = imageFileName;
        await user.save();
        res.status(201).json({ message: "Image Uploaded Successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

module.exports = router;