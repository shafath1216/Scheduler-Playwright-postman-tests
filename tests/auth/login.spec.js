const { test, expect } = require('@playwright/test');

test('Verify user logs in with valid credentials', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');

  await page.locator('.js-login').click();

  // Verify redirect to main page
  await expect(page).toHaveURL(/main\.html/);

  // Verify welcome heading appears
await expect(
  page.getByRole('heading', { name: /Welcome/i })
).toBeVisible();

});