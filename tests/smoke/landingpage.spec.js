const { test, expect } = require("@playwright/test");

test('SCH_TC_001 - application loads successfully', async ({ page }) => {

    await page.goto("https://scheduler.ghost-stories.org");

    await expect(page.getByRole('heading', { name: 'Scheduler' }))
        .toBeVisible();

});