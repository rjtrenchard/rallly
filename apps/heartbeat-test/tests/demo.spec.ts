import { test, expect } from '@playwright/test';
import { useTranslation } from 'next-i18next';
import Page from '../../landing/src/pages/index';

test('Page loads and displays correctly', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://rallly.co/'); // Replace with the URL of your Next.js app

  // Ensure the page title is correct
  const title = await page.title();
  expect(title).toContain('Rallly - Schedule Group Meetings'); // Adjust the expected title as needed

});

test('navigation test', async ({ page }) => {
  await page.goto('https://rallly.co/');

  // Click on a link or button that triggers navigation
  await page.click('a[href="https://app.rallly.co/new"]');

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Assert that the URL has changed to the expected one
  expect(page.url()).toBe('https://app.rallly.co/new');

})