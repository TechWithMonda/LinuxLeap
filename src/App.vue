<template>
  <div>
    <!-- Navigation -->
    <nav ref="nav">
      <div class="container">
        <a href="#" class="logo">
          <img :src="logoUrl" alt="LinuxLeap" class="logo-img" />
          <div class="logo-text">Linux<span>Leap</span></div>
        </a>
        <ul :class="['nav-links', { 'mobile-open': mobileOpen }]">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#download" class="cta-btn">Download Now</a></li>
        </ul>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">☰</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>
            Switch to Linux.
            <span class="highlight">Without Fear.</span>
          </h1>
          <p>
            LinuxLeap makes switching from Windows to Linux easy, safe, and worry-free.
            <strong>Keep your files.</strong> Follow the guide. Enjoy Linux.
          </p>
          <div class="hero-cta">
            <a href="#download" class="btn-primary">
              Download Now
              <span>→</span>
            </a>
          </div>
          <div class="trust-badges">
            <div class="trust-badge">
              <div class="icon">✓</div>
              <span>No Linux experience needed</span>
            </div>
            <div class="trust-badge">
              <div class="icon">✓</div>
              <span>Your files stay safe</span>
            </div>
            <div class="trust-badge">
              <div class="icon">✓</div>
              <span>100% free to try</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <div class="penguin-container">
            <!-- SVG omitted for brevity in diff; full SVG preserved -->
            <svg class="penguin-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#7dd3ae;stop-opacity:0.8" />
                  <stop offset="50%" style="stop-color:#4a9fde;stop-opacity:0.6" />
                  <stop offset="100%" style="stop-color:#3fb582;stop-opacity:0.4" />
                </linearGradient>
              </defs>
              <path d="M 0 200 Q 100 150, 200 200 T 400 200 L 400 400 L 0 400 Z" fill="url(#waveGradient)" opacity="0.3"/>
              <path d="M 0 220 Q 100 180, 200 220 T 400 220 L 400 400 L 0 400 Z" fill="url(#waveGradient)" opacity="0.2"/>
              <circle cx="320" cy="100" r="3" fill="#7dd3ae" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="280" cy="80" r="2" fill="#4a9fde" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="130" r="4" fill="#3fb582" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
              </circle>
              <ellipse cx="200" cy="250" rx="80" ry="100" fill="#1a2332"/>
              <ellipse cx="200" cy="260" rx="50" ry="70" fill="white"/>
              <ellipse cx="140" cy="240" rx="25" ry="60" fill="#1a2332" transform="rotate(-20 140 240)"/>
              <ellipse cx="260" cy="240" rx="25" ry="60" fill="#1a2332" transform="rotate(20 260 240)"/>
              <circle cx="200" cy="170" r="50" fill="#1a2332"/>
              <circle cx="185" cy="165" r="12" fill="white"/>
              <circle cx="215" cy="165" r="12" fill="white"/>
              <circle cx="188" cy="165" r="6" fill="#1a2332"/>
              <circle cx="218" cy="165" r="6" fill="#1a2332"/>
              <polygon points="200,175 195,185 205,185" fill="#ff8c42"/>
              <ellipse cx="180" cy="350" rx="20" ry="12" fill="#ff8c42"/>
              <ellipse cx="220" cy="350" rx="20" ry="12" fill="#ff8c42"/>
              <circle cx="240" cy="240" r="25" fill="#ff8c42" opacity="0.9"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2>Everything You Need to Switch</h2>
          <p>LinuxLeap handles the entire migration process from start to finish</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3>Backup Your Files</h3>
            <p>Securely save your documents, desktop, and everything important before making the switch.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>Guided Installation</h3>
            <p>Easy step-by-step guide tailored to your hardware and needs. No confusion, just clarity.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📁</div>
            <h3>Restore Everything</h3>
            <p>Easily access your bookmarks and files on your new Linux system. Nothing gets left behind.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>Restore Your Files</h3>
            <p>Find out apps and important Linux system setup to match your Windows workflow.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2>How It Works</h2>
          <p>Four simple steps to freedom</p>
        </div>
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Scan & Backup</h3>
              <p>LinuxLeap scans your Windows PC and backs up all your important files, settings, and bookmarks. Everything is safely stored.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Choose Your Linux</h3>
              <p>Take a quick quiz and we'll recommend the perfect Linux distribution for your needs and hardware.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Create USB & Install</h3>
              <p>We'll create a bootable USB drive and guide you through each installation step with clear instructions.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Restore & Enjoy</h3>
              <p>All your files, bookmarks, and settings are restored to your new Linux system. Welcome to freedom!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <h2>Choose Your Plan</h2>
          <p>Start free, upgrade when you need more</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>Free</h3>
            <p>Perfect for trying out Linux</p>
            <div class="price">$0</div>
            <ul class="pricing-features">
              <li>System scanner</li>
              <li>Basic backup (10GB)</li>
              <li>Distro recommender</li>
              <li>Installation guide</li>
              <li>Community support</li>
            </ul>
            <a href="#download" class="pricing-btn">Download Free</a>
          </div>

          <div class="pricing-card featured">
            <div class="pricing-badge">MOST POPULAR</div>
            <h3>Premium</h3>
            <p>Everything you need</p>
            <div class="price">$10 <span>one-time</span></div>
            <ul class="pricing-features">
              <li>Everything in Free</li>
              <li>Unlimited backup</li>
              <li>Bootable USB creator</li>
              <li>Browser migration</li>
              <li>Priority support</li>
              <li>Lifetime updates</li>
            </ul>
            <a href="#download" class="pricing-btn">Get Premium</a>
          </div>

          <div class="pricing-card">
            <h3>Enterprise</h3>
            <p>For teams & businesses</p>
            <div class="price">$99 <span>/year</span></div>
            <ul class="pricing-features">
              <li>Everything in Premium</li>
              <li>10+ PC licenses</li>
              <li>Bulk deployment</li>
              <li>Custom configurations</li>
              <li>Direct support</li>
              <li>SLA guarantee</li>
            </ul>
            <a href="#contact" class="pricing-btn">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="download" class="cta-section">
      <div class="container">
        <h2>Ready to Make the Switch?</h2>
        <p>Join thousands of users who've already escaped Windows. No signups required.</p>
        <a href="#" class="btn-primary" @click.prevent="onDownload">
          Download LinuxLeap Now
          <span>→</span>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="footer-about">
          <h3>LinuxLeap</h3>
          <p>Making the switch to Linux easy, safe, and worry-free. Your journey to freedom starts here.</p>
        </div>
        <div class="footer-links">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 LinuxLeap. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anchors: [],
      anchorHandler: null,
      nav: null,
      observer: null,
      mobileOpen: false,
      logoUrl: null,
    }
  },
  mounted() {
    this.nav = this.$refs.nav;
    // load logo asset
    try { this.logoUrl = require('./assets/logo.svg'); } catch (e) { this.logoUrl = '/src/assets/logo.svg'; }
    this.setupAnchorScroll();
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.setupObserver();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    if (this.anchors.length && this.anchorHandler) {
      this.anchors.forEach(a => a.removeEventListener('click', this.anchorHandler));
    }
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    onDownload() {
      alert('Download would start here! Connect this to your actual download link.');
    },
    onScroll() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (!this.nav) this.nav = this.$refs.nav;
      if (this.nav) {
        if (currentScroll > 100) {
          this.nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
          this.nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }
      }
    },
    setupAnchorScroll() {
      this.anchorHandler = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        if (href === '#') return; // ignore plain '#'
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile menu after clicking a link
        if (this.mobileOpen) this.mobileOpen = false;
      };
      this.anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
      this.anchors.forEach(a => a.addEventListener('click', this.anchorHandler));
    },
    setupObserver() {
      const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, options);

      document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        this.observer.observe(card);
      });
    }
    ,
    toggleMobileMenu() {
      this.mobileOpen = !this.mobileOpen;
    }
  }
}
</script>

