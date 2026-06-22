const { test, expect } = require('@playwright/test');

test('AUTH_TC_011 - logout clears session and redirects', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  await expect(page).toHaveURL(/main\.html/);

  // logout
  await page.locator('.js-logout').first().click();

  // verify redirect
  await expect(page).toHaveURL(/landing\.html/);

  // verify tokens cleared
  const access = await page.evaluate(() => localStorage.getItem('access'));
  const refresh = await page.evaluate(() => localStorage.getItem('refresh'));
  const username = await page.evaluate(() => localStorage.getItem('username'));

  expect(access).toBeNull();
  expect(refresh).toBeNull();
  expect(username).toBeNull();

});