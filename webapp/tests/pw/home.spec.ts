import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:8000/');

  const h1 = page.getByTestId('h1_title');

  await expect(h1).toBeVisible();
  await expect(h1).toHaveText('Home Page');
});
