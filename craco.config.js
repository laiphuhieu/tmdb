const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@icon": path.resolve(__dirname, "src/icons"),
      "@image": path.resolve(__dirname, "src/assets/images"),
      "@svg": path.resolve(__dirname, "src/assets/svgs"),
      "@csv": path.resolve(__dirname, "src/assets/csvs"),
    },
  },
};
