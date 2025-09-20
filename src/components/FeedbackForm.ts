// 📁 src/components/FeedbackForm.ts
// Component for collecting user feedback

import { DOMHelpers, ValidationHelpers } from '../utils/helpers';
import { SELECTORS, TEXT } from '../utils/constants';

// Extend types for feedback form data
export interface FeedbackFormData {
  email: string;
  feedbackType: 'bug' | 'idea' | 'question' | 'other';
  message: string;
}

/**
 * Class to manage the feedback form
 */
export class FeedbackForm {
  private form: HTMLFormElement | null = null;
  private emailInput: HTMLInputElement | null = null;
  private feedbackTypeSelect: HTMLSelectElement | null = null;
  private messageTextarea: HTMLTextAreaElement | null = null;
  private submitButton: HTMLButtonElement | null = null;
  private successMessage: HTMLElement | null = null;
  private errorMessage: HTMLElement | null = null;

  private isSubmitting: boolean = false;

  constructor(formSelector: string) {
    this.form = DOMHelpers.getElement<HTMLFormElement>(formSelector);
    this.init();
  }

  private init(): void {
    if (!this.form) {
      console.warn('⚠️ FeedbackForm: Form element not found');
      return;
    }
    console.log('📝 FeedbackForm: Initializing...');

    this.findElements();
    this.bindEvents();
    this.setupInitialState();

    console.log('✅ FeedbackForm: Initialized successfully');
  }

  private findElements(): void {
    if (!this.form) return;
    // We assume that elements inside the form will have specific classes or data-attributes
    this.emailInput = this.form.querySelector(SELECTORS.FEEDBACK_EMAIL_INPUT);
    this.feedbackTypeSelect = this.form.querySelector(SELECTORS.FEEDBACK_TYPE_SELECT);
    this.messageTextarea = this.form.querySelector(SELECTORS.FEEDBACK_MESSAGE_TEXTAREA);
    this.submitButton = this.form.querySelector(SELECTORS.FEEDBACK_SUBMIT_BUTTON);
    this.successMessage = this.form.querySelector(SELECTORS.SUCCESS_MESSAGE);
    this.errorMessage = this.form.querySelector('.error-message');
  }

  private bindEvents(): void {
    this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  private setupInitialState(): void {
    this.hideMessages();
  }

  private async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.isSubmitting) return;

    const formData = this.getFormData();
    if (!this.validate(formData)) {
        this.shakeForm();
        return;
    }

    this.setSubmittingState(true);

    try {
      await this.submitToFormspree(formData);
      this.showSuccess();
      this.clearForm();
    } catch (error) {
      console.error('❌ FeedbackForm: Submission failed:', error);
      this.showError((error as Error).message || 'Submission failed. Please try again.');
      this.shakeForm();
    } finally {
      this.setSubmittingState(false);
    }
  }

  private getFormData(): FeedbackFormData {
    return {
      email: this.emailInput?.value.trim() || '',
      feedbackType: (this.feedbackTypeSelect?.value as FeedbackFormData['feedbackType']) || 'other',
      message: this.messageTextarea?.value.trim() || ''
    };
  }

  private validate(data: FeedbackFormData): boolean {
    const emailValidation = ValidationHelpers.validateEmail(data.email);
    if (!emailValidation.isValid) {
      this.showError(emailValidation.message || 'Invalid email address.');
      return false;
    }

    if (data.message.length < 10) {
      this.showError('Message must be at least 10 characters long.');
      return false;
    }

    this.hideError();
    return true;
  }

  private async submitToFormspree(data: FeedbackFormData): Promise<void> {
    // IMPORTANT: Make sure you have a separate endpoint for this form
    // or configure the existing one to accept new fields.
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_feedback_form_id';

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Server error');
    }
  }

  private setSubmittingState(isSubmitting: boolean): void {
    this.isSubmitting = isSubmitting;
    if (this.submitButton) {
      this.submitButton.disabled = isSubmitting;
      this.submitButton.textContent = isSubmitting ? TEXT.PROCESSING : 'Send Feedback';
    }
  }

  private showSuccess(): void {
    if (this.successMessage) {
        this.successMessage.style.display = 'block';
        setTimeout(() => this.hideSuccess(), 5000);
    }
  }

  private hideSuccess(): void {
    if (this.successMessage) this.successMessage.style.display = 'none';
  }

  private showError(message: string): void {
    if (!this.errorMessage) {
        this.errorMessage = DOMHelpers.createElement('div', 'error-message');
        // Styling...
        this.form?.prepend(this.errorMessage);
    }
    this.errorMessage.textContent = message;
    this.errorMessage.style.display = 'block';
  }

  private hideError(): void {
    if (this.errorMessage) this.errorMessage.style.display = 'none';
  }

  private hideMessages(): void {
      this.hideSuccess();
      this.hideError();
  }

  private clearForm(): void {
    if (this.emailInput) {
      this.emailInput.value = '';
    }
    if (this.feedbackTypeSelect) {
      this.feedbackTypeSelect.value = 'idea';
    }
    if (this.messageTextarea) {
      this.messageTextarea.value = '';
    }
  }

  private shakeForm(): void {
    this.form?.classList.add('shake');
    setTimeout(() => this.form?.classList.remove('shake'), 500);
  }

  public destroy(): void {
    this.form?.removeEventListener('submit', this.handleSubmit);
    console.log('🗑️ FeedbackForm: Destroyed.');
  }
}
