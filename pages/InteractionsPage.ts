import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InteractionsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async doubleClickCopyText(): Promise<void> {
    await this.page.locator('#field1').fill('Playwright POC');
    await this.page.locator('button:has-text("Copy Text")').dblclick();
    await expect(this.page.locator('#field2')).toHaveValue('Playwright POC');
  }

  async dragAndDrop(): Promise<void> {
    await this.page.locator('#draggable').dragTo(this.page.locator('#droppable'));
    await expect(this.page.locator('#droppable')).toContainText('Dropped');
  }
}