<style>
/* Copied page styles from provided HTML (global) */
* { margin: 0; padding: 0; box-sizing: border-box; }
:root { --primary-green: #3fb582; --dark-green: #2d9168; --light-green: #7dd3ae; --accent-blue: #4a9fde; --dark-blue: #1e3a5f; --light-blue: #e8f5f9; --text-dark: #1a2332; --text-gray: #5a6c7d; --bg-light: #f8feff; --white: #ffffff; }
body { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; color: var(--text-dark); background: var(--bg-light); line-height: 1.6; }
nav { position: fixed; top: 0; left: 0; right: 0; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); z-index: 1000; padding: 1.2rem 2rem; box-shadow: 0 2px 20px rgba(0,0,0,0.05); animation: slideDown 0.6s ease-out; }
@keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
nav .container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 0.8rem; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--text-dark); text-decoration: none; transition: transform 0.3s ease; }
.logo:hover { transform: scale(1.05); }
.logo-icon { width: 40px; height: 40px; background: linear-gradient(135deg, var(--primary-green), var(--accent-blue)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
.logo-text span { color: var(--primary-green); }
.nav-links { display: flex; gap: 2.5rem; align-items: center; list-style: none; }
.nav-links a { color: var(--text-dark); text-decoration: none; font-weight: 500; transition: color 0.3s ease; position: relative; }
.nav-links a::after { content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px; background: var(--primary-green); transition: width 0.3s ease; }
.nav-links a:hover::after { width: 100%; }
.nav-links a:hover { color: var(--primary-green); }
.cta-btn { background: var(--primary-green); color: white; padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(63,181,130,0.3); }
.cta-btn:hover { background: var(--dark-green); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(63,181,130,0.4); }
.hero { margin-top: 80px; padding: 4rem 2rem; min-height: calc(100vh - 80px); display: flex; align-items: center; background: linear-gradient(135deg, #f8feff 0%, #e8f9f3 100%); position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; top: -50%; right: -30%; width: 100%; height: 200%; background: radial-gradient(circle, rgba(122,211,174,0.15) 0%, transparent 70%); animation: float 20s ease-in-out infinite; }
@keyframes float { 0%,100% { transform: translate(0,0) rotate(0deg);} 33% { transform: translate(30px,-30px) rotate(5deg);} 66% { transform: translate(-20px,20px) rotate(-5deg);} }
.hero .container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 1; }
.hero-content { animation: fadeInLeft 0.8s ease-out; }
@keyframes fadeInLeft { from { opacity: 0; transform: translateX(-50px);} to { opacity: 1; transform: translateX(0);} }
.hero h1 { font-family: 'Outfit', sans-serif; font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 1rem; color: var(--text-dark); }
.hero h1 .highlight { color: var(--primary-green); display: block; }
.hero p { font-size: 1.25rem; color: var(--text-gray); margin-bottom: 2rem; line-height: 1.8; }
.hero p strong { color: var(--text-dark); font-weight: 600; }
.hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.btn-primary { background: var(--primary-green); color: white; padding: 1rem 2.5rem; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 1.1rem; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.3s ease; box-shadow: 0 8px 25px rgba(63,181,130,0.3); }
.btn-primary:hover { background: var(--dark-green); transform: translateY(-3px); box-shadow: 0 12px 30px rgba(63,181,130,0.4); }
.trust-badges { display: flex; gap: 2rem; align-items: center; margin-top: 2rem; }
.trust-badge { display: flex; align-items: center; gap: 0.5rem; color: var(--text-gray); font-size: 0.95rem; }
.trust-badge .icon { width: 24px; height: 24px; background: var(--primary-green); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; }
.hero-image { position: relative; animation: fadeInRight 0.8s ease-out 0.2s both; }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(50px);} to { opacity: 1; transform: translateX(0);} }
.penguin-container { position: relative; width: 100%; max-width: 500px; margin: 0 auto; animation: bounce 3s ease-in-out infinite; }
@keyframes bounce { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-20px);} }
.penguin-svg { width: 100%; height: auto; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15)); }
.wave-decoration { position: absolute; bottom: -50px; left: -100px; width: 150%; opacity: 0.8; z-index: 0; }
.features { padding: 6rem 2rem; background: white; }
.features .container { max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-family: 'Outfit', sans-serif; font-size: 2.8rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-dark); }
.section-header p { font-size: 1.2rem; color: var(--text-gray); max-width: 600px; margin: 0 auto; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem; }
.feature-card { background: var(--bg-light); padding: 2.5rem; border-radius: 20px; transition: all 0.3s ease; border: 2px solid transparent; }
.feature-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: var(--primary-green); }
.feature-icon { width: 70px; height: 70px; background: linear-gradient(135deg, var(--primary-green), var(--accent-blue)); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1.5rem; box-shadow: 0 10px 25px rgba(63,181,130,0.3); }
.feature-card h3 { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-dark); }
.feature-card p { color: var(--text-gray); line-height: 1.8; }
.how-it-works { padding: 6rem 2rem; background: linear-gradient(135deg, #f8feff 0%, #e8f9f3 100%); }
.steps-container { max-width: 900px; margin: 0 auto; }
.step { display: grid; grid-template-columns: 80px 1fr; gap: 2rem; margin-bottom: 3rem; opacity: 0; animation: fadeInUp 0.6s ease-out forwards; }
.step:nth-child(1) { animation-delay: 0.1s; }
.step:nth-child(2) { animation-delay: 0.2s; }
.step:nth-child(3) { animation-delay: 0.3s; }
.step:nth-child(4) { animation-delay: 0.4s; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
.step-number { width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary-green), var(--accent-blue)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Outfit', sans-serif; font-size: 2rem; font-weight: 800; color: white; box-shadow: 0 10px 30px rgba(63,181,130,0.3); }
.step-content { background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
.step-content h3 { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-dark); }
.step-content p { color: var(--text-gray); line-height: 1.8; }
.pricing { padding: 6rem 2rem; background: white; }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
.pricing-card { background: var(--bg-light); border-radius: 20px; padding: 3rem 2.5rem; position: relative; transition: all 0.3s ease; border: 2px solid transparent; }
.pricing-card.featured { background: linear-gradient(135deg, var(--primary-green), var(--accent-blue)); color: white; transform: scale(1.05); box-shadow: 0 20px 50px rgba(63,181,130,0.3); }
.pricing-card.featured .pricing-badge { background: rgba(255,255,255,0.2); color: white; padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; display: inline-block; margin-bottom: 1rem; }
.pricing-card:hover:not(.featured) { transform: translateY(-10px); border-color: var(--primary-green); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.pricing-card h3 { font-family: 'Outfit', sans-serif; font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; }
.pricing-card.featured h3, .pricing-card.featured p, .pricing-card.featured li { color: white; }
.price { font-family: 'Outfit', sans-serif; font-size: 3rem; font-weight: 800; margin: 1.5rem 0; }
.price span { font-size: 1.2rem; font-weight: 500; }
.pricing-features { list-style: none; margin: 2rem 0; }
.pricing-features li { padding: 0.8rem 0; display: flex; align-items: center; gap: 0.8rem; color: var(--text-gray); }
.pricing-card.featured .pricing-features li { color: rgba(255,255,255,0.95); }
.pricing-features li::before { content: '✓'; width: 24px; height: 24px; background: var(--primary-green); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; }
.pricing-card.featured .pricing-features li::before { background: white; color: var(--primary-green); }
.pricing-btn { width: 100%; padding: 1rem; border-radius: 50px; text-align: center; text-decoration: none; font-weight: 600; font-size: 1.1rem; display: block; transition: all 0.3s ease; margin-top: 2rem; }
.pricing-card:not(.featured) .pricing-btn { background: var(--primary-green); color: white; }
.pricing-card.featured .pricing-btn { background: white; color: var(--primary-green); }
.pricing-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
.cta-section { padding: 6rem 2rem; background: linear-gradient(135deg, var(--primary-green), var(--accent-blue)); color: white; text-align: center; position: relative; overflow: hidden; }
.cta-section::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: rotate 30s linear infinite; }
@keyframes rotate { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
.cta-section .container { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
.cta-section h2 { font-family: 'Outfit', sans-serif; font-size: 3rem; font-weight: 800; margin-bottom: 1.5rem; }
.cta-section p { font-size: 1.3rem; margin-bottom: 2.5rem; opacity: 0.95; }
.cta-section .btn-primary { background: white; color: var(--primary-green); font-size: 1.2rem; padding: 1.2rem 3rem; }
.cta-section .btn-primary:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 15px 40px rgba(0,0,0,0.2); }
footer { background: var(--text-dark); color: white; padding: 3rem 2rem 1.5rem; }
footer .container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 2rem; }
.footer-about h3 { font-family: 'Outfit', sans-serif; font-size: 1.5rem; margin-bottom: 1rem; }
.footer-about p { color: rgba(255,255,255,0.7); line-height: 1.8; }
.footer-links h4 { font-family: 'Outfit', sans-serif; margin-bottom: 1rem; }
.footer-links ul { list-style: none; }
.footer-links li { margin-bottom: 0.8rem; }
.footer-links a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.3s ease; }
.footer-links a:hover { color: var(--primary-green); }
.footer-bottom { text-align: center; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }
.mobile-menu-btn { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-dark); }
@media (max-width: 968px) { .hero .container { grid-template-columns: 1fr; gap: 3rem; } .hero h1 { font-size: 2.5rem; } .penguin-container { max-width: 350px; } .features-grid { grid-template-columns: 1fr; } .pricing-grid { grid-template-columns: 1fr; } .pricing-card.featured { transform: scale(1); } footer .container { grid-template-columns: 1fr; gap: 2rem; } }
@media (max-width: 768px) { .nav-links { display: none; } .mobile-menu-btn { display: block; } .hero { padding: 3rem 1.5rem; } .hero h1 { font-size: 2rem; } .hero p { font-size: 1.1rem; } .section-header h2 { font-size: 2rem; } .cta-section h2 { font-size: 2rem; } .trust-badges { flex-direction: column; align-items: flex-start; gap: 1rem; } }

/* Mobile open state for nav */
.nav-links.mobile-open {
  display: flex !important;
  flex-direction: column;
  position: absolute;
  top: 72px;
  right: 1.5rem;
  background: white;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  z-index: 1100;
}
.logo-img { width: 40px; height: 40px; object-fit: contain; border-radius: 8px; }
</style>
