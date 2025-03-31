import test, { expect } from '@playwright/test';

test("getByLabel-1", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByLabelPlaceholderText_Case2.html');
    await page.getByLabel('First Name:').fill("Amod");
    await page.getByLabel('Last Name:').fill("Mahajan");
});

