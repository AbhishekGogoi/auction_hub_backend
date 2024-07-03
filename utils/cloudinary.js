const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dpy3bf7rr",
  api_key: "762627536862473",
  api_secret: "ZEbUsXN-hZckZIn5uyZml2MpnJc",
});

module.exports = { cloudinary };
