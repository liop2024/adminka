const allowedCors = [" https://yourdomain.saitdomen.nomoredomainswork.ru", 'http://localhost:3000',
    'http://localhost:3001',];

function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,HEAD");

  next();
}

module.exports = cors;
