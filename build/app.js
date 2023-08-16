const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
router.get("/create_link", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/create_link.html"));
});
app.listen(port);
app.set('view engine', 'ejs');
app.use('/', router);
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, 'scripts')));