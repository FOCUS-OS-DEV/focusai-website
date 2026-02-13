/**
 * Scroll Animations System
 * Cyberpunk-themed scroll animations using GSAP ScrollTrigger
 *
 * Usage: Add data-animate attribute to elements
 *
 * Types:
 * - fade-up: Simple fade up
 * - fade-down: Fade from top
 * - slide-right: Slide from left (RTL: from right visually)
 * - slide-left: Slide from right (RTL: from left visually)
 * - scale-up: Scale from 0.8 to 1
 * - glitch: Glitch reveal effect
 * - typing: Typewriter effect
 * - terminal: Terminal card reveal with scanline
 * - stagger: Stagger children animation
 * - counter: Number counter animation
 * - blur-in: Blur to sharp fade in
 * - split-text: Split text character animation
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

// Animation configurations
const animations = {
  // Basic fade up
  'fade-up': (el: Element, delay: number = 0) => {
    gsap.fromTo(el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Fade from top
  'fade-down': (el: Element, delay: number = 0) => {
    gsap.fromTo(el,
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Slide from right (RTL aware)
  'slide-right': (el: Element, delay: number = 0) => {
    gsap.fromTo(el,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Slide from left (RTL aware)
  'slide-left': (el: Element, delay: number = 0) => {
    gsap.fromTo(el,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Scale up with glow
  'scale-up': (el: Element, delay: number = 0) => {
    gsap.fromTo(el,
      {
        opacity: 0,
        scale: 0.9,
        ...(isMobile ? {} : { filter: 'blur(10px)' })
      },
      {
        opacity: 1,
        scale: 1,
        ...(isMobile ? {} : { filter: 'blur(0px)' }),
        duration: isMobile ? 0.4 : 0.8,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Glitch reveal effect
  'glitch': (el: Element, delay: number = 0) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(el,
      {
        opacity: 0,
        clipPath: 'inset(0 100% 0 0)'
      },
      {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.6,
        delay,
        ease: 'power2.inOut'
      }
    )
    .to(el, {
      x: -5,
      duration: 0.05,
      ease: 'power1.inOut'
    })
    .to(el, {
      x: 5,
      duration: 0.05,
      ease: 'power1.inOut'
    })
    .to(el, {
      x: -3,
      duration: 0.05,
      ease: 'power1.inOut'
    })
    .to(el, {
      x: 0,
      duration: 0.05,
      ease: 'power1.inOut'
    });
  },

  // Typewriter effect
  'typing': (el: Element, delay: number = 0) => {
    const text = el.textContent || '';
    el.textContent = '';
    (el as HTMLElement).style.visibility = 'visible';

    const chars = text.split('');
    let currentIndex = 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 95%',
      onEnter: () => {
        const interval = setInterval(() => {
          if (currentIndex < chars.length) {
            el.textContent += chars[currentIndex];
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, 30);
      }
    });
  },

  // Terminal card reveal with scanline
  'terminal': (el: Element, delay: number = 0) => {
    // Create scanline element
    const scanline = document.createElement('div');
    scanline.className = 'terminal-scanline';
    scanline.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, transparent, #a855f7, transparent);
      box-shadow: 0 0 20px #a855f7, 0 0 40px #a855f7;
      z-index: 50;
      opacity: 0;
    `;

    const parent = el as HTMLElement;
    if (parent.style.position !== 'absolute' && parent.style.position !== 'fixed') {
      parent.style.position = 'relative';
    }
    parent.style.overflow = 'hidden';
    parent.appendChild(scanline);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, delay, ease: 'power2.out' }
    )
    .fromTo(scanline,
      { opacity: 1, top: 0 },
      {
        top: '100%',
        duration: 0.6,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.to(scanline, { opacity: 0, duration: 0.2 });
        }
      },
      '-=0.4'
    );
  },

  // Stagger children animation
  'stagger': (el: Element, delay: number = 0) => {
    const children = el.children;

    gsap.fromTo(children,
      {
        opacity: 0,
        y: isMobile ? 20 : 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.3 : 0.6,
        delay,
        stagger: isMobile ? 0.05 : 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Number counter animation
  'counter': (el: Element, delay: number = 0) => {
    const target = parseInt(el.getAttribute('data-target') || el.textContent || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';

    ScrollTrigger.create({
      trigger: el,
      start: 'top 95%',
      onEnter: () => {
        gsap.fromTo({ value: 0 },
          { value: 0 },
          {
            value: target,
            duration: 2,
            delay,
            ease: 'power2.out',
            onUpdate: function() {
              el.textContent = prefix + Math.round(this.targets()[0].value) + suffix;
            }
          }
        );
      }
    });
  },

  // Blur in effect
  'blur-in': (el: Element, delay: number = 0) => {
    gsap.fromTo(el,
      {
        opacity: 0,
        ...(isMobile ? {} : { filter: 'blur(20px)' }),
        scale: 1.05
      },
      {
        opacity: 1,
        ...(isMobile ? {} : { filter: 'blur(0px)' }),
        scale: 1,
        duration: isMobile ? 0.4 : 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Split text animation (per character)
  'split-text': (el: Element, delay: number = 0) => {
    const text = el.textContent || '';
    el.innerHTML = '';

    // Wrap each character in a span
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      el.appendChild(span);
    });

    gsap.fromTo(el.children,
      {
        opacity: 0,
        y: 50,
        rotateX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        delay,
        stagger: 0.02,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Code block reveal (line by line)
  'code-reveal': (el: Element, delay: number = 0) => {
    const lines = el.querySelectorAll('[data-line]');

    if (lines.length === 0) {
      // If no lines marked, treat content as single block
      gsap.fromTo(el,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        }
      );
      return;
    }

    gsap.fromTo(lines,
      {
        opacity: 0,
        x: -30,
        filter: 'blur(4px)'
      },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.4,
        delay,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  },

  // Neon pulse reveal
  'neon-pulse': (el: Element, delay: number = 0) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(el,
      {
        opacity: 0,
        filter: 'brightness(0.5) blur(4px)'
      },
      {
        opacity: 1,
        filter: 'brightness(1) blur(0px)',
        duration: 0.6,
        delay,
        ease: 'power2.out'
      }
    )
    .to(el, {
      filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
      duration: 0.3,
      ease: 'power2.inOut'
    })
    .to(el, {
      filter: 'brightness(1) drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))',
      duration: 0.3,
      ease: 'power2.inOut'
    });
  },

  // Matrix rain reveal
  'matrix': (el: Element, delay: number = 0) => {
    const parent = el as HTMLElement;
    parent.style.position = 'relative';
    parent.style.overflow = 'hidden';

    // Create matrix overlay
    const overlay = document.createElement('div');
    overlay.className = 'matrix-overlay';
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg,
        rgba(168, 85, 247, 0.3) 0%,
        transparent 50%,
        rgba(168, 85, 247, 0.3) 100%
      );
      z-index: 10;
      pointer-events: none;
    `;
    parent.appendChild(overlay);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, delay, ease: 'power2.out' }
    )
    .fromTo(overlay,
      { opacity: 1, backgroundPosition: '0% 0%' },
      {
        opacity: 0,
        backgroundPosition: '0% 100%',
        duration: 0.8,
        ease: 'power1.inOut',
        onComplete: () => overlay.remove()
      },
      '-=0.3'
    );
  },

  // Flip card reveal
  'flip': (el: Element, delay: number = 0) => {
    gsap.fromTo(el,
      {
        opacity: 0,
        rotateY: -90,
        transformPerspective: 1000
      },
      {
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  }
};

// Initialize all animations
export function initScrollAnimations() {
  // Find all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');

  animatedElements.forEach((el) => {
    const animationType = el.getAttribute('data-animate') as keyof typeof animations;
    const delay = parseFloat(el.getAttribute('data-delay') || '0');

    if (animations[animationType]) {
      animations[animationType](el, delay);
    }
  });

  // Initialize section transitions
  initSectionTransitions();
}

// Section transition effects
function initSectionTransitions() {
  // Skip parallax on mobile for better performance
  if (isMobile) return;

  const sections = document.querySelectorAll('section[data-section]');

  sections.forEach((section) => {
    // Add parallax effect to section backgrounds
    const bg = section.querySelector('.section-bg');
    if (bg) {
      gsap.to(bg, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  });
}

// Note: initialization is handled by BaseLayout.astro via dynamic import
// Do not auto-initialize here to avoid double-init

export { animations };
