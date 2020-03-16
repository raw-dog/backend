// secrets, keys, etc go in here
module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "aoneforallwgehdjtfukyrutybehindwalrusilyiulrandallforoneujeyvirusrhg",
  environment: process.env.DB_ENV || process.env.NODE_ENV || "development",
  stripeTest_pk: "pk_test_NrG1xO2xS4A129Vw93TLLiXf00CMgtpMOru",
  stripeTest_sk: "sk_test_TtYVtJNQOZZofaAVXFK5SAZN00djgJlttu"
};
