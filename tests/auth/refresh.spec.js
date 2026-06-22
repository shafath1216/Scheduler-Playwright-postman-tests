const { test, expect } = require('@playwright/test');

test('AUTH_TC_REFRESH - verify token refresh works', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  await expect(page).toHaveURL(/main\.html/);

  // FORCE token expiry
  await page.evaluate(() => {
    localStorage.setItem('access', 'expired_token');
  });

  // trigger API call (this should auto-refresh token)
  await page.reload();

  await expect(page.getByRole('heading', { name: /Welcome/ })).toBeVisible();;

});