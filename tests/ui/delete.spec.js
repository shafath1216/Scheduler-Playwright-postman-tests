const { test, expect } = require('@playwright/test');

test('TODO_TC_009 - delete second todo entry and verify first remains', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  await expect(page).toHaveURL(/main\.html/);

  // capture first and second todo texts
  const firstTodo = await page.locator('tbody tr td:nth-child(2)').nth(0).textContent();
  const secondTodo = await page.locator('tbody tr td:nth-child(2)').nth(1).textContent();

  // delete SECOND entry
  await page.locator('.js-delete').nth(1).click();

  // wait for UI update
  await page.waitForTimeout(500);

  // verify SECOND is gone
  await expect(
    page.locator(`//td[contains(text(),"${secondTodo}")]`)
  ).toHaveCount(0);

  // verify FIRST still exists
  await expect(
    page.locator(`//td[contains(text(),"${firstTodo}")]`)
  ).toBeVisible();

});