// 📁 src/LiminalApp.ts - Modular Architecture
// The main application file - now simple and clean!

import { ParticleSystem } from './components/ParticleSystem';
import { QuantumClock } from './components/QuantumClock';
import { HeartControls } from './components/HeartControls';
import { EmailForm } from './components/EmailForm';
import { FeedbackForm } from './components/FeedbackForm';
import { TimeHelpers } from './utils/helpers';
import { SELECTORS, ANIMATION_CONFIG } from './utils/constants';

// Modules
import { EffectsModule } from './modules/EffectsModule';
import { MenuModule } from './modules/MenuModule';
import { PortalModule } from './modules/PortalModule';

/**
 * Main LIMINAL application class.
 * Simple and clean - all logic is in modules!
 */
export class LiminalApp {
  // Core Components
  private particleSystem: ParticleSystem | null = null;
  private quantumClock: QuantumClock | null = null;
  private heartControls: HeartControls | null = null;
  private emailForm: EmailForm | null = null;
  private feedbackForm: FeedbackForm | null = null;

  // Modules (all the magic is here!)
  private effectsModule: EffectsModule | null = null;
  private menuModule: MenuModule | null = null;
  private portalModule: PortalModule | null = null;

  // State
  private isInitialized: boolean = false;
  private startTime: number = 0;

  constructor() {
    this.init();
  }

  /**
   * Initialization - now simple and clear!
   */
  private async init(): Promise<void> {
    console.log('🚀 LiminalApp: Starting modular initialization...');
    this.startTime = TimeHelpers.now();
    
    try {
      // 1. Initialize core components
      await this.initCoreComponents();
      
      // 2. Initialize modules
      await this.initModules();
      
      // 3. Finalize
      this.finalize();
      
    } catch (error) {
      console.error('❌ LiminalApp: Initialization failed:', error);
      this.handleError(error);
    }
  }

  /**
   * Initialize Core Components
   */
  private async initCoreComponents(): Promise<void> {
    console.log('⚙️ Initializing core components...');
    
    // Particles
    try {
      this.particleSystem = new ParticleSystem(SELECTORS.PARTICLES_CONTAINER, 50);
      console.log('✅ ParticleSystem ready');
    } catch (error) {
      console.warn('⚠️ ParticleSystem failed:', error);
    }

    // Quantum Clock
    try {
      this.quantumClock = new QuantumClock();
      console.log('✅ QuantumClock ready');
    } catch (error) {
      console.warn('⚠️ QuantumClock failed:', error);
    }

    // Hearts
    try {
      this.heartControls = new HeartControls();
      console.log('✅ HeartControls ready');
    } catch (error) {
      console.warn('⚠️ HeartControls failed:', error);
    }

    // Email Form
    try {
      this.emailForm = new EmailForm();
      console.log('✅ EmailForm ready');
    } catch (error) {
      console.warn('⚠️ EmailForm failed:', error);
    }

    // Feedback Form
    try {
      this.feedbackForm = new FeedbackForm(SELECTORS.FEEDBACK_FORM);
      console.log('✅ FeedbackForm ready');
    } catch (error) {
      console.warn('⚠️ FeedbackForm failed:', error);
    }
  }

  /**
   * Initialize Modules - all the magic!
   */
  private async initModules(): Promise<void> {
    console.log('🎨 Initializing modules...');
    
    // Effects module (most important!)
    try {
      this.effectsModule = new EffectsModule();
      console.log('✅ EffectsModule ready');
    } catch (error) {
      console.warn('⚠️ EffectsModule failed:', error);
      return; // No point in continuing without effects
    }

    // Menu module (uses effects)
    try {
      this.menuModule = new MenuModule(this.effectsModule);
      console.log('✅ MenuModule ready');
    } catch (error) {
      console.warn('⚠️ MenuModule failed:', error);
    }

    // Portal module
    try {
      this.portalModule = new PortalModule();
      console.log('✅ PortalModule ready');
    } catch (error) {
      console.warn('⚠️ PortalModule failed:', error);
    }
  }

