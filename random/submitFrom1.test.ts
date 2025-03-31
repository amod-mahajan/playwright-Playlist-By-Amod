import test, { chromium, expect } from "@playwright/test";

test("Submit form success", async ({page}) => {
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();

    await page.waitForTimeout(5000);

    await page.goto("file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/login.html");
    await expect(page).toHaveTitle("Playwright Test Page");
    await page.locator("id=nam").fill("Amod");
    await page.locator("//input[@id='email']").fill("amod@gmail.com");
    await page.locator("#submit-btn").click();
    const messageElement = await page.locator("id=message");
    await expect(messageElement).toHaveText("Form submitted!");

    // await page.close();
    // await context.close();
    // await browser.close();

});