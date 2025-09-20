// 📁 src/components/EmailForm.ts
// Email subscription form component with validation

import type { EmailFormData, ValidationResult } from '../types';
import { DOMHelpers, ValidationHelpers } from '../utils/helpers';
import { SELECTORS, TEXT } from '../utils/constants';

/**
 * Class to manage the email subscription form.
 * Includes validation, animations, and error handling.
 */
export class EmailForm {
  private form: HTMLFormElement | null = null;
  private emailInput: HTMLInputElement | null = null;
  private submitButton: HTMLButtonElement | null = null;
  private successMessage: HTMLElement | null = null;
  private errorMessage: HTMLElement | null = null;
  private isSubmitting: boolean = false;
  private isInitialized: boolean = false;

  constructor() {
    this.init();
  }

  /**
   * Initialize the component
   */
  private init(): void {
    console.log('📧 EmailForm: Initializing...');
    
    this.findElements();
    this.validateElements();
    this.bindEvents();
    this.setupInitialState();
    
    this.isInitialized = true;
    console.log('✅ EmailForm: Initialized successfully');
  }

  /**
   * Find form elements in the DOM
   */
  private findElements(): void {
    this.form = DOMHelpers.getElement<HTMLFormElement>(SELECTORS.EMAIL_FORM);
    this.emailInput = DOMHelpers.getElement<HTMLInputElement>(SELECTORS.EMAIL_INPUT);
    this.submitButton = DOMHelpers.getElement<HTMLButtonElement>(SELECTORS.SUBMIT_BUTTON);
    this.successMessage = DOMHelpers.getElement(SELECTORS.SUCCESS_MESSAGE);
    
    // Error message is created dynamically if not found
    this.errorMessage = DOMHelpers.getElement('.error-message');
  }

  /**
   * Check that the main elements are found
   */
  private validateElements(): void {
    if (!this.form) {
      console.warn('⚠️ EmailForm: Form element not found');
    }
    if (!this.emailInput) {
      console.warn('⚠️ EmailForm: Email input not found');
    }
    if (!this.submitButton) {
      console.warn('⚠️ EmailForm: Submit button not found');
    }
    if (!this.successMessage) {
      console.warn('⚠️ EmailForm: Success message element not found');
    }
  }

  /**
   * Bind events
   */
  private bindEvents(): void {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    if (this.emailInput) {
      this.emailInput.addEventListener('input', () => this.handleInputChange());
      this.emailInput.addEventListener('blur', () => this.handleInputBlur());
      this.emailInput.addEventListener('focus', () => this.handleInputFocus());
    }
  }

  /**
   * Set up initial state
   */
  private setupInitialState(): void {
    this.hideMessages();
    this.resetButtonState();
  }

  /**
   * Handle form submission
   */
  private async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    
    if (!this.emailInput || !this.submitButton || this.isSubmitting) return;

    console.log('📤 EmailForm: Form submitted');
    
    const formData: EmailFormData = {
      email: this.emailInput.value.trim()
    };

    // Validate email
    const validation = this.validateEmailInput(formData.email);
    if (!validation.isValid) {
      this.showError(validation.message || TEXT.ERROR_INVALID_EMAIL);
      this.shakeForm();
      return;
    }