  /**
   * Finalize Initialization
   */
  private finalize(): void {
    this.isInitialized = true;
    
    const initTime = TimeHelpers.now() - this.startTime;
    console.log(`✨ LiminalApp: Modular initialization complete in ${initTime}ms`);
    
    this.showWelcomeMessage();
    this.setupGlobalFeatures();
  }

  /**
   * Set up global features
   */
  private setupGlobalFeatures(): void {
    // Eyes controls
    this.setupEyesControls();

    // Set up feedback modal
    this.setupFeedbackModal();
    
    // Window responsiveness
    this.setupResponsiveness();
    
    // Global hotkeys (minimum)
    this.setupGlobalHotkeys();
  }

  /**
   * Set up feedback modal
   */
  private setupFeedbackModal(): void {
    const openBtn = document.getElementById('openFeedbackModalBtn');
    const closeBtn = document.getElementById('closeFeedbackModalBtn');
    const modal = document.getElementById('feedbackModal');

    if (!openBtn || !closeBtn || !modal) {
      console.warn('⚠️ Feedback modal elements not found');
      return;
    }

    openBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    // Close on background click
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  /**
   * Set up eyes controls
   */
  private setupEyesControls(): void {
    const closeEyesBtn = document.querySelector('.close-eyes-btn') as HTMLElement;
    const openEyesBtn = document.querySelector('.open-eyes-btn') as HTMLElement;
    const overlay = document.querySelector('#eyesClosedOverlay') as HTMLElement;
    
    closeEyesBtn?.addEventListener('click', () => {
      overlay?.classList.add('active');
      closeEyesBtn.classList.add('eyes-closed');
      closeEyesBtn.textContent = 'Eyes Closed';
    });
    
    openEyesBtn?.addEventListener('click', () => {
      overlay?.classList.remove('active');
      closeEyesBtn?.classList.remove('eyes-closed');
      if (closeEyesBtn) closeEyesBtn.textContent = 'Close Eyes';
    });
  }

  /**
   * Set up responsiveness
   */
  private setupResponsiveness(): void {
    window.addEventListener('resize', () => {
      // Adapt particles to screen size
      if (this.particleSystem) {
        const newCount = window.innerWidth < 768 ? 25 : 50;
        this.particleSystem.setParticleCount(newCount);
      }
    });

    // Pause when page is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseHeavyAnimations();
      } else {
        this.resumeHeavyAnimations();
      }
    });
  }

  /**
   * Global Hotkeys
   */
  private setupGlobalHotkeys(): void {
    document.addEventListener('keydown', (e) => {
      // Escape - close overlays
      if (e.key === 'Escape') {
        const eyesOverlay = document.querySelector('#eyesClosedOverlay');
        if (eyesOverlay?.classList.contains('active')) {
          eyesOverlay.classList.remove('active');
        }

        const feedbackModal = document.querySelector('#feedbackModal');
        if (feedbackModal?.classList.contains('active')) {
          feedbackModal.classList.remove('active');
        }
      }
      
      // Additional hotkeys for development
      if (e.ctrlKey && e.shiftKey) {
        switch (e.key.toLowerCase()) {
          case 's':
            e.preventDefault();
            this.showStats();
            break;
          case 'r':
            e.preventDefault();
            this.reloadModules();
            break;
          case 'd':
            e.preventDefault();
            this.toggleDebugMode();
            break;
        }
      }
    });
  }

  /**
   * Pause Heavy Animations
   */
  private pauseHeavyAnimations(): void {
    this.particleSystem?.stop();
    // Other heavy animations
  }

  /**
   * Resume Animations
   */
  private resumeHeavyAnimations(): void {
    this.particleSystem?.start();
    // Other animations
  }

  /**
   * Show Welcome Message
   */
  private showWelcomeMessage(): void {
    console.log(`
    🌟 ====================================== 🌟
         LIMINAL v2.0 - MODULAR EDITION
    ✨ Next-Gen AI Infrastructure Platform ✨
    
    🎮 Interactive Features:
    • Click menu items for unique effects!
    • Portal to Noosphere City: Ctrl+N
    • Eyes control: Close/Open buttons
    
    🏗️ Modular Architecture:
    • EffectsModule: All visual magic ✨
    • MenuModule: Interactive navigation 🎯
    • PortalModule: Dimensional travel 🌌
    
    🚀 Ready for cosmic adventures!
    🌟 ====================================== 🌟
    `);
  }

  /**
   * Error Handling
   */
  private handleError(error: any): void {
    console.error('🚨 Critical error:', error);
    
    // Show fallback interface
    document.body.innerHTML = `
      <div style="
        display: flex; 
        align-items: center; 
        justify-content: center; 
        height: 100vh; 
        background: #0f0f0f; 
        color: #ff4444;
        font-family: 'Orbitron', sans-serif;
        text-align: center;
      ">
        <div>
          <h1>🚨 LIMINAL System Error</h1>
          <p>Modular initialization failed</p>
          <p>Error: ${error.message || 'Unknown error'}</p>
          <button onclick="location.reload()" style="
            padding: 15px 30px; 
            background: #00ffee; 
            border: none; 
            border-radius: 8px; 
            color: #000; 
            font-weight: bold; 
            cursor: pointer; 
            margin-top: 20px;
            font-family: 'Orbitron', sans-serif;
          ">
            🔄 Restart LIMINAL
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // PUBLIC API - for external use
  // ==========================================

  /**
   * Activate menu section programmatically
   */
  public activateSection(section: string): void {
    this.menuModule?.activateSection(section);
  }

  /**
   * Activate portal
   */
  public activatePortal(): void {
    this.portalModule?.activate();
  }

  /**
   * Run effect
   */
  public runEffect(effectName: string): void {
    if (this.effectsModule && typeof (this.effectsModule as any)[effectName] === 'function') {
      (this.effectsModule as any)[effectName]();
    }
  }

  /**
   * Get application statistics
   */
  public getStats(): object {
    return {
      isInitialized: this.isInitialized,
      modules: {
        effects: !!this.effectsModule,
        menu: !!this.menuModule ? this.menuModule.getStats() : null,
        portal: !!this.portalModule ? this.portalModule.getStatus() : null
      },
      components: {
        particles: !!this.particleSystem,
        clock: !!this.quantumClock,
        hearts: !!this.heartControls,
        email: !!this.emailForm
      }
    };
  }

  /**
   * Show statistics (for development)
   */
  private showStats(): void {
    console.table(this.getStats());
  }

  /**
   * Reload modules (for development)
   */
  private reloadModules(): void {
    console.log('🔄 Reloading all modules...');
    
    this.menuModule?.reload();
    this.portalModule?.reload();
    
    console.log('✅ Modules reloaded');
  }

  /**
   * Debug mode (for development)
   */
  private toggleDebugMode(): void {
    const body = document.body;
    body.classList.toggle('debug-mode');
    
    if (body.classList.contains('debug-mode')) {
      console.log('🔍 Debug mode ON');
      this.addDebugStyles();
    } else {
      console.log('🔍 Debug mode OFF');
    }
  }

  /**
   * Add debug styles
   */
  private addDebugStyles(): void {
    if (document.getElementById('debug-styles')) return;

    const style = document.createElement('style');
    style.id = 'debug-styles';
    style.textContent = `
      .debug-mode * {
        outline: 1px solid rgba(255, 0, 0, 0.3) !important;
      }
      .debug-mode .portal-container {
        outline: 2px solid #00ffee !important;
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Destroy application
   */
  public destroy(): void {
    console.log('🗑️ Destroying LIMINAL...');
    
    // Destroy modules
    this.menuModule?.destroy();
    this.portalModule?.destroy();
    
    // Stop components
    this.particleSystem?.stop();
    
    this.isInitialized = false;
    console.log('✅ LIMINAL destroyed');
  }
}