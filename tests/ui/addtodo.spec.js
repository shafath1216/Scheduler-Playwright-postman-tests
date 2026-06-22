const { test, expect } = require('@playwright/test');

test('TODO_TC_007 - add todo end-to-end flow', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  await expect(page).toHaveURL(/main\.html/);

  // click Add button
  await page.locator("//a[normalize-space()='Add']").click();

  // verify navigation (optional but good QA practice)
  await expect(page).toHaveURL(/add\.html/);

  // fill add todo form
  const todoText = `Playwright Todo ${Date.now()}`;

  await page.locator("//input[@name='date']").fill('2026-06-21T14:30');

  await page.locator("//input[@name='todo']").fill(todoText);

  // submit
  await page.locator("//button[normalize-space()='Add']").click();

  // back to main page
  await expect(page).toHaveURL(/main\.html/);

  // verify todo appears in table
  await expect(
    page.locator(`//td[contains(text(),"${todoText}")]`)
  ).toBeVisible();

});