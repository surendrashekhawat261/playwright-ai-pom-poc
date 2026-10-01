import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Static Web Table', () => {
  test('should validate book price from static table', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.gotoHome();

    const price = await homePage.getBookPrice('Learn Selenium');
    expect(price).toBe('300');
  });
});
