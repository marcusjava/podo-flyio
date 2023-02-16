const puppeteer = require("puppeteer");

const options = {
  printBackground: true,
  format: "A4",
  width: "21cm",
  height: "29,7cm",
  margin: {
    top: "20px",
    bottom: "10px",
    left: "10px",
    right: "5px",
  },
};

//get url for scrapping
const getPDF = async (req, res) => {
  const { url } = req.query;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf(options);

  await browser.close();

  res.contentType("application/pdf");

  return res.send(pdf);
};

module.exports = { getPDF };
