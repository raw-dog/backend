// secrets, keys, etc go in here
module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "aoneforallwgehdjtfukyrutybehindwalrusilyiulrandallforoneujeyvirusrhg",
  environment: process.env.DB_ENV || process.env.NODE_ENV || "development"
};
