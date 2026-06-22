const { test, expect } = require('@playwright/test');

test('TODO_TC_008 - edit second todo entry', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  await expect(page).toHaveURL(/main\.html/);

  // click SECOND edit button
  await page.locator('.js-edit').nth(1).click();

  // verify edit page
  await expect(page).toHaveURL(/edit\.html/);

  // update values
  const updatedTodo = `Updated Todo ${Date.now()}`;

  await page.locator("//input[@name='todo']").fill(updatedTodo);
  await page.locator("//input[@name='date']").fill('2026-06-21T15:00');

  // submit update
  await page.locator('.js-add').click();

  // back to main
  await expect(page).toHaveURL(/main\.html/);

  // verify updated todo exists
  await expect(
    page.locator(`//td[contains(text(),"${updatedTodo}")]`)
  ).toBeVisible();

});