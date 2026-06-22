const { test, expect } = require('@playwright/test');

test('AUTH_TC_004 - invalid login triggers  alerts', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  const messages = [];

  // handle dialogs one by one (THIS is the key)
  page.on('dialog', async dialog => {
    messages.push(dialog.message());
    await dialog.accept(); // allows next alert to appear
  });

  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('wrongpassword');
  await page.locator('.js-login').click();

  // wait for both alerts to complete
  await page.waitForTimeout(1000);

  // validate sequence
  expect(messages[0]).toBe(
  'Error: {"detail":"No active account found with the given credentials"}')
  expect(messages[1]).toBe('Error: Login failed');

});