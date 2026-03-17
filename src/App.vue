<template>
  <div>
    <!-- ══════════════════════════════════════════════
         META / HEAD (inject in index.html)
    ══════════════════════════════════════════════ -->

    <!-- Navigation -->
    <nav ref="nav" :class="{ scrolled: navScrolled }">
      <div class="container nav-inner">
        <a href="#" class="logo">
          <div class="logo-mark">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="10" fill="#3fb582"/>
              <ellipse cx="18" cy="21" rx="7" ry="9" fill="#1a2332"/>
              <ellipse cx="18" cy="22" rx="4.5" ry="6.5" fill="white"/>
              <ellipse cx="13" cy="20" rx="2.2" ry="5.5" fill="#1a2332" transform="rotate(-18 13 20)"/>
              <ellipse cx="23" cy="20" rx="2.2" ry="5.5" fill="#1a2332" transform="rotate(18 23 20)"/>
              <circle cx="18" cy="14" r="5" fill="#1a2332"/>
              <circle cx="16.2" cy="13.5" r="1.6" fill="white"/>
              <circle cx="19.8" cy="13.5" r="1.6" fill="white"/>
              <circle cx="16.5" cy="13.5" r="0.8" fill="#1a2332"/>
              <circle cx="20.1" cy="13.5" r="0.8" fill="#1a2332"/>
              <polygon points="18,15.5 16.8,17 19.2,17" fill="#ff8c42"/>
            </svg>
          </div>
          <div class="logo-text">Linux<span>Leap</span></div>
        </a>

        <ul :class="['nav-links', { 'mobile-open': mobileOpen }]">
          <li><a href="#features" @click="closeMobile">Features</a></li>
          <li><a href="#how-it-works" @click="closeMobile">How It Works</a></li>
          <li><a href="#preview" @click="closeMobile">Preview</a></li>
          <li><a href="#support" @click="closeMobile">Support Us</a></li>
          <li><a href="#faq" @click="closeMobile">FAQ</a></li>
          <li><a href="#download" class="cta-btn" @click="closeMobile">Download Free</a></li>
        </ul>
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :aria-label="mobileOpen ? 'Close menu' : 'Open menu'">
          <span v-if="!mobileOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </nav>

    <!-- ══════════════════════════════════════════════
         HERO
    ══════════════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-bg-dots"></div>
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Free & Open Source Forever
          </div>
          <h1>
            Switch to Linux.<br>
            <span class="highlight">Without Fear.</span>
          </h1>
          <p>
            LinuxLeap is a <strong>100% free tool</strong> that makes switching from
            Windows to Linux easy, safe, and worry-free. Keep your files.
            Follow the guide. Enjoy freedom.
          </p>
          <div class="hero-cta">
            <a href="#download" class="btn-primary">
              Download Free — No Signup
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a href="#preview" class="btn-ghost">See Preview</a>
          </div>
          <div class="trust-badges">
            <div class="trust-badge">
              <div class="tbadge-icon">✓</div>
              <span>100% Free Forever</span>
            </div>
            <div class="trust-badge">
              <div class="tbadge-icon">✓</div>
              <span>Files Stay Safe</span>
            </div>
            <div class="trust-badge">
              <div class="tbadge-icon">✓</div>
              <span>Open Source</span>
            </div>
          </div>
        </div>

        <div class="hero-image">
          <div class="penguin-glow"></div>
          <div class="penguin-container">
            <svg class="penguin-svg" viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glowGrad" cx="50%" cy="60%" r="50%">
                  <stop offset="0%" stop-color="#3fb582" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#3fb582" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <ellipse cx="200" cy="360" rx="120" ry="20" fill="url(#glowGrad)"/>
              <!-- Flippers -->
              <ellipse cx="138" cy="248" rx="26" ry="62" fill="#1a2332" transform="rotate(-22 138 248)"/>
              <ellipse cx="262" cy="248" rx="26" ry="62" fill="#1a2332" transform="rotate(22 262 248)"/>
              <!-- Body -->
              <ellipse cx="200" cy="268" rx="84" ry="108" fill="#1a2332"/>
              <ellipse cx="200" cy="282" rx="54" ry="78" fill="white"/>
              <!-- Head -->
              <circle cx="200" cy="168" r="60" fill="#1a2332"/>
              <!-- Eyes white -->
              <circle cx="182" cy="158" r="15" fill="white"/>
              <circle cx="218" cy="158" r="15" fill="white"/>
              <!-- Pupils -->
              <circle cx="185" cy="158" r="8" fill="#1a2332"/>
              <circle cx="221" cy="158" r="8" fill="#1a2332"/>
              <!-- Eye shine -->
              <circle cx="188" cy="154" r="3" fill="white"/>
              <circle cx="224" cy="154" r="3" fill="white"/>
              <!-- Beak -->
              <polygon points="200,172 193,186 207,186" fill="#ff8c42"/>
              <!-- Feet -->
              <ellipse cx="178" cy="364" rx="22" ry="12" fill="#ff8c42"/>
              <ellipse cx="222" cy="364" rx="22" ry="12" fill="#ff8c42"/>
              <!-- Cheek blush -->
              <ellipse cx="162" cy="168" rx="10" ry="7" fill="#ff8c42" opacity="0.4"/>
              <ellipse cx="238" cy="168" rx="10" ry="7" fill="#ff8c42" opacity="0.4"/>
              <!-- Linux logo on belly -->
              <text x="200" y="278" text-anchor="middle" font-size="32" fill="#3fb582" opacity="0.8">🐧</text>
              <!-- Floating stars -->
              <circle cx="320" cy="90" r="3.5" fill="#3fb582" opacity="0.9">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="78" cy="130" r="2.5" fill="#4a9fde" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="180" r="4" fill="#7dd3ae" opacity="0.7">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" repeatCount="indefinite"/>
                <animate attributeName="r" values="2.5;5;2.5" dur="3.2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="55" cy="280" r="2" fill="#3fb582" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="345" cy="310" r="3" fill="#4a9fde" opacity="0.7">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <!-- Floating stat cards -->
          <div class="float-card float-card-1">
            <div class="fc-icon">🎮</div>
            <div>
              <div class="fc-title">Gaming Ready</div>
              <div class="fc-sub">Steam + Proton</div>
            </div>
          </div>
          <div class="float-card float-card-2">
            <div class="fc-icon">🛡️</div>
            <div>
              <div class="fc-title">Files Protected</div>
              <div class="fc-sub">Auto backup first</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Social proof bar -->
      <div class="social-proof-bar">
        <div class="container sp-inner">
          <div class="sp-item">
            <span class="sp-num">10,000+</span>
            <span class="sp-label">Successful switches</span>
          </div>
          <div class="sp-divider"></div>
          <div class="sp-item">
            <span class="sp-num">4.9 ★</span>
            <span class="sp-label">Average user rating</span>
          </div>
          <div class="sp-divider"></div>
          <div class="sp-item">
            <span class="sp-num">100%</span>
            <span class="sp-label">Free. No hidden costs</span>
          </div>
          <div class="sp-divider"></div>
          <div class="sp-item">
            <span class="sp-num">~20MB</span>
            <span class="sp-label">Tiny download</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         FEATURES
    ══════════════════════════════════════════════ -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Features</div>
          <h2>Everything You Need to Switch</h2>
          <p>LinuxLeap handles the entire migration from start to finish — no experience needed</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="(f, i) in features" :key="i" :style="{ animationDelay: i * 0.1 + 's' }">
            <div class="feature-icon-wrap" :style="{ background: f.bg }">
              <span class="feature-icon">{{ f.icon }}</span>
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         HOW IT WORKS
    ══════════════════════════════════════════════ -->
    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Process</div>
          <h2>How It Works</h2>
          <p>Four simple steps to Linux freedom</p>
        </div>
        <div class="steps-timeline">
          <div class="timeline-line"></div>
          <div class="step" v-for="(s, i) in steps" :key="i">
            <div class="step-left">
              <div class="step-number">{{ i + 1 }}</div>
              <div class="step-connector" v-if="i < steps.length - 1"></div>
            </div>
            <div class="step-content">
              <div class="step-icon">{{ s.icon }}</div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.desc }}</p>
              <div class="step-time">{{ s.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         APP PREVIEW / SCREENSHOTS
    ══════════════════════════════════════════════ -->
    <section id="preview" class="preview-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Preview</div>
          <h2>See It In Action</h2>
          <p>A clean, modern app that guides you every step of the way</p>
        </div>

        <div class="preview-tabs">
          <button
            v-for="(tab, i) in previewTabs"
            :key="i"
            :class="['preview-tab-btn', { active: activePreview === i }]"
            @click="activePreview = i"
          >
            {{ tab.icon }} {{ tab.label }}
          </button>
        </div>

        <div class="preview-window">
          <div class="window-chrome">
            <div class="chrome-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="chrome-title">LinuxLeap — {{ previewTabs[activePreview].label }}</div>
          </div>
          <div class="preview-body">
            <!-- Sidebar mock -->
            <div class="mock-sidebar">
              <div class="mock-brand">
                <div class="mock-logo-dot"></div>
                <span>LinuxLeap</span>
              </div>
              <div
                v-for="(tab, i) in previewTabs" :key="i"
                :class="['mock-nav-item', { active: activePreview === i }]"
                @click="activePreview = i"
              >
                {{ tab.icon }} {{ tab.label }}
              </div>
            </div>
            <!-- Content mock -->
            <div class="mock-content">
              <!-- HOME -->
              <div v-if="activePreview === 0" class="mock-home">
                <div class="mock-hero-card">
                  <div class="mock-hero-text">
                    <div class="mock-h1">Linux Leap 🐧</div>
                    <div class="mock-sub">Switch to Linux without breaking your PC.</div>
                  </div>
                  <button class="mock-cta">🚀  Start Journey</button>
                </div>
                <div class="mock-stats-row">
                  <div class="mock-stat" v-for="s in mockStats" :key="s.v">
                    <div class="mock-stat-val">{{ s.v }}</div>
                    <div class="mock-stat-lbl">{{ s.l }}</div>
                  </div>
                </div>
                <div class="mock-cards-grid">
                  <div class="mock-card" v-for="c in mockCards" :key="c">
                    <div class="mock-card-icon">{{ c.i }}</div>
                    <div class="mock-card-title">{{ c.t }}</div>
                    <div class="mock-card-body">{{ c.d }}</div>
                  </div>
                </div>
              </div>

              <!-- DISTRO FINDER -->
              <div v-if="activePreview === 1" class="mock-quiz">
                <div class="mock-quiz-header">
                  <div class="mock-badge-pill">🔍 DISTRO FINDER</div>
                  <div class="mock-h2">Find Your Perfect Distro</div>
                  <div class="mock-body-sm">Answer 4 quick questions to get matched.</div>
                </div>
                <div class="mock-question" v-for="q in mockQuestions" :key="q.q">
                  <div class="mock-q-text">{{ q.q }}</div>
                  <div class="mock-options">
                    <div :class="['mock-option', { selected: q.selected === 0 }]" @click="q.selected = 0">{{ q.opts[0] }}</div>
                    <div :class="['mock-option', { selected: q.selected === 1 }]" @click="q.selected = 1">{{ q.opts[1] }}</div>
                  </div>
                </div>
                <button class="mock-cta small">🔍 Find My Distro</button>
              </div>

              <!-- LEARNING PATH -->
              <div v-if="activePreview === 2" class="mock-steps">
                <div class="mock-h2">Your Linux Journey 📚</div>
                <div class="mock-step-card" v-for="(s,i) in mockSteps" :key="i">
                  <div :class="['mock-step-num', { done: s.done }]">{{ i + 1 }}</div>
                  <div class="mock-step-info">
                    <div class="mock-step-title">{{ s.t }}</div>
                    <div class="mock-step-desc">{{ s.d }}</div>
                  </div>
                  <div v-if="s.done" class="mock-done-badge">✓</div>
                </div>
              </div>

              <!-- WINDOWS ALTS -->
              <div v-if="activePreview === 3" class="mock-table-view">
                <div class="mock-h2">Windows → Linux 🔄</div>
                <div class="mock-table">
                  <div class="mock-table-head">
                    <span>Windows App</span><span>Linux Alternative</span><span>Category</span>
                  </div>
                  <div class="mock-table-row" v-for="r in mockTableRows" :key="r[0]">
                    <span>{{ r[0] }}</span>
                    <span class="mock-alt">{{ r[1] }}</span>
                    <span class="mock-cat">{{ r[2] }}</span>
                  </div>
                </div>
              </div>

              <!-- GAMING -->
              <div v-if="activePreview === 4" class="mock-gaming">
                <div class="mock-h2">Game on Linux 🎮</div>
                <div class="mock-gaming-stats">
                  <div class="mock-g-stat" v-for="gs in mockGamingStats" :key="gs.v">
                    <div class="mock-g-val">{{ gs.v }}</div>
                    <div class="mock-g-lbl">{{ gs.l }}</div>
                  </div>
                </div>
                <div class="mock-step-card" v-for="(s,i) in mockGamingSteps" :key="i">
                  <div class="mock-step-num">{{ i + 1 }}</div>
                  <div class="mock-step-info">
                    <div class="mock-step-title">{{ s }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="preview-note">
          <span>🖥️</span> Real screenshots of the actual Linux Leap desktop app
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         SYSTEM REQUIREMENTS
    ══════════════════════════════════════════════ -->
    <section class="requirements-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Requirements</div>
          <h2>What You Need</h2>
          <p>LinuxLeap is intentionally lightweight</p>
        </div>
        <div class="req-grid">
          <div class="req-card">
            <div class="req-icon">💻</div>
            <div class="req-title">Operating System</div>
            <div class="req-value">Windows 7, 8, 10, or 11</div>
            <div class="req-note">64-bit recommended</div>
          </div>
          <div class="req-card">
            <div class="req-icon">🧠</div>
            <div class="req-title">RAM</div>
            <div class="req-value">2 GB minimum</div>
            <div class="req-note">4 GB recommended</div>
          </div>
          <div class="req-card">
            <div class="req-icon">💾</div>
            <div class="req-title">Disk Space</div>
            <div class="req-value">~20 MB for the app</div>
            <div class="req-note">Plus space for your backup</div>
          </div>
          <div class="req-card">
            <div class="req-icon">🌐</div>
            <div class="req-title">Internet</div>
            <div class="req-value">Required once</div>
            <div class="req-note">To download your Linux ISO</div>
          </div>
          <div class="req-card">
            <div class="req-icon">🔌</div>
            <div class="req-title">USB Drive</div>
            <div class="req-value">8 GB or larger</div>
            <div class="req-note">For bootable installer</div>
          </div>
          <div class="req-card req-card-green">
            <div class="req-icon">✅</div>
            <div class="req-title">Python</div>
            <div class="req-value">3.11+ included</div>
            <div class="req-note">Bundled in the .exe — nothing extra to install</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         TESTIMONIALS
    ══════════════════════════════════════════════ -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Reviews</div>
          <h2>What Switchers Say</h2>
          <p>Real feedback from people who made the leap</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="t in testimonials" :key="t.name">
            <div class="stars">★★★★★</div>
            <p class="testimonial-text">"{{ t.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar" :style="{ background: t.color }">{{ t.initials }}</div>
              <div>
                <div class="author-name">{{ t.name }}</div>
                <div class="author-sub">{{ t.sub }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         SUPPORT / PRICING
    ══════════════════════════════════════════════ -->
    <section id="support" class="support-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Support</div>
          <h2>LinuxLeap is Free Forever</h2>
          <p>No hidden costs. No premium tiers. Just a free tool to help you switch.</p>
        </div>

        <div class="support-content">
          <!-- Free card -->
          <div class="free-features-card">
            <div class="badge">100% FREE</div>
            <h3>Everything Included</h3>
            <ul class="feature-list">
              <li v-for="item in freeFeatures" :key="item">
                <span class="check">✓</span> {{ item }}
              </li>
            </ul>
            <a href="https://drive.google.com/file/d/1XRCf-jBzytcG7SxxlWwWssr_kwicKKbj/view?usp=sharing"
               class="download-btn" target="_blank" rel="noopener noreferrer">
              Download Free
            </a>
          </div>

          <!-- Support card -->
          <div class="support-card">
            <div class="support-icon">☕</div>
            <h3>Love LinuxLeap?</h3>
            <p class="support-text">
              LinuxLeap is built with love and maintained for free. If it helped you
              make the switch, consider buying me a coffee to keep development going!
            </p>
            <div class="support-options">
              <a href="https://www.paypal.com/paypalme/nerishmelissa3"
                 target="_blank" rel="noopener noreferrer"
                 class="support-btn paypal">
                <span class="btn-icon">💙</span>
                Support via PayPal
              </a>
              <div class="paypal-email">
                <small>Or send directly to:</small>
                <code>nerishmelissa3@gmail.com</code>
              </div>
            </div>
            <div class="support-benefits">
              <p><strong>Your support helps:</strong></p>
              <ul>
                <li v-for="b in supportBenefits" :key="b">{{ b }}</li>
              </ul>
            </div>
            <p class="support-note"><em>Every contribution, big or small, makes a difference. Thank you! 🙏</em></p>
          </div>
        </div>

        <div class="transparency-section">
          <h3>Why Not Charge for LinuxLeap?</h3>
          <p>Linux is about freedom. It wouldn't feel right to charge people for a tool that helps
             them switch to a free operating system. LinuxLeap is 100% free, and those who find
             value in it can choose to support development voluntarily.</p>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         FAQ
    ══════════════════════════════════════════════ -->
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before making the switch</p>
        </div>

        <div class="faq-grid">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            :class="['faq-item', { open: openFaq === i }]"
            @click="toggleFaq(i)"
          >
            <div class="faq-question">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="openFaq === i">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         WHAT IS LINUX (Beginner explainer)
    ══════════════════════════════════════════════ -->
    <section class="linux-explainer">
      <div class="container">
        <div class="explainer-inner">
          <div class="explainer-text">
            <div class="section-tag">New to Linux?</div>
            <h2>What Exactly <em>is</em> Linux?</h2>
            <p>
              Linux is a free, open-source operating system — the software that runs your
              computer, just like Windows. But unlike Windows, Linux is built by a global
              community of volunteers, costs nothing, and respects your privacy.
            </p>
            <p>
              Millions of people use Linux daily — from students to developers to governments.
              It powers everything from Android phones to the world's fastest supercomputers.
            </p>
            <a href="#download" class="btn-primary">Ready? Download LinuxLeap</a>
          </div>
          <div class="explainer-cards">
            <div class="exp-card" v-for="e in explainerPoints" :key="e.title">
              <div class="exp-icon">{{ e.icon }}</div>
              <div>
                <div class="exp-title">{{ e.title }}</div>
                <div class="exp-body">{{ e.body }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         DOWNLOAD CTA
    ══════════════════════════════════════════════ -->
    <section id="download" class="cta-section">
      <div class="cta-bg-grid"></div>
      <div class="container cta-inner">
        <div class="cta-penguin">🐧</div>
        <h2>Ready to Make the Switch?</h2>
        <p>Join 10,000+ people who've already escaped Windows. Download LinuxLeap and start your journey to freedom today.</p>
        <div class="cta-buttons">
          <a href="https://drive.google.com/file/d/1XRCf-jBzytcG7SxxlWwWssr_kwicKKbj/view?usp=sharing"
             class="btn-primary btn-large"
             target="_blank" rel="noopener noreferrer">
            Download LinuxLeap — Free Forever
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="https://drive.google.com/file/d/1XRCf-jBzytcG7SxxlWwWssr_kwicKKbj/view?usp=sharing"
             class="btn-outline-white"
             target="_blank" rel="noopener noreferrer">
            View on GoogleDrive
          </a>
        </div>
        <div class="download-meta">
          <span>✓ No signup required</span>
          <span class="meta-dot">•</span>
          <span>✓ Windows 7, 8, 10, 11</span>
          <span class="meta-dot">•</span>
          <span>✓ ~20MB download</span>
          <span class="meta-dot">•</span>
          <span>✓ Open source</span>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         FOOTER
    ══════════════════════════════════════════════ -->
    <footer>
      <div class="container footer-grid">
        <div class="footer-about">
          <div class="footer-logo">
            <span class="footer-logo-text">Linux<span>Leap</span></span>
          </div>
          <p>A free, open-source tool making the switch to Linux easy, safe, and worry-free.
             Your journey to freedom starts here. 🐧</p>
          <div class="footer-social">
            <a href="https://drive.google.com/file/d/1XRCf-jBzytcG7SxxlWwWssr_kwicKKbj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="social-link">GoogleDrive</a>
            <a href="https://www.paypal.com/paypalme/nerishmelissa3" target="_blank" rel="noopener noreferrer" class="social-link">Donate</a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#preview">Preview</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="https://drive.google.com/file/d/1XRCf-jBzytcG7SxxlWwWssr_kwicKKbj/view?usp=sharing" target="_blank" rel="noopener noreferrer">GoogleDrive</a></li>
            <li><a href="#how-it-works">Tutorials</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#support">Donate</a></li>
            <li><a href="https://www.paypal.com/paypalme/nerishmelissa3" target="_blank" rel="noopener noreferrer">PayPal</a></li>
            <li><a href="mailto:nerishmelissa3@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 LinuxLeap. Free &amp; Open Source. Made with ❤️ for the Linux community.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navScrolled: false,
      mobileOpen: false,
      activePreview: 0,
      openFaq: null,

      features: [
        { icon: '📋', title: 'Backup Your Files', bg: 'linear-gradient(135deg,#e8f9f3,#d0f0e4)', desc: 'Securely save your documents, desktop, and everything important before making the switch. Nothing gets left behind.' },
        { icon: '🎯', title: 'Smart Distro Quiz', bg: 'linear-gradient(135deg,#e8f0ff,#d0e0ff)', desc: 'Answer 4 quick questions and get the perfect Linux distribution matched to your needs and hardware.' },
        { icon: '💿', title: 'USB Creation Guide', bg: 'linear-gradient(135deg,#fff3e8,#ffe0c0)', desc: 'Step-by-step instructions for creating your bootable installation USB drive — no experience needed.' },
        { icon: '📁', title: 'Restore Everything', bg: 'linear-gradient(135deg,#f3e8ff,#e0d0ff)', desc: 'Easily restore your bookmarks and files on your new Linux system after installation.' },
        { icon: '🎮', title: 'Gaming Setup Guide', bg: 'linear-gradient(135deg,#e8fff3,#c0ffd0)', desc: 'Steam, Proton, Lutris — everything you need to run your favourite games on Linux.' },
        { icon: '🔄', title: 'App Alternatives', bg: 'linear-gradient(135deg,#fff8e8,#ffedc0)', desc: 'Find open-source replacements for every Windows app you use daily. 26+ alternatives covered.' },
      ],

      steps: [
        { icon: '📋', title: 'Backup Your Files', desc: 'LinuxLeap scans your Windows PC and backs up all your important files, settings, and bookmarks. Everything is safely stored first.', time: '⏱ ~10 minutes' },
        { icon: '🎯', title: 'Choose Your Linux', desc: 'Take a quick 4-question quiz and we\'ll recommend the perfect Linux distribution for your needs and hardware level.', time: '⏱ ~2 minutes' },
        { icon: '💿', title: 'Create USB & Install', desc: 'Follow our guide to create a bootable USB drive and install Linux alongside (or instead of) Windows with clear step-by-step instructions.', time: '⏱ ~30 minutes' },
        { icon: '🎉', title: 'Restore & Enjoy', desc: 'All your files, bookmarks, and settings are restored to your new Linux system. Welcome to freedom — and it\'s free forever!', time: '⏱ ~5 minutes' },
      ],

      previewTabs: [
        { icon: '🏠', label: 'Home' },
        { icon: '🔍', label: 'Distro Finder' },
        { icon: '📚', label: 'Learning Path' },
        { icon: '🔄', label: 'App Alternatives' },
        { icon: '🎮', label: 'Gaming' },
      ],

      mockStats: [
        { v: '100%', l: 'Free' },
        { v: '7', l: 'Steps' },
        { v: '3+', l: 'Distros' },
        { v: '∞', l: 'Support' },
      ],
      mockCards: [
        { i: '🔍', t: 'Distro Finder', d: 'Find your perfect match' },
        { i: '📚', t: 'Learning Path', d: '7-step guide' },
        { i: '🔄', t: 'App Alternatives', d: '26+ replacements' },
        { i: '🎮', t: 'Gaming Setup', d: 'Steam + Proton' },
      ],
      mockQuestions: [
        { q: 'Do you play PC games?', opts: ['Yes, I game a lot 🎮', 'No gaming 🚫'], selected: null },
        { q: 'What hardware do you have?', opts: ['Old / Low-end PC 🖥️', 'Modern laptop 💻'], selected: null },
      ],
      mockSteps: [
        { t: 'Why Linux?', d: 'Understand the open-source philosophy', done: true },
        { t: 'Choose your distro', d: 'Ubuntu, Mint, or Fedora?', done: true },
        { t: 'Create bootable USB', d: 'Flash your ISO with Balena Etcher', done: false },
        { t: 'Dual boot safely', d: 'Keep Windows alongside Linux', done: false },
      ],
      mockTableRows: [
        ['Photoshop', 'GIMP', 'Image Editing'],
        ['MS Office', 'LibreOffice', 'Office Suite'],
        ['Notepad++', 'Kate', 'Text Editor'],
        ['After Effects', 'Natron', 'Motion Graphics'],
      ],
      mockGamingStats: [
        { v: '80%+', l: 'Steam compatible' },
        { v: '7,000+', l: 'Verified titles' },
      ],
      mockGamingSteps: [
        'Install Steam (native Linux client)',
        'Enable Steam Play / Proton',
        'Install MangoHud for FPS overlay',
        'Use Heroic for Epic & GOG games',
      ],

      testimonials: [
        { text: 'I was so scared about losing my files. LinuxLeap backed everything up first and walked me through every single step. I\'m now on Ubuntu and love it!', name: 'Sarah M.', sub: 'Switched to Ubuntu', initials: 'SM', color: '#3fb582' },
        { text: 'The distro quiz recommended Linux Mint for my old laptop and it was perfect. My 8-year-old PC runs faster than ever. Incredible tool.', name: 'James T.', sub: 'Switched to Linux Mint', initials: 'JT', color: '#4a9fde' },
        { text: 'As a gamer I was worried about my Steam library. The gaming guide was so thorough. 95% of my games work perfectly with Proton.', name: 'Alex K.', sub: 'Switched to Pop!_OS', initials: 'AK', color: '#7c5cbf' },
        { text: 'Never thought I could do this. The step-by-step guide made dual booting feel completely safe. Now I use Linux every day for work.', name: 'Priya N.', sub: 'Switched to Fedora', initials: 'PN', color: '#e05c5c' },
        { text: 'The Windows app alternatives page alone was worth it. Found Linux replacements for every single app I was using. GIMP is amazing.', name: 'Marco D.', sub: 'Switched to Ubuntu', initials: 'MD', color: '#e0843c' },
        { text: 'I love that it\'s completely free with no upsells. The developer clearly cares about the Linux community. Donated to say thank you!', name: 'Chen L.', sub: 'Switched to Arch btw', initials: 'CL', color: '#3fb582' },
      ],

      freeFeatures: [
        'Automatic file & bookmark backup',
        'Smart Linux distro recommendations',
        'Step-by-step installation guide',
        'Windows app alternatives guide',
        'Gaming setup (Steam + Proton)',
        'File restoration tools',
        'Lifetime access — no expiry',
        'No registration or account needed',
        'Open source — inspect the code',
        'Community support via GoogleDrive',
      ],

      supportBenefits: [
        '🚀 Keep LinuxLeap free forever',
        '✨ Add new features and improvements',
        '🐛 Fix bugs and maintain the codebase',
        '📚 Create tutorials and documentation',
        '💻 Pay for hosting and domain costs',
      ],

      faqs: [
        { q: 'Will I lose my Windows installation?', a: 'No! LinuxLeap guides you through dual booting — installing Linux alongside Windows. You choose which OS to boot each time you start your PC. Your Windows installation is untouched.' },
        { q: 'What happens to my files?', a: 'LinuxLeap backs up your files before you do anything. Your documents, photos, bookmarks, and settings are safely saved so they can be restored after switching.' },
        { q: 'Do I need any technical knowledge?', a: 'Absolutely not. LinuxLeap is designed specifically for complete beginners. Every step has clear instructions with screenshots and explanations. If you can follow a recipe, you can switch to Linux.' },
        { q: 'Which Linux should I choose?', a: 'Use the built-in Distro Finder quiz! It asks 4 simple questions about your hardware, gaming habits, and experience level, then recommends the best distro for you — usually Ubuntu, Linux Mint, Fedora, or Pop!_OS.' },
        { q: 'Can I still play my games on Linux?', a: 'Yes! Thanks to Steam\'s Proton compatibility layer, over 80% of the Steam library runs on Linux — often at native Windows performance. LinuxLeap includes a dedicated Gaming Setup guide covering Steam, Proton, Lutris, and more.' },
        { q: 'What if something goes wrong?', a: 'Because LinuxLeap backs up your files first and uses dual boot (keeping Windows intact), you can always boot back into Windows if anything goes wrong. Nothing is permanent until you choose to remove Windows yourself.' },
        { q: 'Is my data safe? Does LinuxLeap send data anywhere?', a: 'LinuxLeap is 100% offline — it never connects to any server or sends any data anywhere. It\'s also open source, so you can inspect every line of code on GoogleDrive to verify this yourself.' },
        { q: 'How long does the switch take?', a: 'The full process typically takes 45–60 minutes: ~10 minutes to back up files, ~2 minutes for the quiz, ~30 minutes to install Linux, and ~5 minutes to restore your files. You\'ll be on Linux in under an hour.' },
        { q: 'What about my Windows apps?', a: 'LinuxLeap includes a comprehensive Windows App Alternatives guide with 26+ direct replacements — GIMP for Photoshop, LibreOffice for Office, Kate for Notepad++, and many more. Almost every Windows app has a free Linux equivalent.' },
        { q: 'Is LinuxLeap really free? What\'s the catch?', a: 'There is no catch. LinuxLeap is genuinely free, with no premium tier, no ads, and no data collection. The developer built it because Linux is about freedom, and charging to help people get there felt wrong. Optional donations help keep development going.' },
      ],

      explainerPoints: [
        { icon: '🆓', title: 'Completely Free', body: 'Linux costs nothing. No licence fees, no subscriptions — ever.' },
        { icon: '🔒', title: 'Private by Design', body: 'No telemetry, no tracking, no ads baked into your OS.' },
        { icon: '⚡', title: 'Blazing Fast', body: 'Runs great on old hardware. Breathe life into any PC.' },
        { icon: '🌍', title: 'Community Backed', body: 'Millions of developers worldwide maintain and improve it daily.' },
        { icon: '🛡️', title: 'Secure', body: 'Built-in security model. Viruses are nearly unheard of on Linux.' },
        { icon: '🎨', title: 'Fully Customisable', body: 'Change anything — your desktop, apps, even the kernel.' },
      ],
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.setupAnchorScroll()
    this.setupObserver()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      this.navScrolled = window.scrollY > 60
    },

    setupAnchorScroll() {
      document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]')
        if (!a) return
        const href = a.getAttribute('href')
        if (!href || href === '#') return
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        this.mobileOpen = false
      })
    },

    setupObserver() {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

      setTimeout(() => {
        document.querySelectorAll('.feature-card, .step, .testimonial-card, .req-card, .faq-item').forEach(el => {
          el.classList.add('reveal')
          obs.observe(el)
        })
      }, 100)
    },

    toggleMobileMenu() {
      this.mobileOpen = !this.mobileOpen
    },

    closeMobile() {
      this.mobileOpen = false
    },

    toggleFaq(i) {
      this.openFaq = this.openFaq === i ? null : i
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

/* ══ Reset & Base ══════════════════════════════════ */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --green: #3fb582;
  --green-dark: #2d9168;
  --green-light: #7dd3ae;
  --green-pale: #e8f9f3;
  --blue: #4a9fde;
  --blue-dark: #1e3a5f;
  --text-dark: #1a2332;
  --text-gray: #5a6c7d;
  --text-light: #8fa0b0;
  --bg: #f8feff;
  --white: #ffffff;
  --border: rgba(63,181,130,0.15);
  --shadow-sm: 0 2px 12px rgba(0,0,0,0.06);
  --shadow-md: 0 8px 32px rgba(0,0,0,0.1);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.12);
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 999px;
}
html { scroll-behavior: smooth; }
body {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--text-dark);
  background: var(--bg);
  line-height: 1.6;
  overflow-x: hidden;
}
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

