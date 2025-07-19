import { test, expect, type Page } from '@playwright/test';

test('perform typing examples', async ({ page }) => {
  await page
  .goto(
    'file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/textBox.html');
  
   await page
   .getByRole('textbox', {name: "Enter your name:"})
   .fill("amod");

   await page
   .getByRole('textbox', {name: "Enter your name:"})
   .pressSequentially("mahajan");

  

});