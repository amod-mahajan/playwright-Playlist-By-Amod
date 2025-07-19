import test, { expect } from '@playwright/test';

test("getByText-Examples", async({page, request }) => {
    await page.goto('https://profile.oracle.com/myprofile/account/create-account.jspx');
   
   const link = page.locator('#signinlink');

  // Get the href attribute (this will be relative like 'secure/update-account.jspx?nexturl=...')
  const href = await link.getAttribute('href');
  expect(href).not.toBeNull();
   
    // Build full URL from the base page URL
  const fullUrl = new URL(href!, page.url()).toString();
  console.log('Full link:', fullUrl);

   await page.goto(fullUrl);

  // Make a request to verify it's not broken
//   const response = await request.get(fullUrl);
//   expect(response.status()).toBeLessThan(400);

});



