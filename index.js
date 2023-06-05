const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const PORT = 8080;

axios.get("https://www.theguardian.com/uk").then((response) => {
  const html = response.data;
  console.log(html);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
