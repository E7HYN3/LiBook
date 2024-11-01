const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Прокси сервер для отправки запросов к удаленным API провайдерам
// URL прокси сервера должен быть указан в перменной corsProxy файла src/js/store.js

const app = express();
app.use(cors({ origin: "*" }));
app.use(
  createProxyMiddleware({
    router: (req) => new URL(req.path.substring(1)),
    pathRewrite: (path, req) => new URL(req.path.substring(1)).pathname,
    changeOrigin: true,
    logger: console,
  })
);

app.listen(8088, () => {
  console.info("proxy server is running on port 8088");
});
