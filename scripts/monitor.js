const env = process.env.NODE_ENV || "production";

if (env === "production") {
  console.log("Monitoring prod");
} else {
  console.log("Monitoring dev");
}
