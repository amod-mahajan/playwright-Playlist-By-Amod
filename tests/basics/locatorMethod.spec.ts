import test, { expect } from '@playwright/test';

test("use xpath and css", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/traditionalLocators.html');
    //await page.locator("input[id='username']").fill("Amod");

    //await page.locator('button', {hasNotText: 'login'}).click();

    await page.locator('fieldset', {hasNot: page.getByLabel('female')}).click();
});

