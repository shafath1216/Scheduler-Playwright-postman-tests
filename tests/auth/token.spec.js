const { test, expect } = require('@playwright/test');

test('AUTH_TC_005 - verify access and refresh tokens stored after login', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  // wait for redirect
  await expect(page).toHaveURL(/main\.html/);

  // get tokens from browser storage
  const accessToken = await page.evaluate(() => localStorage.getItem('access'));
  const refreshToken = await page.evaluate(() => localStorage.getItem('refresh'));

  // assertions
  expect(accessToken).not.toBeNull();
  expect(refreshToken).not.toBeNull();

  console.log('Access Token:', accessToken);
  console.log('Refresh Token:', refreshToken);

});