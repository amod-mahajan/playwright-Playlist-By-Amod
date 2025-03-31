import test, { expect } from '@playwright/test';

test("Use traditional locators", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/traditionalLocators.html');

    await expect(page.locator("id=username")).toBeVisible();
    
    await expect(page.locator("name=username")).toBeVisible();

    await expect(page.locator("className=submit-button")).toBeVisible();

    await expect(page.locator("input")).toBeVisible();

    const count = await page.locator("input").count();
    console.log(`Total input elements : ${count}`);

    await expect(page.locator("text=Settings")).toBeVisible();

    await expect(page.locator("//input[@placeholder='Enter your username']")).toBeVisible();

    await expect(page.locator("#username")).toBeVisible();
})