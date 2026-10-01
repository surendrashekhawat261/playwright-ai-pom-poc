import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('Alerts and Popups', () => {
  test('should handle simple alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.gotoHome();

    const message = await alertsPage.handleSimpleAlert();
    expect(message).toContain('I am an alert box');
  });

  test('should accept confirmation alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.gotoHome();

    await alertsPage.acceptConfirmationAlert();
  });

  test('should enter text in prompt alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.gotoHome();

    await alertsPage.enterPromptText('Playwright AI POC');
  });
});
