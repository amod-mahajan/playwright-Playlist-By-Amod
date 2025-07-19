import { test, expect, type Page } from '@playwright/test';

test('handling multi select examples', async ({ page }) => {
  await page
  .goto(
    'file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/multiSelectDropdown.html');

  let selectValue = await page.locator("#fruits")
  .selectOption(['Apple', 'cherry']);
  console.log(selectValue);

  await page.waitForTimeout(3000);


  selectValue = await page.locator("#fruits")
  .selectOption([]);
  console.log(selectValue);



  // selectValue = await page.locator("#fruits")
  // .selectOption([{index: 2}, 
  //   {label: "Apple787"}
  // ]);
  // console.log(selectValue);

  
   





   

  

});