    try {
      await this.submitEmail(formData);
    } catch (error) {
      console.error('❌ EmailForm: Submission error:', error);
      this.showError(TEXT.ERROR_GENERAL);
    }
  }

  /**
   * Validate the email entered in the form
   */
  private validateEmailInput(email: string): ValidationResult {
    return ValidationHelpers.validateEmail(email);
  }

  /**
   * Send email to the server
   */
  private async submitEmail(data: EmailFormData): Promise<void> {
    this.setSubmittingState(true);
    
    try {
      console.log('🚀 EmailForm: Submitting email:', data.email);
      
      // Submitting data to Formspree
      await this.submitToFormspree(data);
      
      this.showSuccess();
      this.clearForm();
      
      console.log('✅ EmailForm: Email submitted successfully');
    } catch (error) {
      console.error('❌ EmailForm: Submission to Formspree failed:', error);
      this.showError((error as Error).message || TEXT.ERROR_GENERAL);
      this.shakeForm();
    } finally {
      this.setSubmittingState(false);
    }
  }

  /**
   * Submit data to Formspree
   */
  private async submitToFormspree(data: EmailFormData): Promise<void> {
    // IMPORTANT: Replace 'your_form_id' with your actual Formspree form ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id';

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      // Formspree returns errors in JSON format
      const errorData = await response.json();
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }
    
    console.log('📡 EmailForm: Data successfully sent to Formspree for:', data.email);
  }

  /**
   * Set submitting state
   */
  private setSubmittingState(isSubmitting: boolean): void {
    this.isSubmitting = isSubmitting;
    
    if (!this.submitButton) return;

    if (isSubmitting) {
      this.submitButton.textContent = TEXT.PROCESSING;
      this.submitButton.disabled = true;
      this.submitButton.style.opacity = '0.7';
    } else {
      this.resetButtonState();
    }
  }

  /**
   * Reset button state
   */
  private resetButtonState(): void {
    if (!this.submitButton) return;
    
    this.submitButton.textContent = TEXT.CTA_BUTTON;
    this.submitButton.disabled = false;
    this.submitButton.style.opacity = '1';
  }

  /**
   * Show success message
   */
  private showSuccess(): void {
    this.hideMessages();
    
    if (this.successMessage) {
      this.successMessage.style.display = 'block';
      this.successMessage.style.animation = 'fadeInUp 0.5s ease-out';
      
      // Hide after 5 seconds
      setTimeout(() => {
        this.hideSuccess();
      }, 5000);
    }
  }

  /**
   * Hide success message
   */
  private hideSuccess(): void {
    if (this.successMessage) {
      this.successMessage.style.display = 'none';
      this.successMessage.style.animation = '';
    }
  }

  /**
   * Show error message
   */
  private showError(message: string): void {
    this.hideMessages();
    
    // Create error element if it doesn't exist
    if (!this.errorMessage) {
      this.createErrorElement();
    }
    
    if (this.errorMessage) {
      this.errorMessage.textContent = message;
      this.errorMessage.style.display = 'block';
      this.errorMessage.style.animation = 'fadeInUp 0.3s ease-out';
      
      // Hide after 4 seconds
      setTimeout(() => {
        this.hideError();
      }, 4000);
    }
  }

  /**
   * Create an element to display errors
   */
  private createErrorElement(): void {
    if (!this.form) return;
    
    this.errorMessage = DOMHelpers.createElement('div', 'error-message');
    
    DOMHelpers.addStyles(this.errorMessage, {
      color: '#ff4444',
      textAlign: 'center',
      fontWeight: '600',
      marginTop: '1rem',
      display: 'none',
      fontSize: '0.9rem',
      padding: '10px',
      backgroundColor: 'rgba(255, 68, 68, 0.1)',
      border: '1px solid rgba(255, 68, 68, 0.3)',
      borderRadius: '6px'
    });
    
    this.form.appendChild(this.errorMessage);
  }

  /**
   * Hide error message
   */
  private hideError(): void {
    if (this.errorMessage) {
      this.errorMessage.style.display = 'none';
      this.errorMessage.style.animation = '';
    }
  }

  /**
   * Hide all messages
   */
  private hideMessages(): void {
    this.hideSuccess();
    this.hideError();
  }

  /**
   * Clear the form
   */
  private clearForm(): void {
    if (this.emailInput) {
      this.emailInput.value = '';
      this.emailInput.classList.remove('error', 'success');
    }
  }

  /**
   * Shake form animation on error
   */
  private shakeForm(): void {
    if (this.form) {
      this.form.style.animation = 'shake 0.5s ease-in-out';
      setTimeout(() => {
        if (this.form) {
          this.form.style.animation = '';
        }
      }, 500);
    }
  }

  /**
   * Handle input change
   */
  private handleInputChange(): void {
    if (!this.emailInput) return;
    
    // Remove error on input
    this.emailInput.classList.remove('error');
    this.hideError();
    
    // Add success class if email is valid
    const validation = this.validateEmailInput(this.emailInput.value);
    if (validation.isValid) {
      this.emailInput.classList.add('success');
    } else {
      this.emailInput.classList.remove('success');
    }
  }

  /**
   * Handle input blur
   */
  private handleInputBlur(): void {
    if (!this.emailInput) return;
    
    const email = this.emailInput.value.trim();
    if (email && !this.validateEmailInput(email).isValid) {
      this.emailInput.classList.add('error');
    }
  }

  /**
   * Handle input focus
   */
  private handleInputFocus(): void {
    if (!this.emailInput) return;
    
    this.emailInput.classList.remove('error');
    this.hideError();
  }

  /**
   * Programmatically submit the form with an email
   */
  public submitWithEmail(email: string): Promise<void> {
    if (!this.emailInput) {
      return Promise.reject(new Error('Email input not found'));
    }
    
    this.emailInput.value = email;
    return this.submitEmail({ email });
  }

  /**
   * Get the current email from the form
   */
  public getCurrentEmail(): string {
    return this.emailInput?.value.trim() || '';
  }

  /**
   * Check if the current email is valid
   */
  public isCurrentEmailValid(): boolean {
    const email = this.getCurrentEmail();
    return this.validateEmailInput(email).isValid;
  }

  /**
   * Set placeholder for the input
   */
  public setPlaceholder(placeholder: string): void {
    if (this.emailInput) {
      this.emailInput.placeholder = placeholder;
    }
  }

  /**
   * Get form statistics
   */
  public getStats(): {
    isInitialized: boolean;
    isSubmitting: boolean;
    currentEmail: string;
    isEmailValid: boolean;
    elementsFound: number;
  } {
    const elementsFound = [this.form, this.emailInput, this.submitButton, this.successMessage]
      .filter(el => el !== null).length;

    return {
      isInitialized: this.isInitialized,
      isSubmitting: this.isSubmitting,
      currentEmail: this.getCurrentEmail(),
      isEmailValid: this.isCurrentEmailValid(),
      elementsFound
    };
  }

  /**
   * Clean up resources
   */
  public destroy(): void {
    console.log('🗑️ EmailForm: Destroying...');
    
    this.hideMessages();
    
    // Remove event listeners
    if (this.form) {
      this.form.removeEventListener('submit', this.handleSubmit);
    }
    
    if (this.emailInput) {
      this.emailInput.removeEventListener('input', this.handleInputChange);
      this.emailInput.removeEventListener('blur', this.handleInputBlur);
      this.emailInput.removeEventListener('focus', this.handleInputFocus);
    }
    
    // Clear references
    this.form = null;
    this.emailInput = null;
    this.submitButton = null;
    this.successMessage = null;
    this.errorMessage = null;
    this.isInitialized = false;
    
    console.log('✅ EmailForm: Destroyed successfully');
  }
}