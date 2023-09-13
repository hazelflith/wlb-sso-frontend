const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("LoginTest", async () => {
  await page.goto("http://localhost:3000/");
  await page.click('[name="email"]');
  await page.fill('[name="email"]', "hendra@wlb.co.id");
  await page.click("#outlined-adornment-password");
  await page.fill("#outlined-adornment-password", "betanamex");
  await page.click('css=[name="loginForm"] >> text=Login');
});