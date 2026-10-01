import { test } from '@playwright/test';
import { DatePickerPage } from '../pages/DatePickerPage';

test.describe('Date Pickers', () => {
  test('should enter date in date picker 1', async ({ page }) => {
    const datePickerPage = new DatePickerPage(page);
    await datePickerPage.gotoHome();

    await datePickerPage.selectDatePicker1('05/10/2026');
  });

  test('should enter date in date picker 2', async ({ page }) => {
    const datePickerPage = new DatePickerPage(page);
    await datePickerPage.gotoHome();

    await datePickerPage.selectDatePicker2('10/05/2026');
  });
});