/* ══ Reveal Animations ══════════════════════════════ */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.feature-card.reveal:nth-child(2) { transition-delay: 0.1s; }
.feature-card.reveal:nth-child(3) { transition-delay: 0.2s; }
.feature-card.reveal:nth-child(4) { transition-delay: 0.3s; }
.feature-card.reveal:nth-child(5) { transition-delay: 0.4s; }
.feature-card.reveal:nth-child(6) { transition-delay: 0.5s; }
.testimonial-card.reveal:nth-child(2) { transition-delay: 0.1s; }
.testimonial-card.reveal:nth-child(3) { transition-delay: 0.2s; }

/* ══ Shared ═════════════════════════════════════════ */
.section-tag {
  display: inline-block;
  background: var(--green-pale);
  color: var(--green-dark);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.35rem 1rem;
  border-radius: var(--radius-full);
  margin-bottom: 1rem;
}
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.section-header p { font-size: 1.1rem; color: var(--text-gray); max-width: 540px; margin: 0 auto; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--green);
  color: white;
  padding: 0.9rem 2.2rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.25s ease;
  box-shadow: 0 6px 24px rgba(63,181,130,0.35);
  border: none; cursor: pointer;
}
.btn-primary:hover { background: var(--green-dark); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(63,181,130,0.45); }
.btn-primary.btn-large { font-size: 1.15rem; padding: 1.1rem 2.8rem; }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: transparent;
  color: var(--text-dark);
  padding: 0.9rem 2rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid var(--border);
  transition: all 0.25s ease;
}
.btn-ghost:hover { border-color: var(--green); color: var(--green); background: var(--green-pale); }

