import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async handleSimpleAlert(): Promise<string> {
    let message = '';
    this.page.once('dialog', async dialog => {
      message = dialog.message();
      await dialog.accept();
    });
    await this.page.locator('#alertBtn').click();
    return message;
  }

  async acceptConfirmationAlert(): Promise<void> {
    this.page.once('dialog', async dialog => await dialog.accept());
    await this.page.locator('#confirmBtn').click();
    await expect(this.page.locator('#demo')).toContainText('You pressed OK');
  }

  async enterPromptText(text: string): Promise<void> {
    this.page.once('dialog', async dialog => await dialog.accept(text));
    await this.page.locator('#promptBtn').click();
    await expect(this.page.locator('#demo')).toContainText(text);
  }
}
