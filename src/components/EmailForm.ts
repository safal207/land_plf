// 📁 src/components/EmailForm.ts
// Компонент формы email подписки с валидацией

import type { EmailFormData, ValidationResult } from '../types';
import { DOMHelpers, ValidationHelpers, TimeHelpers } from '../utils/helpers';
import { SELECTORS, TEXT } from '../utils/constants';

/**
 * Класс для управления формой email подписки
 * Включает валидацию, анимации и обработку ошибок
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
   * Инициализация компонента
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
   * Найти элементы формы в DOM
   */
  private findElements(): void {
    this.form = DOMHelpers.getElement<HTMLFormElement>(SELECTORS.EMAIL_FORM);
    this.emailInput = DOMHelpers.getElement<HTMLInputElement>(SELECTORS.EMAIL_INPUT);
    this.submitButton = DOMHelpers.getElement<HTMLButtonElement>(SELECTORS.SUBMIT_BUTTON);
    this.successMessage = DOMHelpers.getElement(SELECTORS.SUCCESS_MESSAGE);
    
    // Error message создаем динамически, если не найдена
    this.errorMessage = DOMHelpers.getElement('.error-message');
  }

  /**
   * Проверить что основные элементы найдены
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
   * Привязать события
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
   * Настроить начальное состояние
   */
  private setupInitialState(): void {
    this.hideMessages();
    this.resetButtonState();
  }

  /**
   * Обработать отправку формы
   */
  private async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    
    if (!this.emailInput || !this.submitButton || this.isSubmitting) return;

    console.log('📤 EmailForm: Form submitted');
    
    const formData: EmailFormData = {
      email: this.emailInput.value.trim()
    };

    // Валидация email
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
   * Валидировать email введенный в форму
   */
  private validateEmailInput(email: string): ValidationResult {
    return ValidationHelpers.validateEmail(email);
  }

  /**
   * Отправить email на сервер (симуляция)
   */
  private async submitEmail(data: EmailFormData): Promise<void> {
    this.setSubmittingState(true);
    
    try {
      console.log('🚀 EmailForm: Submitting email:', data.email);
      
      // Симуляция API запроса
      await this.simulateAPICall(data);
      
      this.showSuccess();
      this.clearForm();
      
      console.log('✅ EmailForm: Email submitted successfully');
    } finally {
      this.setSubmittingState(false);
    }
  }

  /**
   * Симулировать API запрос
   */
  private async simulateAPICall(data: EmailFormData): Promise<void> {
    // Симуляция задержки сети
    await TimeHelpers.delay(1500);
    
    // Симуляция случайной ошибки (5% вероятность)
    if (Math.random() < 0.05) {
      throw new Error('Network error');
    }
    
    // Здесь был бы реальный API запрос:
    // const response = await fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
    
    console.log('📡 EmailForm: API call simulated for:', data.email);
  }

  /**
   * Установить состояние отправки
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
   * Сбросить состояние кнопки
   */
  private resetButtonState(): void {
    if (!this.submitButton) return;
    
    this.submitButton.textContent = TEXT.CTA_BUTTON;
    this.submitButton.disabled = false;
    this.submitButton.style.opacity = '1';
  }

  /**
   * Показать сообщение об успехе
   */
  private showSuccess(): void {
    this.hideMessages();
    
    if (this.successMessage) {
      this.successMessage.style.display = 'block';
      this.successMessage.style.animation = 'fadeInUp 0.5s ease-out';
      
      // Скрыть через 5 секунд
      setTimeout(() => {
        this.hideSuccess();
      }, 5000);
    }
  }

  /**
   * Скрыть сообщение об успехе
   */
  private hideSuccess(): void {
    if (this.successMessage) {
      this.successMessage.style.display = 'none';
      this.successMessage.style.animation = '';
    }
  }

  /**
   * Показать сообщение об ошибке
   */
  private showError(message: string): void {
    this.hideMessages();
    
    // Создать элемент ошибки если не существует
    if (!this.errorMessage) {
      this.createErrorElement();
    }
    
    if (this.errorMessage) {
      this.errorMessage.textContent = message;
      this.errorMessage.style.display = 'block';
      this.errorMessage.style.animation = 'fadeInUp 0.3s ease-out';
      
      // Скрыть через 4 секунды
      setTimeout(() => {
        this.hideError();
      }, 4000);
    }
  }

  /**
   * Создать элемент для отображения ошибок
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
   * Скрыть сообщение об ошибке
   */
  private hideError(): void {
    if (this.errorMessage) {
      this.errorMessage.style.display = 'none';
      this.errorMessage.style.animation = '';
    }
  }

  /**
   * Скрыть все сообщения
   */
  private hideMessages(): void {
    this.hideSuccess();
    this.hideError();
  }

  /**
   * Очистить форму
   */
  private clearForm(): void {
    if (this.emailInput) {
      this.emailInput.value = '';
      this.emailInput.classList.remove('error', 'success');
    }
  }

  /**
   * Анимация тряски формы при ошибке
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
   * Обработать изменение ввода
   */
  private handleInputChange(): void {
    if (!this.emailInput) return;
    
    // Убрать ошибку при вводе
    this.emailInput.classList.remove('error');
    this.hideError();
    
    // Добавить класс успеха если email валидный
    const validation = this.validateEmailInput(this.emailInput.value);
    if (validation.isValid) {
      this.emailInput.classList.add('success');
    } else {
      this.emailInput.classList.remove('success');
    }
  }

  /**
   * Обработать потерю фокуса
   */
  private handleInputBlur(): void {
    if (!this.emailInput) return;
    
    const email = this.emailInput.value.trim();
    if (email && !this.validateEmailInput(email).isValid) {
      this.emailInput.classList.add('error');
    }
  }

  /**
   * Обработать получение фокуса
   */
  private handleInputFocus(): void {
    if (!this.emailInput) return;
    
    this.emailInput.classList.remove('error');
    this.hideError();
  }

  /**
   * Программно отправить форму с email
   */
  public submitWithEmail(email: string): Promise<void> {
    if (!this.emailInput) {
      return Promise.reject(new Error('Email input not found'));
    }
    
    this.emailInput.value = email;
    return this.submitEmail({ email });
  }

  /**
   * Получить текущий email из формы
   */
  public getCurrentEmail(): string {
    return this.emailInput?.value.trim() || '';
  }

  /**
   * Проверить валиден ли текущий email
   */
  public isCurrentEmailValid(): boolean {
    const email = this.getCurrentEmail();
    return this.validateEmailInput(email).isValid;
  }

  /**
   * Установить placeholder для input
   */
  public setPlaceholder(placeholder: string): void {
    if (this.emailInput) {
      this.emailInput.placeholder = placeholder;
    }
  }

  /**
   * Получить статистику формы
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
   * Очистка ресурсов
   */
  public destroy(): void {
    console.log('🗑️ EmailForm: Destroying...');
    
    this.hideMessages();
    
    // Удалить слушатели событий
    if (this.form) {
      this.form.removeEventListener('submit', this.handleSubmit);
    }
    
    if (this.emailInput) {
      this.emailInput.removeEventListener('input', this.handleInputChange);
      this.emailInput.removeEventListener('blur', this.handleInputBlur);
      this.emailInput.removeEventListener('focus', this.handleInputFocus);
    }
    
    // Очистить ссылки
    this.form = null;
    this.emailInput = null;
    this.submitButton = null;
    this.successMessage = null;
    this.errorMessage = null;
    this.isInitialized = false;
    
    console.log('✅ EmailForm: Destroyed successfully');
  }
}