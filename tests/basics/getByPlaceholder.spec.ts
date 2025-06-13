import test, { expect } from '@playwright/test';

test("getByPlaceholder-Examples", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/placeholder.html');
   
    //await page.getByPlaceholder('full name', {exact: true}).fill("Amod");

    //await page.getByPlaceholder('enter YOUR full name', {exact: true}).fill("Amod");

    await page.getByPlaceholder(/full name/i).fill("Amod");
    
});