.btn-outline-white {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: transparent;
  color: white;
  padding: 1rem 2.2rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  border: 2px solid rgba(255,255,255,0.5);
  transition: all 0.25s ease;
}
.btn-outline-white:hover { background: rgba(255,255,255,0.15); border-color: white; }

/* ══ Nav ══════════════════════════════════════════ */
nav {
  position: fixed; top: 0; left: 0; right: 0;
  background: rgba(248,254,255,0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 1000;
  padding: 1rem 2rem;
  box-shadow: 0 1px 0 var(--border);
  transition: box-shadow 0.3s ease;
  animation: slideDown 0.5s ease-out both;
}
nav.scrolled { box-shadow: 0 4px 24px rgba(0,0,0,0.1); }
@keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.nav-inner { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; transition: transform 0.2s; }
.logo:hover { transform: scale(1.04); }
.logo-mark { width: 38px; height: 38px; flex-shrink: 0; }
.logo-text { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--text-dark); }
.logo-text span { color: var(--green); }
.nav-links { display: flex; gap: 2rem; align-items: center; list-style: none; }
.nav-links a { color: var(--text-gray); text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: color 0.2s; position: relative; }
.nav-links a:not(.cta-btn)::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--green); transition: width 0.2s; border-radius: 2px; }
.nav-links a:not(.cta-btn):hover::after { width: 100%; }
.nav-links a:hover { color: var(--green); }
.cta-btn { background: var(--green) !important; color: white !important; padding: 0.6rem 1.5rem; border-radius: var(--radius-full); font-weight: 600 !important; box-shadow: 0 4px 16px rgba(63,181,130,0.3); transition: all 0.2s !important; }
.cta-btn:hover { background: var(--green-dark) !important; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(63,181,130,0.4) !important; }
.mobile-menu-btn { display: none; background: none; border: 1.5px solid var(--border); border-radius: 8px; width: 38px; height: 38px; font-size: 1.1rem; cursor: pointer; color: var(--text-dark); transition: all 0.2s; }
.mobile-menu-btn:hover { border-color: var(--green); color: var(--green); }

