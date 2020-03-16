// import auth helpers
const { decodeToken, generateToken } = require("../helpers/auth");

module.exports = {
  authorizeClient: (req, res, next) => {
    // pull props off request
    const { email, accessToken, refreshToken } = req.body;

    // if there is a valid access token that matches the given email grant request as usual
    if (accessToken) {
      let decodedAccessEmail = decodeToken(accessToken);
      if (decodedAccessEmail && decodedAccessEmail === email) next();
      else if (refreshToken) {
        let decodedRefreshEmail = decodeToken(refreshToken);
        if (decodedRefreshEmail === email) {
          let newAccessToken = generateToken(email, "access");
          res.status(200).send({ status: 1, newAccessToken });
        } else {
          res.status(401).send({
            status: 0,
            message: "Request unauthorized. Please log in again."
          });
        }
      } else
        res.status(401).send({
          status: 0,
          message: "Request unauthorized. Please log in again."
        });
    } else if (!accessToken && !refreshToken) {
      res.status(401).send({
        status: 0,
        message: "Request unauthorized. Please log in again."
      });
    }
  }
};
