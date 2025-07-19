import test, { expect } from '@playwright/test';

test("Check Uncheck", async({page}) => {
    await page.goto('https://www.walgreens.com/login.jsp');
   
    await page.locator('#ShowCharacter').check();

    await page.waitForTimeout(3000);

    await page.locator('#ShowCharacter').check();

    expect(await page.locator('#ShowCharacter').isChecked()).toBe(true);


    await page.locator('#ShowCharacter').uncheck();

    expect(await page.locator('#ShowCharacter').isChecked()).toBe(false);
    
});

test("Radio button", async({page}) => {
    await page.goto('https://www.yatra.com/');

    await page.locator('label[aria-label="Round Trip"] input').check();

    expect(await page.locator('label[aria-label="Round Trip"] input').isChecked()).toBe(true);

    await page.locator('label[aria-label="Round Trip"] input').uncheck();

});