/* ══ Hero ═════════════════════════════════════════ */
.hero {
  margin-top: 72px;
  padding: 5rem 2rem 0;
  background: linear-gradient(160deg, #f8feff 0%, #edfaf4 60%, #f0f7ff 100%);
  position: relative; overflow: hidden;
}
.hero-bg-dots {
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(circle, rgba(63,181,130,0.08) 1px, transparent 1px);
  background-size: 32px 32px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding-bottom: 3rem;
}
.hero-content { animation: fadeInLeft 0.7s ease-out both; }
@keyframes fadeInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }

.hero-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--green-pale);
  color: var(--green-dark);
  border: 1px solid rgba(63,181,130,0.3);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.badge-dot { width: 7px; height: 7px; background: var(--green); border-radius: 50%; display: inline-block; animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.7; } }

.hero h1 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  color: var(--text-dark);
  letter-spacing: -1px;
}
.hero h1 .highlight { color: var(--green); display: block; }
.hero > .container > .hero-grid > .hero-content > p { font-size: 1.15rem; color: var(--text-gray); margin-bottom: 2rem; line-height: 1.8; }
.hero-content p strong { color: var(--text-dark); }
.hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
.trust-badges { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.trust-badge { display: flex; align-items: center; gap: 0.5rem; color: var(--text-gray); font-size: 0.9rem; }
.tbadge-icon { width: 22px; height: 22px; background: var(--green); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.72rem; flex-shrink: 0; }

.hero-image { position: relative; animation: fadeInRight 0.7s ease-out 0.15s both; }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
.penguin-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 320px; height: 320px; background: radial-gradient(circle, rgba(63,181,130,0.2) 0%, transparent 70%); border-radius: 50%; pointer-events: none; }
.penguin-container { position: relative; max-width: 460px; margin: 0 auto; animation: gentleBob 4s ease-in-out infinite; }
@keyframes gentleBob { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-16px) rotate(1deg); } }
.penguin-svg { width: 100%; height: auto; filter: drop-shadow(0 24px 48px rgba(0,0,0,0.12)); }

