// 📁 src/modules/EffectsModule.ts
// Модуль всех визуальных эффектов

export class EffectsModule {
  private isActive: boolean = true;

  constructor() {
    this.addGlobalStyles();
  }

  /**
   * Эффекты для секции Features - взрыв частиц
   */
  features(): void {
    console.log('✨ Features effects activated');
    this.createParticleBurst();
    this.showNotification('Features Activated! ✨', '#00ffee');
  }

  /**
   * Эффекты для секции About - дождь сердечек
   */
  about(): void {
    console.log('💖 About effects activated');
    this.createHeartRain();
    this.showNotification('About Section - Hearts Mode! 💖', '#ff59a5');
  }

  /**
   * Эффекты для секции Technology - молнии
   */
  technology(): void {
    console.log('⚡ Technology effects activated');
    this.createLightningStrike();
    this.showNotification('Technology Mode - Enhanced! ⚡', '#00ff88');
  }

  /**
   * Эффекты для секции Infrastructure - строительство
   */
  infrastructure(): void {
    console.log('🏗️ Infrastructure effects activated');
    this.createBuildingEffect();
    this.showNotification('Infrastructure Mode - Building! 🏗️', '#ffaa00');
  }

  /**
   * Эффекты для секции Team - команда
   */
  team(): void {
    console.log('👥 Team effects activated');
    this.createTeamCircle();
    this.showNotification('Team Mode - Collaboration! 👥', '#aa88ff');
  }

  /**
   * Эффекты для секции Contact - подсветка
   */
  contact(): void {
    console.log('📧 Contact effects activated');
    this.highlightEmailForm();
    this.showNotification('Contact Mode - Portal Ready! 🌌', '#ff8844');
  }

