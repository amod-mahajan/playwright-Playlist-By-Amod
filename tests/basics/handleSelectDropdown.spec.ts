import { test, expect, type Page } from '@playwright/test';

test('perform typing examples', async ({ page }) => {
  await page
  .goto(
    'https://www.amazon.com/gp/help/customer/account-issues/ref=unified_claim_collection?ie=UTF8');

    let selectedValue = await page.locator("#cu-select-firstNode")
    .selectOption({
      label: "I forgot my password"
    });

    console.log(selectedValue);

    await page.waitForTimeout(3000);

    await page.locator("#cu-select-firstNode")
    .selectOption([]);

    console.log(selectedValue);

    await page.waitForTimeout(3000);

    selectedValue = await page.locator("#cu-select-firstNode")
    .selectOption({
      label: "I forgot my password"
    });

});