import test, { expect } from '@playwright/test';

test("getByRole - checked", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByRole_checked.html');
    var checkedvalue = await page.getByRole('checkbox', {checked: false}).getAttribute("name");
    console.log(checkedvalue); 
});

test("getByRole - disabled, exact", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByRole_disabled.html');
    var disabledText = await page.getByRole('button', {disabled: true}).innerText();
    console.log(disabledText);
    var count = await page.getByRole('button', {name: 'Disable', exact: true}).count();
    console.log(count);
});

test("getByRole - expanded", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByRole_expanded.html');
    var text = await page.getByRole('button', {expanded: false}).innerText();
    console.log(text);
});

test("getByRole - hidden element", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByRole_hiddenElement.html');
    var count = await page.getByRole('button', {includeHidden: true}).count();
    console.log(count);
});

test("getByRole - level", async({page}) => {
    await page.goto('file:///C:/RetargetCommon/Playwright/4/playwright-Playlist-By-Amod/html-files/getByRole_level.html');
    var count = await page.getByRole('heading', {level: 2}).count();
    console.log(count);
});