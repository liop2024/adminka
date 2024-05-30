const allowedCors = ["*", "nastavnik.36.front-web.nomoredomainswork.ru"];

function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,HEAD");

  next();
}

module.exports = cors;
