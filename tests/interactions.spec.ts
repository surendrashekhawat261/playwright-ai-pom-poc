import { test } from '@playwright/test';
import { InteractionsPage } from '../pages/InteractionsPage';

test.describe('Mouse Interactions', () => {
  test('should copy text using double click', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
    await interactionsPage.gotoHome();

    await interactionsPage.doubleClickCopyText();
  });

  test('should perform drag and drop', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
    await interactionsPage.gotoHome();

    await interactionsPage.dragAndDrop();
  });
});
