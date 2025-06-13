import { test, expect } from '@playwright/test';

test('Compare :text() and :has-text()', async ({ page }) => {
  await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/cssPseudo.html'); 

  //await expect(page.locator('a:text-is("Home")')).toBeVisible();

  //console.log(await page.locator('div :text-is("Home")').evaluate(e => e.tagName));

  console.log(await page.locator('button:text-matches("Log.?in", "i")').allInnerTexts());
});