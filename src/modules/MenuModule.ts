// 📁 src/modules/MenuModule.ts
// Модуль интерактивного меню

import { EffectsModule } from './EffectsModule';

interface MenuAction {
  selector: string;
  section: string;
  effect: () => void;
}

export class MenuModule {
  private effects: EffectsModule;
  private menuActions: MenuAction[];
  private isInitialized: boolean = false;

  constructor(effects: EffectsModule) {
    this.effects = effects;
    this.menuActions = [
      { selector: 'a[href="#features"]', section: 'features', effect: () => this.effects.features() },
      { selector: 'a[href="#about"]', section: 'about', effect: () => this.effects.about() },
      { selector: 'a[href="#technology"]', section: 'technology', effect: () => this.effects.technology() },
      { selector: 'a[href="#infrastructure"]', section: 'infrastructure', effect: () => this.effects.infrastructure() },
      { selector: 'a[href="#team"]', section: 'team', effect: () => this.effects.team() },
      { selector: 'a[href="#contact"]', section: 'contact', effect: () => this.effects.contact() }
    ];
    
    this.init();
  }

  /**
   * Инициализация меню
   */
  private init(): void {
    console.log('🎮 MenuModule: Initializing interactive menu...');
    
    this.menuActions.forEach(action => {
      const element = document.querySelector(action.selector) as HTMLElement;
      if (element) {
        this.setupMenuItem(element, action);
      }
    });

    this.isInitialized = true;
    console.log('✅ MenuModule: Interactive menu ready');
  }

  /**
   * Настроить пункт меню
   */
  private setupMenuItem(element: HTMLElement, action: MenuAction): void {
    // Добавить hover эффекты
    this.addHoverEffects(element);
    
    // Добавить клик обработчик
    element.addEventListener('click', (e) => {
      e.preventDefault();
      
      console.log(`🎯 Menu click: ${action.section}`);
      
      // Выполнить эффект
      action.effect();
      
      // Плавная прокрутка к секции
      this.scrollToSection(element);
      
      // Подсветить активный пункт
      this.highlightActiveItem(element);
    });
  }

  /**
   * Добавить hover эффекты
   */
  private addHoverEffects(element: HTMLElement): void {
    const originalColor = this.getComputedColor(element);
    
    element.addEventListener('mouseenter', () => {
      element.style.color = '#00ffee';
      element.style.textShadow = '0 0 10px #00ffee';
      element.style.transition = 'all 0.3s ease';
      
      // Sparkle эффект
      this.effects.sparkle(element);
    });

    element.addEventListener('mouseleave', () => {
      element.style.color = originalColor;
      element.style.textShadow = 'none';
    });
  }

  /**
   * Получить вычисленный цвет элемента
   */
  private getComputedColor(element: HTMLElement): string {
    return window.getComputedStyle(element).color || '#ffffff';
  }

  /**
   * Плавная прокрутка к секции
   */
  private scrollToSection(element: HTMLElement): void {
    const targetId = element.getAttribute('href');
    if (targetId) {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }

  /**
   * Подсветить активный пункт меню
   */
  private highlightActiveItem(element: HTMLElement): void {
    // Убрать подсветку со всех пунктов
    this.menuActions.forEach(action => {
      const menuElement = document.querySelector(action.selector) as HTMLElement;
      if (menuElement) {
        menuElement.classList.remove('menu-active');
      }
    });

    // Добавить подсветку текущему
    element.classList.add('menu-active');
    
    // Убрать подсветку через время
    setTimeout(() => {
      element.classList.remove('menu-active');
    }, 2000);
    
    this.addMenuActiveStyles();
  }

  /**
   * Добавить стили для активного меню
   */
  private addMenuActiveStyles(): void {
    if (document.getElementById('menu-active-styles')) return;

    const style = document.createElement('style');
    style.id = 'menu-active-styles';
    style.textContent = `
      .menu-active {
        color: #00ffee !important;
        text-shadow: 0 0 15px #00ffee !important;
        font-weight: bold !important;
        transform: scale(1.05) !important;
        transition: all 0.3s ease !important;
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Программно активировать секцию
   */
  public activateSection(sectionName: string): void {
    const action = this.menuActions.find(a => a.section === sectionName);
    if (action) {
      console.log(`🎯 Programmatically activating: ${sectionName}`);
      action.effect();
      
      const element = document.querySelector(action.selector) as HTMLElement;
      if (element) {
        this.highlightActiveItem(element);
        this.scrollToSection(element);
      }
    } else {
      console.warn(`⚠️ Section not found: ${sectionName}`);
    }
  }

  /**
   * Получить доступные секции
   */
  public getAvailableSections(): string[] {
    return this.menuActions.map(action => action.section);
  }

  /**
   * Добавить новую секцию меню
   */
  public addSection(selector: string, section: string, effectCallback: () => void): void {
    const newAction: MenuAction = {
      selector,
      section,
      effect: effectCallback
    };
    
    this.menuActions.push(newAction);
    
    // Если уже инициализирован, настроить новый элемент
    if (this.isInitialized) {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        this.setupMenuItem(element, newAction);
        console.log(`✅ Added new menu section: ${section}`);
      }
    }
  }

  /**
   * Удалить секцию меню
   */
  public removeSection(section: string): void {
    const index = this.menuActions.findIndex(action => action.section === section);
    if (index !== -1) {
      this.menuActions.splice(index, 1);
      console.log(`🗑️ Removed menu section: ${section}`);
    }
  }

  /**
   * Получить статистику меню
   */
  public getStats(): {
    sectionsCount: number;
    isInitialized: boolean;
    sections: string[];
  } {
    return {
      sectionsCount: this.menuActions.length,
      isInitialized: this.isInitialized,
      sections: this.getAvailableSections()
    };
  }

  /**
   * Перезагрузить меню
   */
  public reload(): void {
    console.log('🔄 MenuModule: Reloading...');
    this.isInitialized = false;
    this.init();
  }

  /**
   * Остановить модуль
   */
  public destroy(): void {
    console.log('🗑️ MenuModule: Destroying...');
    
    // Удалить все обработчики событий
    this.menuActions.forEach(action => {
      const element = document.querySelector(action.selector) as HTMLElement;
      if (element) {
        element.replaceWith(element.cloneNode(true));
      }
    });
    
    this.isInitialized = false;
  }
}