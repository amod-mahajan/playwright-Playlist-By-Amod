import test, { expect } from '@playwright/test';

test("getByText-Examples", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByText.html');
   
    //await expect(page.getByText('Hello World', {exact: true})).toBeVisible();

    // Today is 2025-04-05
    // await expect(page.getByText(/^Today is \d{4}-\d{2}-\d{2}$/)).toBeVisible();

    // console.log(new Date().toISOString())
    // let today = new Date().toISOString().split('T')[0];
    
    // await expect(page.getByText(`Today is ${today}`)).toBeVisible();

    await expect(page.getByText('Parent Child', {exact: true})).toBeVisible();

});



