import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHome(): Promise<void> {
    await this.page.goto('/');
  }

  protected byId(id: string): Locator {
    return this.page.locator(`#${id}`);
  }
}
