import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressTextArea: Locator;
  readonly countryDropdown: Locator;
  readonly colorDropdown: Locator;
  readonly staticBookTable: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.addressTextArea = page.locator('#textarea');
    this.countryDropdown = page.locator('#country');
    this.colorDropdown = page.locator('#colors');
    this.staticBookTable = page.locator('table[name="BookTable"]');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
  }

  async fillPersonalDetails(name: string, email: string, phone: string, address: string): Promise<void> {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.addressTextArea.fill(address);
  }

  async selectGender(gender: 'Male' | 'Female'): Promise<void> {
    await this.page.getByLabel(gender).check();
  }

  async selectDays(days: string[]): Promise<void> {
    for (const day of days) {
      await this.page.getByLabel(day).check();
    }
  }

  async selectCountry(country: string): Promise<void> {
    await this.countryDropdown.selectOption({ label: country });
  }

  async selectColor(color: string): Promise<void> {
    await this.colorDropdown.selectOption({ label: color });
  }

  async getBookPrice(bookName: string): Promise<string> {
    const row = this.staticBookTable.locator('tr', { hasText: bookName });
    return (await row.locator('td').nth(3).innerText()).trim();
  }
}
