import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('GUI Form Elements', () => {
  test('should fill user details and select form options', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.gotoHome();
    await homePage.verifyPageLoaded();

    await homePage.fillPersonalDetails(
      'Surendra Shekhawat',
      'surendra.test@example.com',
      '9876543210',
      'Jaipur, Rajasthan'
    );

    await homePage.selectGender('Male');
    await homePage.selectDays(['Monday', 'Friday']);
    await homePage.selectCountry('India');
    await homePage.selectColor('Blue');

    await expect(homePage.nameInput).toHaveValue('Surendra Shekhawat');
    await expect(homePage.emailInput).toHaveValue('surendra.test@example.com');
    await expect(homePage.phoneInput).toHaveValue('9876543210');
    await expect(homePage.addressTextArea).toHaveValue('Jaipur, Rajasthan');
  });
});
