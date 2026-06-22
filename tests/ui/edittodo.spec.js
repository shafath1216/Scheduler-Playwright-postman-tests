const { test, expect } = require('@playwright/test');

test('TODO_TC_008 - edit todo entry (self-contained)', async ({ page }) => {

  await page.goto('https://scheduler.ghost-stories.org');

  // login
  await page.locator('.js-username').fill('test');
  await page.locator('.js-password').fill('test123');
  await page.locator('.js-login').click();

  await expect(page).toHaveURL(/main\.html/);

  // -----------------------------
  // 1. CREATE A TODO FIRST
  // -----------------------------
  await page.locator("//a[normalize-space()='Add']").click();
  await expect(page).toHaveURL(/add\.html/);

  const todoText = `Todo To Edit ${Date.now()}`;

  await page.locator("//input[@name='date']").fill('2026-06-21T14:30');
  await page.locator("//input[@name='todo']").fill(todoText);

  await page.locator("//button[normalize-space()='Add']").click();

  await expect(page).toHaveURL(/main\.html/);

  // verify it exists
  const createdTodo = page.locator(`//td[contains(text(),"${todoText}")]`);
  await expect(createdTodo).toBeVisible();

  // -----------------------------
  // 2. CLICK EDIT FOR THAT TODO
  // -----------------------------
  await createdTodo.locator('..').locator('.js-edit').click();

  // verify edit page
  await expect(page).toHaveURL(/edit\.html/);

  // -----------------------------
  // 3. UPDATE TODO
  // -----------------------------
  const updatedTodo = `Updated Todo ${Date.now()}`;

  await page.locator("//input[@name='todo']").fill(updatedTodo);
  await page.locator("//input[@name='date']").fill('2026-06-21T15:00');

  await page.locator('.js-add').click();

  // -----------------------------
  // 4. VERIFY BACK ON MAIN PAGE
  // -----------------------------
  await expect(page).toHaveURL(/main\.html/);

  await expect(
    page.locator(`//td[contains(text(),"${updatedTodo}")]`)
  ).toBeVisible();
});