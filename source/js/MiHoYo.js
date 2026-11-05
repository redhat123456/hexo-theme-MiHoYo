/* MiHoYo theme - anime effects
 * Sakura petals + click sparkles. All effects respect prefers-reduced-motion.
 */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- sakura petals ---------- */
  function initSakura() {
    if (reducedMotion) return;

    var canvas = document.createElement('canvas');
    canvas.id = 'sakura-canvas';
    canvas.style.cssText =
      'position:fixed;left:0;top:0;width:100%;height:100%;' +
      'pointer-events:none;z-index:9999;';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var petals = [];
    var PETAL_COUNT = Math.min(24, Math.max(10, Math.floor(window.innerWidth / 60)));
    var COLORS = [
      'rgba(86,193,241,0.7)',
      'rgba(61,142,247,0.6)',
      'rgba(120,170,255,0.65)'
    ];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function Petal(initial) {
      this.reset = function () {
        this.x = Math.random() * canvas.width;
        this.y = initial ? Math.random() * canvas.height * -1 : -20;
        this.size = 6 + Math.random() * 8;
        this.speedY = 0.6 + Math.random() * 1.2;
        this.speedX = 0.4 + Math.random() * 0.8;
        this.sway = Math.random() * Math.PI * 2;
        this.swaySpeed = 0.008 + Math.random() * 0.02;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.opacity = 0.5 + Math.random() * 0.5;
      };
      this.reset();
      if (initial) this.y = Math.random() * canvas.height;
    }

    for (var i = 0; i < PETAL_COUNT; i++) petals.push(new Petal(true));

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      // petal shape: two quadratic curves forming a soft teardrop
      ctx.moveTo(0, -p.size * 0.5);
      ctx.quadraticCurveTo(p.size * 0.6, -p.size * 0.2, 0, p.size * 0.6);
      ctx.quadraticCurveTo(-p.size * 0.6, -p.size * 0.2, 0, -p.size * 0.5);
      ctx.fill();
      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < petals.length; i++) {
        var p = petals[i];
        p.sway += p.swaySpeed;
        p.x += p.speedX + Math.sin(p.sway) * 0.6;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        if (p.y > canvas.height + 20 || p.x > canvas.width + 40) p.reset();
        drawPetal(p);
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- click sparkles ---------- */
  function initSparkles() {
    if (reducedMotion) return;
    var EMOJIS = ['✨', '⚡', '⭐'];
    document.addEventListener('click', function (e) {
      var el = document.createElement('span');
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      el.style.cssText =
        'position:fixed;left:' + e.clientX + 'px;top:' + e.clientY + 'px;' +
        'pointer-events:none;z-index:10000;font-size:20px;' +
        'transform:translate(-50%,-50%);transition:all .8s ease-out;opacity:1;';
      document.body.appendChild(el);
      requestAnimationFrame(function () {
        el.style.transform = 'translate(-50%,-180%) scale(1.6)';
        el.style.opacity = '0';
      });
      setTimeout(function () {
        el.remove();
      }, 900);
    });
  }

  /* ---------- dark / light mode toggle ---------- */
  function initThemeToggle() {
    var THEME_KEY = 'mihoyo-theme';
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', '切换深色/浅色模式');
    btn.title = '黑白模式切换';

    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* noop */ }
    var dark = saved === 'dark';

    function syncUtterances(isDark) {
      // utterances iframe may load after us; retry briefly on init
      var iframe = document.querySelector('.comments iframe');
      if (!iframe) return false;
      try {
        iframe.contentWindow.postMessage(
          { type: 'set-theme', theme: isDark ? 'github-dark' : 'github-light' },
          'https://utteranc.es'
        );
      } catch (e) { /* noop */ }
      return true;
    }

    function apply(isDark, sync) {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      btn.textContent = isDark ? '☀️' : '🌙';
      if (sync) syncUtterances(isDark);
    }

    btn.addEventListener('click', function () {
      dark = !dark;
      apply(dark, true);
      try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch (e) { /* noop */ }
    });

    apply(dark, false);
    document.body.appendChild(btn);

    // keep utterances in sync while it loads after the toggle init
    if (dark) {
      var tries = 0;
      var timer = setInterval(function () {
        if (syncUtterances(dark) || ++tries >= 10) clearInterval(timer);
      }, 1000);
    }
  }

  /* ---------- welcome console message ---------- */
  function initConsole() {
    try {
      console.log(
        '%c(｡･ω･｡)ﾉ♡ 欢迎来到 Tanger 的博客～ TECH OTAKUS SAVE THE WORLD',
        'color:#3d8ef7;font-size:14px;font-weight:bold;'
      );
    } catch (e) { /* noop */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initSakura();
      initSparkles();
      initThemeToggle();
      initConsole();
    });
  } else {
    initSakura();
    initSparkles();
    initThemeToggle();
    initConsole();
  }
})();
