import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DatePickerPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async selectDatePicker1(dateValue: string): Promise<void> {
    await this.page.locator('#datepicker').fill(dateValue);
    await expect(this.page.locator('#datepicker')).toHaveValue(dateValue);
  }

  async selectDatePicker2(dateValue: string): Promise<void> {
    await this.page.locator('#txtDate').fill(dateValue);
    await expect(this.page.locator('#txtDate')).toHaveValue(dateValue);
  }
}