  /**
   * Sparkle эффект для меню
   */
  sparkle(element: HTMLElement): void {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createSparkle(rect.left + Math.random() * rect.width, rect.top + Math.random() * rect.height);
      }, i * 100);
    }
  }

  /**
   * Создать взрыв частиц
   */
  private createParticleBurst(): void {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.createParticle(centerX, centerY, i);
      }, i * 50);
    }
  }

  /**
   * Создать одну частицу
   */
  private createParticle(centerX: number, centerY: number, index: number): void {
    const particle = document.createElement('div');
    particle.textContent = ['✨', '🌟', '💫', '⭐'][index % 4];
    
    const angle = (index * 360 / 20) * (Math.PI / 180);
    const distance = Math.random() * 200 + 100;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    particle.style.cssText = `
      position: fixed;
      left: ${centerX}px;
      top: ${centerY}px;
      font-size: ${Math.random() * 10 + 15}px;
      pointer-events: none;
      z-index: 9999;
      transition: all 1.5s ease-out;
      opacity: 1;
    `;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.left = `${endX}px`;
      particle.style.top = `${endY}px`;
      particle.style.opacity = '0';
      particle.style.transform = 'scale(0.5) rotate(720deg)';
    }, 50);

    setTimeout(() => {
      if (particle.parentNode) {
        document.body.removeChild(particle);
      }
    }, 1600);
  }

  /**
   * Создать дождь сердечек
   */
  private createHeartRain(): void {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        this.createFallingHeart();
      }, i * 200);
    }
  }

  /**
   * Создать падающее сердечко
   */
  private createFallingHeart(): void {
    const heart = document.createElement('div');
    heart.textContent = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
    
    heart.style.cssText = `
      position: fixed;
      left: ${Math.random() * window.innerWidth}px;
      top: -50px;
      font-size: ${Math.random() * 15 + 20}px;
      pointer-events: none;
      z-index: 9999;
      animation: heartFall 3s linear forwards;
    `;

    document.body.appendChild(heart);

    setTimeout(() => {
      if (heart.parentNode) {
        document.body.removeChild(heart);
      }
    }, 3000);
  }

  /**
   * Создать молнию
   */
  private createLightningStrike(): void {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createLightning();
      }, i * 300);
    }
  }

  /**
   * Создать одну молнию
   */
  private createLightning(): void {
    const lightning = document.createElement('div');
    lightning.textContent = '⚡';
    
    lightning.style.cssText = `
      position: fixed;
      left: ${Math.random() * window.innerWidth}px;
      top: ${Math.random() * window.innerHeight}px;
      font-size: 40px;
      pointer-events: none;
      z-index: 9999;
      color: #ffff00;
      text-shadow: 0 0 20px #ffff00, 0 0 40px #ffffff;
      animation: lightningFlash 0.5s ease-out forwards;
    `;

    document.body.appendChild(lightning);

    // Вспышка экрана
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      pointer-events: none;
      z-index: 9998;
      animation: flashFade 0.2s ease-out forwards;
    `;

    document.body.appendChild(flash);

    setTimeout(() => {
      if (lightning.parentNode) document.body.removeChild(lightning);
      if (flash.parentNode) document.body.removeChild(flash);
    }, 500);
  }

  /**
   * Создать строительный эффект
   */
  private createBuildingEffect(): void {
    const symbols = ['🏗️', '⚡', '🔧', '⚙️', '💻'];
    
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const block = document.createElement('div');
        block.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        block.style.cssText = `
          position: fixed;
          left: ${Math.random() * window.innerWidth}px;
          top: ${Math.random() * window.innerHeight}px;
          font-size: 24px;
          pointer-events: none;
          z-index: 9998;
          animation: buildingFloat 3s ease-out forwards;
        `;
        
        document.body.appendChild(block);
        
        setTimeout(() => {
          if (block.parentNode) {
            document.body.removeChild(block);
          }
        }, 3000);
      }, i * 200);
    }
  }

  /**
   * Создать круг команды
   */
  private createTeamCircle(): void {
    const teamEmojis = ['👨‍💻', '👩‍💻', '🤝', '💡', '🚀'];
    
    for (let i = 0; i < teamEmojis.length; i++) {
      const member = document.createElement('div');
      member.textContent = teamEmojis[i];
      member.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        font-size: 30px;
        pointer-events: none;
        z-index: 9998;
        animation: teamCircle 4s linear forwards;
        animation-delay: ${i * 0.2}s;
      `;
      
      document.body.appendChild(member);
      
      setTimeout(() => {
        if (member.parentNode) {
          document.body.removeChild(member);
        }
      }, 4200);
    }
  }

  /**
   * Подсветить email форму
   */
  private highlightEmailForm(): void {
    const emailForm = document.querySelector('.email-form') as HTMLElement;
    if (emailForm) {
      emailForm.style.boxShadow = '0 0 30px #ff8844';
      emailForm.style.borderColor = '#ff8844';
      emailForm.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        emailForm.style.boxShadow = '';
        emailForm.style.borderColor = '';
      }, 3000);
    }
  }

  /**
   * Создать sparkle
   */
  private createSparkle(x: number, y: number): void {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: 12px;
      pointer-events: none;
      z-index: 9999;
      animation: sparkleFloat 1s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      if (sparkle.parentNode) {
        document.body.removeChild(sparkle);
      }
    }, 1000);
  }

  /**
   * Показать уведомление
   */
  private showNotification(message: string, color: string): void {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: ${color}22;
      border: 2px solid ${color};
      color: ${color};
      padding: 15px 25px;
      border-radius: 10px;
      font-family: 'Orbitron', sans-serif;
      font-weight: bold;
      z-index: 9999;
      animation: slideInRight 0.5s ease-out;
      backdrop-filter: blur(10px);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 500);
    }, 3000);
  }

  /**
   * Добавить глобальные стили
   */
  private addGlobalStyles(): void {
    if (document.getElementById('effects-module-styles')) return;

    const style = document.createElement('style');
    style.id = 'effects-module-styles';
    style.textContent = `
      @keyframes heartFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
      
      @keyframes lightningFlash {
        0% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0; transform: scale(0.8); }
      }
      
      @keyframes flashFade {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
      }
      
      @keyframes buildingFloat {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        100% { opacity: 0; transform: scale(0.8) rotate(360deg); }
      }
      
      @keyframes teamCircle {
        0% { transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg); opacity: 0; }
      }
      
      @keyframes sparkleFloat {
        0% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-30px) scale(0.5); }
      }
      
      @keyframes slideInRight {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideOutRight {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Остановить все эффекты
   */
  stop(): void {
    this.isActive = false;
  }

  /**
   * Запустить эффекты
   */
  start(): void {
    this.isActive = true;
  }
}