.float-card {
  position: absolute;
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem;
  display: flex; align-items: center; gap: 0.75rem;
  box-shadow: var(--shadow-md);
  animation: floatIn 0.8s ease-out both;
}
.float-card-1 { bottom: 80px; left: -20px; animation-delay: 0.4s; }
.float-card-2 { top: 60px; right: -10px; animation-delay: 0.6s; }
@keyframes floatIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
.fc-icon { font-size: 1.4rem; }
.fc-title { font-weight: 700; font-size: 0.85rem; color: var(--text-dark); }
.fc-sub { font-size: 0.75rem; color: var(--text-light); }

.social-proof-bar {
  background: white;
  border-top: 1px solid var(--border);
  padding: 1.25rem 2rem;
  margin-top: 2rem;
}
.sp-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.sp-item { display: flex; flex-direction: column; align-items: center; }
.sp-num { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--green); }
.sp-label { font-size: 0.8rem; color: var(--text-light); }
.sp-divider { width: 1px; height: 36px; background: var(--border); }

/* ══ Features ════════════════════════════════════ */
.features { padding: 6rem 2rem; background: white; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.feature-card {
  background: var(--bg);
  padding: 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  cursor: default;
}
.feature-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); border-color: var(--green); }
.feature-icon-wrap { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; }
.feature-icon { font-size: 1.8rem; }
.feature-card h3 { font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.6rem; color: var(--text-dark); }
.feature-card p { color: var(--text-gray); font-size: 0.95rem; line-height: 1.7; }

