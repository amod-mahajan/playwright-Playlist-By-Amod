import test, { expect } from '@playwright/test';

test("getByAltText-Examples", async({page}) => {
    await page.goto('https://www.cvs.com/');
    let alTval = await page.getByAltText('CVS home page').nth(1).getAttribute('alt');
    console.log(alTval);
});

test("getByAltText-Area", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/area.html');
    let hrefVal = await page.getByAltText('North America').getAttribute('href');

    await page.goto(hrefVal!);
    
});



