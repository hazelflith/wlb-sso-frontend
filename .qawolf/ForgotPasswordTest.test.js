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

test("ForgotPasswordTest", async () => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Forgot Password?");
  await page.fill('[name="email"]', "hendra@wlb.co.id");
  await page.click("text=Send Reset Link");
  await page.click("text=Login");
});