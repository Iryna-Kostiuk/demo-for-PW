import { test, expect } from '@playwright/test';

test('user can submit form Contact us', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByPlaceholder('You Full Name').fill('Ira test');
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@mail.com');
  await page.getByPlaceholder('Please Describe Your Message').fill('Hello my first test from playwright!');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByPlaceholder('You Full Name')).toBeEmpty();
});