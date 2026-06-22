const { test, expect } = require('@playwright/test');

test('TODO_TC_006 - verify todo list loads after login', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  // verify redirect
  await expect(page).toHaveURL(/main\.html/);

  // verify todo exists in table
  const todoItem = page.locator("//td[normalize-space()='run QA test']");

  await expect(todoItem).toBeVisible();

});