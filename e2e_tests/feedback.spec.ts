import { test, expect } from '@playwright/test';

const APP_URL = 'http://localhost:5174/land_plf/';

test.describe('Feedback System', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(APP_URL);
  });

  test('should open and close the feedback modal', async ({ page }) => {
    const feedbackModal = page.locator('#feedbackModal');
    const openButton = page.locator('#openFeedbackModalBtn');
    const closeButton = page.locator('#closeFeedbackModalBtn');

    // Initially, the modal should not be visible
    await expect(feedbackModal).not.toBeVisible();

    // Click the open button to show the modal
    await openButton.click();
    await expect(feedbackModal).toBeVisible();
    await expect(feedbackModal).toHaveClass(/active/);

    // Click the close button to hide the modal
    await closeButton.click();
    await expect(feedbackModal).not.toBeVisible();
  });

  test('should submit the main email form and trigger a network request', async ({ page }) => {
    const emailInput = page.locator('#emailInput');
    const submitButton = page.locator('.email-form .submit-btn');

    // Intercept the network request to Formspree
    let formspreeRequestPromise = page.waitForRequest(req =>
      req.url().includes('formspree.io') && req.method() === 'POST'
    );

    // Fill and submit the form
    await emailInput.fill('test.user@example.com');
    await submitButton.click();

    const request = await formspreeRequestPromise;
    const postData = JSON.parse(request.postData() || '{}');

    expect(request.url()).toContain('https://formspree.io/f/your_form_id');
    expect(postData.email).toBe('test.user@example.com');

    // Also check for success message
    await expect(page.locator('#successMessage')).toBeVisible();
  });

  test('should submit the feedback form and trigger a network request', async ({ page }) => {
    const openButton = page.locator('#openFeedbackModalBtn');

    // Open the modal
    await openButton.click();

    const emailInput = page.locator('#feedbackEmailInput');
    const typeSelect = page.locator('#feedbackTypeSelect');
    const messageTextarea = page.locator('#feedbackMessageTextarea');
    const submitButton = page.locator('#feedbackSubmitBtn');

    // Intercept the network request
    let formspreeRequestPromise = page.waitForRequest(req =>
        req.url().includes('formspree.io') && req.method() === 'POST'
      );

    // Fill and submit the form
    await emailInput.fill('feedback.user@example.com');
    await typeSelect.selectOption('bug');
    await messageTextarea.fill('This is a test bug report from Playwright.');
    await submitButton.click();

    const request = await formspreeRequestPromise;
    const postData = JSON.parse(request.postData() || '{}');

    expect(request.url()).toContain('https://formspree.io/f/your_feedback_form_id');
    expect(postData.email).toBe('feedback.user@example.com');
    expect(postData.feedbackType).toBe('bug');
    expect(postData.message).toBe('This is a test bug report from Playwright.');

    // Check for success message inside the modal
    await expect(page.locator('#feedbackForm #successMessage')).toBeVisible();
  });
});
