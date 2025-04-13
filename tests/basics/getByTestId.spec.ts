import test, { expect } from '@playwright/test';
//import { selectors } from '@playwright/test';

test("getByTestId-Examples", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByTestId.html');
   
    // let textVal = await page.getByTestId('login-button').innerText();
    // console.log(textVal);

    //selectors.setTestIdAttribute('data-qa');

    console.log(await page.getByTestId('register-button').innerText());


});



