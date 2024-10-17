import { test, expect } from '@playwright/test';

test('user can add bissnes', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Irynka');
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@test.com');
  await page.getByPlaceholder('Your Phone Number').fill('0661234567');
  await page.getByPlaceholder('Your Business Brand').fill('SellBissnes');
  await page.getByPlaceholder('Please Describe Your Business').fill('Selles tytututututut');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByPlaceholder('Your Full Name')).toBeEmpty();
});