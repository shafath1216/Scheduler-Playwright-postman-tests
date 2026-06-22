const { test, expect } = require('@playwright/test');

test('Username, Password, Login and Signup controls are visible', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  await expect(page.locator('.js-username')).toBeVisible();

  await expect(page.locator('.js-password')).toBeVisible();

  await expect(page.locator('.js-login')).toBeVisible();

  await expect(page.locator('.js-signup')).toBeVisible();

});