/* ══ How It Works ════════════════════════════════ */
.how-it-works { padding: 6rem 2rem; background: linear-gradient(160deg, var(--bg) 0%, #edf9f4 100%); }
.steps-timeline { max-width: 760px; margin: 0 auto; position: relative; }
.step { display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
.step-left { display: flex; flex-direction: column; align-items: center; }
.step-number {
  width: 64px; height: 64px;
  background: linear-gradient(135deg, var(--green), var(--blue));
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 800; color: white;
  box-shadow: 0 8px 24px rgba(63,181,130,0.35);
  flex-shrink: 0;
  position: relative; z-index: 1;
}
.step-connector { width: 2px; flex: 1; background: linear-gradient(to bottom, var(--green), transparent); margin: 0.5rem 0; min-height: 40px; }
.step-content {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;
  margin-bottom: 0.5rem;
}
.step-content:hover { box-shadow: var(--shadow-md); transform: translateX(4px); }
.step-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
.step-content h3 { font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-dark); }
.step-content p { color: var(--text-gray); font-size: 0.95rem; line-height: 1.7; margin-bottom: 0.75rem; }
.step-time { display: inline-block; background: var(--green-pale); color: var(--green-dark); font-size: 0.8rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); }

/* ══ Preview ═════════════════════════════════════ */
.preview-section { padding: 6rem 2rem; background: white; }
.preview-tabs { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem; }
.preview-tab-btn {
  background: var(--bg);
  color: var(--text-gray);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  padding: 0.5rem 1.25rem;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
}
.preview-tab-btn:hover, .preview-tab-btn.active { background: var(--green); color: white; border-color: var(--green); box-shadow: 0 4px 16px rgba(63,181,130,0.3); }

.preview-window {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.16);
  border: 1px solid var(--border);
  background: #0d0f14;
  max-height: 560px;
}
.window-chrome {
  background: #1a1e2e;
  padding: 0.75rem 1.25rem;
  display: flex; align-items: center; gap: 1rem;
  border-bottom: 1px solid #252a3d;
}
.chrome-dots { display: flex; gap: 6px; }
.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot-red { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green { background: #28c840; }
.chrome-title { color: #8892b0; font-size: 0.82rem; font-family: 'DM Sans', sans-serif; }

.preview-body { display: flex; height: 480px; }
.mock-sidebar {
  width: 200px;
  min-width: 200px;
  background: #10121a;
  border-right: 1px solid #252a3d;
  padding: 1.25rem 0;
  display: flex; flex-direction: column; gap: 0.25rem;
}
.mock-brand { padding: 0 1rem 1rem; display: flex; align-items: center; gap: 0.5rem; }
.mock-logo-dot { width: 28px; height: 28px; background: var(--green); border-radius: 8px; flex-shrink: 0; }
.mock-brand span { font-family: 'Outfit', sans-serif; font-weight: 800; color: #e8eaff; font-size: 1rem; }
.mock-nav-item {
  padding: 0.6rem 1rem;
  color: #8892b0;
  font-size: 0.82rem;
  border-radius: 8px;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.15s;
  font-family: 'DM Sans', sans-serif;
}
.mock-nav-item:hover { background: #1a1e2e; color: #e8eaff; }
.mock-nav-item.active { background: #2a3a6e; color: #5b8cff; border-left: 3px solid #5b8cff; }

.mock-content { flex: 1; overflow-y: auto; padding: 1.5rem; background: #0d0f14; }
.mock-content::-webkit-scrollbar { width: 4px; }
.mock-content::-webkit-scrollbar-track { background: #141720; }
.mock-content::-webkit-scrollbar-thumb { background: #2a3a6e; border-radius: 2px; }

/* Mock Home */
.mock-hero-card { background: linear-gradient(135deg, #1a2456, #1d1a3e); border-radius: 14px; padding: 1.5rem; margin-bottom: 1rem; }
.mock-h1 { font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 900; color: white; margin-bottom: 0.3rem; }
.mock-h2 { font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; color: #e8eaff; margin-bottom: 1rem; }
.mock-sub { font-size: 0.78rem; color: rgba(200,210,255,0.8); margin-bottom: 1rem; }
.mock-body-sm { font-size: 0.75rem; color: #8892b0; margin-bottom: 1rem; }
.mock-cta { background: linear-gradient(135deg, #5b8cff, #a78bfa); color: white; border: none; border-radius: 8px; padding: 0.6rem 1.4rem; font-size: 0.82rem; font-weight: 700; cursor: pointer; margin-top: 0.5rem; }
.mock-cta.small { font-size: 0.78rem; padding: 0.5rem 1.2rem; }
.mock-stats-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 0.5rem; margin-bottom: 1rem; }
.mock-stat { background: #1a1e2e; border: 1px solid #252a3d; border-radius: 10px; padding: 0.6rem; text-align: center; }
.mock-stat-val { font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 800; color: #5b8cff; }
.mock-stat-lbl { font-size: 0.65rem; color: #4a526e; margin-top: 2px; }
.mock-cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
.mock-card { background: #1a1e2e; border: 1px solid #252a3d; border-radius: 10px; padding: 0.75rem; }
.mock-card-icon { font-size: 1rem; margin-bottom: 0.25rem; }
.mock-card-title { font-size: 0.75rem; font-weight: 700; color: #e8eaff; }
.mock-card-body { font-size: 0.65rem; color: #8892b0; margin-top: 2px; }

/* Mock Quiz */
.mock-quiz-header { background: #2a3a6e; border: 1px solid #5b8cff; border-radius: 12px; padding: 1rem; margin-bottom: 1rem; }
.mock-badge-pill { display: inline-block; background: rgba(91,140,255,0.2); color: #5b8cff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 6px; margin-bottom: 0.4rem; }
.mock-question { margin-bottom: 1rem; }
.mock-q-text { font-size: 0.82rem; font-weight: 600; color: #e8eaff; margin-bottom: 0.5rem; }
.mock-options { display: flex; flex-direction: column; gap: 0.3rem; }
.mock-option { background: #1a1e2e; border: 1px solid #252a3d; color: #8892b0; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.75rem; cursor: pointer; transition: all 0.15s; }
.mock-option:hover { border-color: #5b8cff; color: #5b8cff; }
.mock-option.selected { background: #2a3a6e; border-color: #5b8cff; color: #5b8cff; font-weight: 600; }

/* Mock Steps */
.mock-step-card { display: flex; align-items: flex-start; gap: 0.75rem; background: #1a1e2e; border: 1px solid #252a3d; border-radius: 10px; padding: 0.75rem; margin-bottom: 0.5rem; }
.mock-step-num { width: 32px; height: 32px; min-width: 32px; background: linear-gradient(135deg,#5b8cff,#a78bfa); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 800; color: white; }
.mock-step-num.done { background: #3dd68c; }
.mock-step-info { flex: 1; }
.mock-step-title { font-size: 0.82rem; font-weight: 700; color: #e8eaff; }
.mock-step-desc { font-size: 0.7rem; color: #8892b0; margin-top: 2px; }
.mock-done-badge { background: rgba(61,214,140,0.15); color: #3dd68c; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 6px; }

/* Mock Table */
.mock-table { background: #1a1e2e; border: 1px solid #252a3d; border-radius: 10px; overflow: hidden; }
.mock-table-head { display: grid; grid-template-columns: 1fr 1fr 0.8fr; padding: 0.6rem 0.75rem; background: #141720; font-size: 0.65rem; font-weight: 700; color: #4a526e; text-transform: uppercase; letter-spacing: 0.5px; }
.mock-table-row { display: grid; grid-template-columns: 1fr 1fr 0.8fr; padding: 0.55rem 0.75rem; border-top: 1px solid #252a3d; font-size: 0.75rem; color: #e8eaff; }
.mock-alt { color: #5b8cff; font-weight: 600; }
.mock-cat { color: #8892b0; font-size: 0.68rem; }

/* Mock Gaming */
.mock-gaming-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem; }
.mock-g-stat { background: #2a3a6e; border: 1px solid #5b8cff; border-radius: 10px; padding: 0.75rem; text-align: center; }
.mock-g-val { font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 800; color: #5b8cff; }
.mock-g-lbl { font-size: 0.65rem; color: #8892b0; margin-top: 2px; }

.preview-note { text-align: center; margin-top: 1.5rem; color: var(--text-light); font-size: 0.88rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }

/* ══ Requirements ════════════════════════════════ */
.requirements-section { padding: 5rem 2rem; background: var(--bg); }
.req-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
.req-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;
}
.req-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.req-card-green { border-color: var(--green); background: var(--green-pale); }
.req-icon { font-size: 2rem; margin-bottom: 0.75rem; }
.req-title { font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.3rem; }
.req-value { font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.25rem; }
.req-note { font-size: 0.8rem; color: var(--text-gray); }

/* ══ Testimonials ════════════════════════════════ */
.testimonials-section { padding: 6rem 2rem; background: white; }
.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
.testimonial-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  transition: all 0.3s;
}
.testimonial-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--green); }
.stars { color: #f5a623; font-size: 1.1rem; margin-bottom: 0.75rem; letter-spacing: 2px; }
.testimonial-text { color: var(--text-gray); font-size: 0.95rem; line-height: 1.75; margin-bottom: 1.25rem; font-style: italic; }
.testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
.author-avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; }
.author-name { font-weight: 700; font-size: 0.9rem; color: var(--text-dark); }
.author-sub { font-size: 0.78rem; color: var(--text-light); }

/* ══ Support ════════════════════════════════════ */
.support-section { padding: 6rem 2rem; background: var(--bg); }
.support-content { display: grid; grid-template-columns: 1fr 1.2fr; gap: 2.5rem; margin-bottom: 3rem; max-width: 1100px; margin-left: auto; margin-right: auto; margin-bottom: 3rem; }
.free-features-card { background: white; padding: 2.5rem; border-radius: var(--radius-lg); border: 2px solid var(--green); box-shadow: var(--shadow-sm); }
.badge { background: var(--green); color: white; display: inline-block; padding: 0.35rem 1.2rem; border-radius: var(--radius-full); font-weight: 700; margin-bottom: 1.25rem; font-size: 0.82rem; letter-spacing: 0.5px; }
.free-features-card h3 { font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--text-dark); }
.feature-list { list-style: none; margin: 1.5rem 0; display: flex; flex-direction: column; gap: 0.6rem; }
.feature-list li { display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem; color: var(--text-dark); }
.check { color: var(--green); font-weight: 700; font-size: 1rem; }
.download-btn { display: block; width: 100%; padding: 1rem; background: var(--green); color: white; text-align: center; border-radius: var(--radius-full); text-decoration: none; font-weight: 700; font-size: 1rem; margin-top: 1.5rem; transition: all 0.25s; box-shadow: 0 6px 20px rgba(63,181,130,0.3); }
.download-btn:hover { background: var(--green-dark); transform: translateY(-2px); }
.support-card { background: white; padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border); box-shadow: var(--shadow-sm); }
.support-icon { width: 70px; height: 70px; background: linear-gradient(135deg,#ff6b6b,#ffd93d); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1.25rem; box-shadow: 0 8px 24px rgba(255,107,107,0.25); }
.support-card h3 { font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-dark); }
.support-text { color: var(--text-gray); line-height: 1.8; margin-bottom: 1.5rem; }
.support-options { margin: 1.5rem 0; }
.support-btn { display: flex; align-items: center; justify-content: center; gap: 0.75rem; width: 100%; padding: 1rem 1.5rem; border-radius: var(--radius-full); text-decoration: none; font-weight: 700; font-size: 1rem; transition: all 0.25s; }
.support-btn.paypal { background: #0070ba; color: white; box-shadow: 0 6px 20px rgba(0,112,186,0.3); }
.support-btn.paypal:hover { background: #005ea6; transform: translateY(-2px); }
.btn-icon { font-size: 1.2rem; }
.paypal-email { text-align: center; padding: 1.2rem; background: var(--bg); border-radius: var(--radius-md); margin-top: 1.25rem; }
.paypal-email small { display: block; color: var(--text-light); margin-bottom: 0.4rem; font-size: 0.82rem; }
.paypal-email code { background: white; border: 1px solid var(--border); padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.9rem; color: var(--text-dark); display: inline-block; }
.support-benefits { margin: 1.5rem 0; padding: 1.25rem; background: var(--bg); border-radius: var(--radius-md); }
.support-benefits p { font-weight: 700; margin-bottom: 0.75rem; }
.support-benefits ul { list-style: none; display: flex; flex-direction: column; gap: 0.4rem; }
.support-benefits li { font-size: 0.9rem; color: var(--text-gray); }
.support-note { text-align: center; margin-top: 1.25rem; color: var(--text-gray); font-size: 0.9rem; }
.transparency-section { max-width: 760px; margin: 0 auto; text-align: center; padding: 2.5rem; background: white; border-radius: var(--radius-lg); border: 1px solid var(--border); }
.transparency-section h3 { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-dark); }
.transparency-section p { color: var(--text-gray); line-height: 1.8; }

/* ══ FAQ ════════════════════════════════════════ */
.faq-section { padding: 6rem 2rem; background: white; }
.faq-grid { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.75rem; }
.faq-item {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}
.faq-item:hover { border-color: var(--green); }
.faq-item.open { border-color: var(--green); box-shadow: 0 4px 20px rgba(63,181,130,0.1); }
.faq-question {
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
  padding: 1.1rem 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-dark);
  user-select: none;
}
.faq-icon { font-size: 1.3rem; color: var(--green); font-weight: 300; flex-shrink: 0; }
.faq-answer { padding: 0 1.5rem 1.25rem; }
.faq-answer p { color: var(--text-gray); line-height: 1.8; font-size: 0.95rem; }

/* ══ Linux Explainer ════════════════════════════ */
.linux-explainer { padding: 5rem 2rem; background: linear-gradient(160deg, #edf9f4 0%, var(--bg) 100%); }
.explainer-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
.explainer-text .section-tag { text-align: left; }
.explainer-text h2 { font-family: 'Outfit', sans-serif; font-size: 2.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 1.25rem; line-height: 1.2; }
.explainer-text h2 em { font-style: italic; color: var(--green); }
.explainer-text p { color: var(--text-gray); line-height: 1.8; margin-bottom: 1rem; }
.explainer-text .btn-primary { margin-top: 0.75rem; }
.explainer-cards { display: flex; flex-direction: column; gap: 0.75rem; }
.exp-card { display: flex; align-items: flex-start; gap: 1rem; background: white; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; transition: all 0.2s; }
.exp-card:hover { border-color: var(--green); transform: translateX(4px); }
.exp-icon { font-size: 1.4rem; flex-shrink: 0; }
.exp-title { font-weight: 700; font-size: 0.9rem; color: var(--text-dark); margin-bottom: 0.2rem; }
.exp-body { font-size: 0.82rem; color: var(--text-gray); line-height: 1.5; }

/* ══ Download CTA ════════════════════════════════ */
.cta-section {
  padding: 7rem 2rem;
  background: linear-gradient(135deg, #1a3d2e 0%, #1e3a5f 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-bg-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}
.cta-inner { position: relative; z-index: 1; }
.cta-penguin { font-size: 3rem; margin-bottom: 1.5rem; animation: gentleBob 3s ease-in-out infinite; }
.cta-section h2 { font-family: 'Outfit', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin-bottom: 1rem; line-height: 1.2; }
.cta-section > .container > p { font-size: 1.2rem; margin-bottom: 2.5rem; opacity: 0.88; max-width: 600px; margin-left: auto; margin-right: auto; }
.cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
.download-meta { color: rgba(255,255,255,0.65); font-size: 0.9rem; display: flex; gap: 0.75rem; justify-content: center; align-items: center; flex-wrap: wrap; }
.meta-dot { opacity: 0.4; }

/* ══ Footer ══════════════════════════════════════ */
footer { background: #1a2332; color: white; padding: 4rem 2rem 1.5rem; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 2.5rem; }
.footer-logo { margin-bottom: 1rem; }
.footer-logo-text { font-family: 'Outfit', sans-serif; font-size: 1.4rem; font-weight: 800; color: white; }
.footer-logo-text span { color: var(--green); }
.footer-about p { color: rgba(255,255,255,0.6); line-height: 1.8; font-size: 0.9rem; margin-bottom: 1.25rem; }
.footer-social { display: flex; gap: 1rem; }
.social-link { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); padding: 0.4rem 1rem; border-radius: var(--radius-full); text-decoration: none; font-size: 0.82rem; font-weight: 600; border: 1px solid rgba(255,255,255,0.12); transition: all 0.2s; }
.social-link:hover { background: var(--green); color: white; border-color: var(--green); }
.footer-links h4 { font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.25rem; }
.footer-links ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.footer-links a { color: rgba(255,255,255,0.65); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
.footer-links a:hover { color: var(--green); }
.footer-bottom { text-align: center; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.35); font-size: 0.85rem; }

/* ══ Responsive ══════════════════════════════════ */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
  .hero-image { display: flex; justify-content: center; }
  .penguin-container { max-width: 360px; }
  .float-card-1 { left: 0; bottom: 20px; }
  .float-card-2 { right: 0; top: 20px; }
  .support-content { grid-template-columns: 1fr; }
  .explainer-inner { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .nav-links { display: none; position: absolute; top: 70px; right: 1rem; background: white; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; box-shadow: var(--shadow-lg); flex-direction: column; gap: 0.25rem; width: 220px; z-index: 1100; }
  .nav-links.mobile-open { display: flex; }
  .nav-links li a { padding: 0.6rem 0.75rem; display: block; border-radius: 8px; }
  .mobile-menu-btn { display: flex; align-items: center; justify-content: center; }
  .hero { padding: 3rem 1.5rem 0; }
  .section-header h2 { font-size: 1.8rem; }
  .trust-badges { flex-direction: column; gap: 0.75rem; }
  .cta-section h2 { font-size: 1.8rem; }
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
  .sp-inner { gap: 1rem; }
  .sp-divider { display: none; }
  .step { grid-template-columns: 60px 1fr; }
  .step-number { width: 52px; height: 52px; font-size: 1.3rem; }
  .preview-body { flex-direction: column; height: auto; }
  .mock-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; gap: 0.25rem; padding: 0.75rem; border-right: none; border-bottom: 1px solid #252a3d; }
  .mock-brand { display: none; }
  .mock-nav-item { margin: 0; font-size: 0.7rem; padding: 0.4rem 0.6rem; }
  .mock-content { max-height: 360px; }
}
</style>
