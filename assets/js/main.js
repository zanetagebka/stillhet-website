(() => {
  'use strict';

  const root = document.documentElement;
  const scenes = JSON.parse(document.getElementById('welcome-data').textContent);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const copy = {
    en: {
      skip: 'Skip to content', navLabel: 'Main navigation', navIdea: 'The idea', navHow: 'How it works', navPromise: 'Our promise', navCta: 'A little escape',
      heroEyebrow: 'LESS SCROLLING. MORE WANDERING.', heroCta: 'Find your quiet', heroCtaNote: 'a small step outside', scroll: 'A little further down',
      carouselDescription: 'carousel', sceneControls: 'Choose a welcome scene', nextScene: 'Next welcome scene', sceneNames: ['Forest welcome', 'Lake welcome', 'Meadow welcome', 'Hills welcome'],
      marginNote: 'a gentler kind\nof getting away', ideaEyebrow: 'HELLO, WE’RE STILLHET.', ideaTitle: 'The world has enough noise.\nLet’s find you a little quiet.',
      ideaBody: 'Some days, you don’t need another recommendation, another list, or another thing to keep up with. You just need somewhere to go.',
      ideaBody2: 'We’re making a small app to help you find peaceful places in nature, close to home. One thoughtful suggestion, so you can stop searching and start being there.', meaning: 'stillhet / Norwegian for quiet, stillness',
      howEyebrow: 'A LITTLE LESS EFFORT.', howTitle: 'Outside, in three small steps.', howIntro: 'Less time making a plan. More time making no plans at all.',
      step1Title: 'What feels like you today?', step1Body: 'A forest, a little water, an open sky. Choose what you’re drawn to and how far you feel like going.', step1Note: 'no wrong answers',
      step2Title: 'A quiet place, picked for you.', step2Body: 'One considered suggestion, with the little things you need to know. A place to explore, rather than a pin to crowd around.', step2Note: 'less choosing, more going',
      step3Title: 'Put your phone away.', step3Body: 'You’ve got your little escape. Go slowly, look around, and leave the place just as peaceful as you found it.', step3Note: 'we’ll be here when you’re back',
      previewEyebrow: 'A SMALL GLIMPSE OF WHAT’S COMING.', previewTitle: 'Where does your\nmind wander?', previewBody: 'You don’t need to know the name of a place. Just how you’d like to feel when you get there.', previewAnnotation: 'go on, try a little daydream →',
      development: 'Stillhet is growing. The app is in development.', paperLabel: 'A PAGE FROM OUR SKETCHBOOK', formTitle: 'A little more…', natureLegend: 'Choose the kind of nature you need',
      forest: 'Forest', lake: 'Water', meadow: 'Meadows', hills: 'Hills', timeLegend: 'And a little time to get there.', minutes: 'min', previewCta: 'Picture my little escape',
      previewDisclaimer: 'An illustrated preview, not a real place recommendation.', tryAgain: 'Let your mind wander somewhere else',
      promiseEyebrow: 'QUIET PLACES SHOULD STAY THAT WAY.', promiseTitle: 'A little care.\nFor you. And for the place.', promiseBody: 'Finding a peaceful place shouldn’t take its peace away. We’re building Stillhet around that simple thought.',
      promise1: 'Areas to explore, not secret spots to expose.', promise2: 'Thoughtful suggestions that help spread the footsteps.', promise3: 'No social feed. No public visit history. Room for privacy.', promiseNote: 'take a breath. leave only light footsteps.',
      closingEyebrow: 'SOMETHING QUIET IS TAKING ROOT.', closingTitle: 'A little less online.\nA little more alive.', closingBody: 'Stillhet is still a seedling. Until it’s ready, there’s probably a patch of sky, a tree, or a quiet path waiting just outside.',
      breatheCta: 'Take a breath with us', closingNote: 'you don’t need an app for that.', footerLine: 'Made for a quieter kind of outside.', footerStatus: 'A little work in progress',
      breathingEyebrow: 'JUST THIS MOMENT.', breathingTitle: 'Nowhere else to be.', breathingCaption: 'A gentle pause. Follow the circle, at your own pace.', closeBreathing: 'Close breathing pause', breatheIn: 'Breathe in…', breatheOut: 'Breathe out…', breatheOwnPace: 'Breathe at your own pace.', pauseMotion: 'Pause animations', resumeMotion: 'Resume animations',
      resultTitles: { forest: 'A quiet woodland.', lake: 'Some still water.', meadow: 'A little open sky.', hills: 'A softer horizon.' },
      resultBodies: { forest: 'Imagine the scent of pine, a little shade, and a path with no hurry in it. A place to listen to something other than your phone.', lake: 'Imagine a quiet bank, reeds moving in the breeze, and water with absolutely nothing to tell you. Sit a while.', meadow: 'Imagine a small path through long grass, a few wildflowers, and room for your thoughts to wander. Nothing to tick off.', hills: 'Imagine open mountain grasslands, a soft breeze in the long grass, and gentle ridges stretching into the distance. Room to breathe.' },
      resultDistance: minutes => `Your daydream: within ${minutes} minutes of home.`,
      announcement: (index, title) => `Welcome ${index + 1} of ${scenes.length}. ${title}`
    },
    pl: {
      skip: 'Przejdź do treści', navLabel: 'Nawigacja główna', navIdea: 'Pomysł', navHow: 'Jak to działa', navPromise: 'Nasza obietnica', navCta: 'Mała ucieczka',
      heroEyebrow: 'MNIEJ PRZEWIJANIA. WIĘCEJ WĘDROWANIA.', heroCta: 'Znajdź swój spokój', heroCtaNote: 'mały krok na zewnątrz', scroll: 'Jeszcze kawałek dalej',
      carouselDescription: 'karuzela', sceneControls: 'Wybierz ekran powitalny', nextScene: 'Następny ekran powitalny', sceneNames: ['Powitanie w lesie', 'Powitanie nad wodą', 'Powitanie na łące', 'Powitanie na wzgórzach'],
      marginNote: 'łagodniejszy sposób\nna małą ucieczkę', ideaEyebrow: 'CZEŚĆ, JESTEŚMY STILLHET.', ideaTitle: 'Świat ma już dość hałasu.\nZnajdźmy Ci trochę ciszy.',
      ideaBody: 'Są dni, kiedy nie potrzebujesz kolejnej rekomendacji, kolejnej listy ani kolejnej rzeczy do nadrobienia. Potrzebujesz tylko miejsca, do którego możesz pójść.',
      ideaBody2: 'Tworzymy małą aplikację, która pomoże Ci znajdować spokojne miejsca w naturze, blisko domu. Jedna przemyślana propozycja, żeby przestać szukać i po prostu tam być.', meaning: 'stillhet / po norwesku: cisza, wyciszenie',
      howEyebrow: 'TROCHĘ MNIEJ WYSIŁKU.', howTitle: 'Na zewnątrz, w trzech małych krokach.', howIntro: 'Mniej czasu na planowanie. Więcej czasu bez planów.',
      step1Title: 'Czego Ci dzisiaj potrzeba?', step1Body: 'Lasu, trochę wody, otwartego nieba. Wybierz to, do czego Cię ciągnie, i czas na dojazd.', step1Note: 'tu nie ma złych odpowiedzi',
      step2Title: 'Spokojne miejsce dla Ciebie.', step2Body: 'Jedna przemyślana propozycja i kilka potrzebnych wskazówek. Obszar do odkrycia, zamiast punktu, przy którym zbiera się tłum.', step2Note: 'mniej wybierania, więcej bycia',
      step3Title: 'Odłóż telefon.', step3Body: 'Masz już swoją małą ucieczkę. Zwolnij, rozejrzyj się i zostaw miejsce tak spokojne, jak je zastałaś lub zastałeś.', step3Note: 'będziemy tu, kiedy wrócisz',
      previewEyebrow: 'MAŁY SZKIC TEGO, CO NADCHODZI.', previewTitle: 'Dokąd wędrują\nTwoje myśli?', previewBody: 'Nie musisz znać nazwy miejsca. Wystarczy wiedzieć, jak chcesz się tam poczuć.', previewAnnotation: 'spróbuj przez chwilę pomarzyć →',
      development: 'Stillhet rośnie. Aplikacja jest w trakcie tworzenia.', paperLabel: 'KARTKA Z NASZEGO SZKICOWNIKA', formTitle: 'Trochę więcej…', natureLegend: 'Wybierz rodzaj natury, którego potrzebujesz',
      forest: 'Lasu', lake: 'Wody', meadow: 'Łąki', hills: 'Wzgórz', timeLegend: 'I trochę czasu na dojazd.', minutes: 'min', previewCta: 'Wyobraź sobie małą ucieczkę',
      previewDisclaimer: 'Ilustrowany podgląd, a nie rekomendacja prawdziwego miejsca.', tryAgain: 'Pozwól myślom powędrować gdzie indziej',
      promiseEyebrow: 'SPOKOJNE MIEJSCA POWINNY TAKIE POZOSTAĆ.', promiseTitle: 'Trochę troski.\nO Ciebie. I o to miejsce.', promiseBody: 'Znalezienie spokojnego miejsca nie powinno odbierać mu spokoju. Wokół tej prostej myśli budujemy Stillhet.',
      promise1: 'Obszary do odkrywania, bez ujawniania sekretnych zakątków.', promise2: 'Przemyślane propozycje, które pomagają rozpraszać ruch.', promise3: 'Bez feedu i publicznej historii wizyt. Z miejscem na prywatność.', promiseNote: 'weź oddech. zostaw tylko lekkie ślady.',
      closingEyebrow: 'COŚ SPOKOJNEGO ZAPUSZCZA KORZENIE.', closingTitle: 'Trochę mniej online.\nTrochę więcej życia.', closingBody: 'Stillhet dopiero kiełkuje. Zanim będzie gotowe, gdzieś tuż obok czeka pewnie kawałek nieba, drzewo albo cicha ścieżka.',
      breatheCta: 'Weź z nami oddech', closingNote: 'do tego nie potrzebujesz aplikacji.', footerLine: 'Z myślą o spokojniejszym byciu w naturze.', footerStatus: 'Mały projekt w drodze',
      breathingEyebrow: 'TYLKO TA CHWILA.', breathingTitle: 'Nie musisz być nigdzie indziej.', breathingCaption: 'Spokojna chwila. Podążaj za kołem we własnym tempie.', closeBreathing: 'Zamknij chwilę oddechu', breatheIn: 'Wdech…', breatheOut: 'Wydech…', breatheOwnPace: 'Oddychaj we własnym tempie.', pauseMotion: 'Wstrzymaj animacje', resumeMotion: 'Wznów animacje',
      resultTitles: { forest: 'Spokojny kawałek lasu.', lake: 'Trochę spokojnej wody.', meadow: 'Kawałek otwartego nieba.', hills: 'Łagodniejszy horyzont.' },
      resultBodies: { forest: 'Wyobraź sobie zapach sosen, trochę cienia i ścieżkę, która nigdzie się nie spieszy. Miejsce, w którym słychać coś innego niż telefon.', lake: 'Wyobraź sobie cichy brzeg, trzciny poruszane wiatrem i wodę, która nie ma Ci nic do powiedzenia. Usiądź na chwilę.', meadow: 'Wyobraź sobie ścieżkę w wysokiej trawie, kilka polnych kwiatów i miejsce na swobodne myśli. Nic do odhaczenia.', hills: 'Wyobraź sobie otwarte połoniny, delikatny wiatr w wysokich trawach i łagodne grzbiety ciągnące się po horyzont. Przestrzeń na oddech.' },
      resultDistance: minutes => `Twoja mała ucieczka: do ${minutes} minut od domu.`,
      announcement: (index, title) => `Powitanie ${index + 1} z ${scenes.length}. ${title}`
    }
  };

  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, String(value)); } catch { /* Storage is optional. */ } }
  };
  let language = storage.get('stillhet-language') === 'pl' ? 'pl' : 'en';
  let motionPaused = storage.get('stillhet-motion-paused') === 'true';
  const savedScene = storage.get('stillhet-welcome');
  const lastScene = savedScene === null ? -1 : Number(savedScene);
  let sceneIndex = Number.isInteger(lastScene) && lastScene >= -1 ? (lastScene + 1) % scenes.length : 0;
  const requestedScene = new URLSearchParams(window.location.search).get('scene');
  const requestedIndex = scenes.findIndex(scene => scene.id === requestedScene);
  if (requestedIndex >= 0) sceneIndex = requestedIndex;
  let transitionTimer;
  let breathingTimer;
  let breathStart = 0;
  const hero = document.querySelector('.hero');
  const sceneButtons = [...document.querySelectorAll('[data-scene]')];
  const motionButton = document.getElementById('motion-toggle');
  const breathingDialog = document.getElementById('breathing-dialog');

  function updateMotionControl() {
    root.classList.toggle('motion-paused', motionPaused);
    motionButton.setAttribute('aria-pressed', String(motionPaused));
    motionButton.setAttribute('aria-label', copy[language][motionPaused ? 'resumeMotion' : 'pauseMotion']);
    motionButton.textContent = motionPaused ? '▷' : 'Ⅱ';
  }

  function renderScene(index, announce = false) {
    sceneIndex = index;
    const scene = scenes[sceneIndex];
    const words = scene[language];
    document.getElementById('welcome-first').textContent = words.first;
    document.getElementById('welcome-second').textContent = words.second;
    document.getElementById('welcome-accent').textContent = words.accent;
    document.getElementById('welcome-description').textContent = words.description;
    const image = document.getElementById('welcome-image');
    if (image.getAttribute('src') !== scene.image) image.src = scene.image;
    image.alt = words.alt;
    hero.dataset.scene = scene.id;
    sceneButtons.forEach((button, buttonIndex) => {
      button.classList.toggle('is-active', buttonIndex === sceneIndex);
      button.setAttribute('aria-pressed', String(buttonIndex === sceneIndex));
      button.setAttribute('aria-label', copy[language].sceneNames[buttonIndex]);
    });
    if (announce) document.getElementById('scene-announcement').textContent = copy[language].announcement(index, `${words.first} ${words.second} ${words.accent}`);
    if (requestedIndex < 0) storage.set('stillhet-welcome', index);
  }

  function changeScene(index) {
    clearTimeout(transitionTimer);
    if (index === sceneIndex) { hero.classList.remove('is-changing'); return; }
    if (reducedMotion.matches || motionPaused) { renderScene(index, true); hero.classList.remove('is-changing'); return; }
    hero.classList.add('is-changing');
    transitionTimer = setTimeout(() => {
      renderScene(index, true);
      hero.classList.remove('is-changing');
    }, 210);
  }

  function renderResult() {
    const nature = document.querySelector('input[name="nature"]:checked').value;
    const minutes = document.querySelector('input[name="travel"]:checked').value;
    const scene = scenes.find(item => item.id === nature);
    const image = document.getElementById('result-image');
    image.src = scene.image;
    image.alt = scene[language].alt;
    document.getElementById('result-title').textContent = copy[language].resultTitles[nature];
    document.getElementById('result-description').textContent = copy[language].resultBodies[nature];
    document.getElementById('result-distance').textContent = copy[language].resultDistance(minutes);
  }

  function applyLanguage() {
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const text = copy[language][element.dataset.i18n];
      if (typeof text === 'string') element.textContent = text;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const text = copy[language][element.dataset.i18nAria];
      if (text) element.setAttribute('aria-label', text);
    });
    document.querySelector('.hero').setAttribute('aria-roledescription', copy[language].carouselDescription);
    const languageButton = document.getElementById('language-toggle');
    languageButton.textContent = language === 'en' ? 'PL' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Zmień język na polski' : 'Switch language to English');
    document.title = language === 'en' ? 'Stillhet — a little closer to quiet' : 'Stillhet — trochę bliżej spokoju';
    renderScene(sceneIndex);
    if (!document.getElementById('escape-result').hidden) renderResult();
    updateMotionControl();
    if (breathingDialog.open) tickBreathing();
  }

  sceneButtons.forEach(button => button.addEventListener('click', () => changeScene(Number(button.dataset.scene))));
  document.getElementById('next-scene').addEventListener('click', () => changeScene((sceneIndex + 1) % scenes.length));
  document.querySelector('.scene-controls').addEventListener('keydown', event => {
    if (!event.target.matches('[data-scene]') || !['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const current = Number(event.target.dataset.scene);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? scenes.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + scenes.length) % scenes.length;
    sceneButtons[index].focus();
    changeScene(index);
  });
  document.getElementById('language-toggle').addEventListener('click', () => {
    language = language === 'en' ? 'pl' : 'en';
    storage.set('stillhet-language', language);
    applyLanguage();
  });
  motionButton.addEventListener('click', () => {
    motionPaused = !motionPaused;
    storage.set('stillhet-motion-paused', motionPaused);
    updateMotionControl();
    if (breathingDialog.open) tickBreathing();
  });
  document.getElementById('find-escape').addEventListener('click', () => {
    renderResult();
    document.getElementById('escape-form').hidden = true;
    document.getElementById('escape-result').hidden = false;
    document.getElementById('escape-result').focus({ preventScroll: true });
  });
  document.getElementById('try-again').addEventListener('click', () => {
    document.getElementById('escape-result').hidden = true;
    document.getElementById('escape-form').hidden = false;
    document.querySelector('input[name="nature"]:checked').focus({ preventScroll: true });
  });

  function tickBreathing() {
    const phase = (Date.now() - breathStart) % 10000;
    document.getElementById('breathing-instruction').textContent = copy[language][reducedMotion.matches || motionPaused ? 'breatheOwnPace' : phase < 4000 ? 'breatheIn' : 'breatheOut'];
  }
  document.getElementById('breathe-button').addEventListener('click', () => {
    if (breathingDialog.open) return;
    breathStart = Date.now();
    breathingDialog.showModal();
    document.body.classList.add('dialog-open');
    tickBreathing();
    breathingTimer = setInterval(tickBreathing, 250);
  });
  document.getElementById('close-breathing').addEventListener('click', () => breathingDialog.close());
  breathingDialog.addEventListener('close', () => {
    clearInterval(breathingTimer);
    document.body.classList.remove('dialog-open');
  });
  breathingDialog.addEventListener('click', event => {
    if (event.target !== breathingDialog) return;
    const rect = breathingDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) breathingDialog.close();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && breathingDialog.open) breathingDialog.close();
  });

  function initializeLandscapeMotion() {
    const canvas = document.getElementById('landscape-motion');
    const landscape = document.getElementById('hero-landscape');
    const image = document.getElementById('welcome-image');
    const meadowLife = document.getElementById('meadow-life');
    const hillsLife = document.getElementById('hills-life');
    let gl;
    let program;
    let texture;
    let uniforms;
    let uploadedImage = '';
    const previewTextures = new Map();
    let frame = 0;
    let previousTime = 0;
    let lastDraw = 0;
    let elapsed = 0;
    let visible = true;
    let unavailable = false;

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        vec2 uv = a_position * 0.5 + 0.5;
        v_uv = vec2(uv.x, 1.0 - uv.y);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    const fragmentSource = `
      precision highp float;
      uniform sampler2D u_image;
      uniform vec2 u_imageSize;
      uniform vec2 u_cover;
      uniform float u_time;
      uniform float u_grass;
      varying vec2 v_uv;

      float grassTuft(vec2 p, float center, float radius, float tip, float base) {
        float sides = 1.0 - smoothstep(0.55, 1.0, abs(p.x - center) / radius);
        float top = smoothstep(tip - 0.018, tip + 0.018, p.y);
        // The roots stay put; bending gradually increases toward the tips.
        float bend = pow(clamp((base - p.y) / (base - tip), 0.0, 1.0), 1.35);
        return sides * top * bend;
      }

      float rippleHash(float seed) {
        return fract(sin(seed * 127.1 + 311.7) * 43758.5453);
      }

      float fishWave(float distanceFromCenter, float age, float lineWidth) {
        float radius = 2.0 + max(age, 0.0) * 13.0;
        float edge = distanceFromCenter - radius;
        float line = 1.0 - smoothstep(lineWidth * 0.35, lineWidth * 1.2, abs(edge));
        float fade = smoothstep(0.0, 0.35, age)
                   * (1.0 - smoothstep(2.0, 3.6, age));
        return line * fade;
      }

      float fishRise(vec2 p) {
        // A different delay and position in each window keep the rises irregular.
        float eventIndex = floor(u_time / 9.0);
        float delay = 1.2 + rippleHash(eventIndex + 2.0) * 3.2;
        float age = mod(u_time, 9.0) - delay;
        // Clear patches verified against the original lake illustration. Their
        // margins include the full ring radius, position jitter and moving strokes.
        float patch = floor(rippleHash(eventIndex + 13.0) * 6.0);
        vec2 origin;
        if (patch < 1.0) origin = vec2(840.0, 517.0);
        else if (patch < 2.0) origin = vec2(855.0, 532.0);
        else if (patch < 3.0) origin = vec2(1340.0, 523.0);
        else if (patch < 4.0) origin = vec2(1420.0, 529.0);
        else if (patch < 5.0) origin = vec2(1500.0, 517.0);
        else origin = vec2(1620.0, 523.0);
        vec2 jitter = vec2((rippleHash(eventIndex + 4.0) - 0.5) * 16.0,
                           (rippleHash(eventIndex + 8.0) - 0.5) * 4.0);
        vec2 center = (origin + jitter) / u_imageSize;
        vec2 delta = (p - center) * u_imageSize;
        // This low viewpoint needs very shallow ellipses, like the existing strokes.
        float flatten = mix(0.18, 0.23, clamp((center.y - 0.70) / 0.045, 0.0, 1.0));
        delta.y /= flatten;
        float distanceFromCenter = length(delta);
        vec2 normal = delta / max(distanceFromCenter, 0.001);
        vec2 gradient = vec2(normal.x, normal.y / flatten);
        float stretch = max(length(gradient), 1.0);
        // Keep the fine stroke legible at the near/far edges of the flattened wave.
        float irregularDistance = distanceFromCenter
                                + 0.45 * sin(normal.x * 5.0 + normal.y * 3.0 + eventIndex * 1.7);
        float wave = fishWave(irregularDistance, age, stretch * 0.9)
                   + 0.5 * fishWave(irregularDistance, age - 0.9, stretch * 0.9);
        // Soft, unequal front/back arcs blend with the lake's horizontal pencil marks.
        float arcs = smoothstep(0.16, 0.85, abs(normal.y))
                   * mix(0.55, 1.0, smoothstep(-0.8, 0.8, normal.y));
        float pencil = 0.78 + 0.22 * sin(p.x * 247.0 + sin(p.y * 419.0) + eventIndex);
        return wave * arcs * pencil;
      }

      void main() {
        // Match the original image's object-fit: cover and bottom alignment.
        vec2 offset = vec2((1.0 - u_cover.x) * 0.5, 1.0 - u_cover.y);
        vec2 p = v_uv * u_cover + offset;
        vec2 sampleAt = p;

        if (u_grass > 0.5) {
          // Small feathered patches follow the existing pencil tufts only.
          float grass = grassTuft(p, 0.052, 0.061, 0.650, 0.810);
          grass = max(grass, grassTuft(p, 0.183, 0.077, 0.785, 0.950));
          grass = max(grass, grassTuft(p, 0.328, 0.045, 0.765, 0.873));
          grass = max(grass, grassTuft(p, 0.470, 0.072, 0.788, 0.927));
          grass = max(grass, grassTuft(p, 0.631, 0.042, 0.865, 0.959));
          grass = max(grass, grassTuft(p, 0.870, 0.063, 0.915, 1.025));
          grass = max(grass, grassTuft(p, 0.041, 0.028, 0.567, 0.644));
          grass = max(grass, grassTuft(p, 0.124, 0.018, 0.642, 0.692));
          grass = max(grass, grassTuft(p, 0.180, 0.023, 0.662, 0.717));
          grass = max(grass, grassTuft(p, 0.282, 0.024, 0.701, 0.755));
          grass = max(grass, grassTuft(p, 0.394, 0.018, 0.857, 0.913));
          // Protect the long foreground ridge as well as all distant hills.
          grass *= smoothstep(0.540 + 0.470 * p.x, 0.575 + 0.470 * p.x, p.y);
          float gust = 0.76 + 0.24 * sin(u_time * 0.23 - p.x * 3.0);
          float breeze = sin(u_time * 0.64 - p.x * 4.8)
                       + 0.22 * sin(u_time * 1.09 - p.x * 8.0 + 0.7);
          sampleAt.x -= grass * gust * breeze * 7.0 / u_imageSize.x;
          sampleAt.y -= grass * gust * sin(u_time * 0.64 - p.x * 4.8 + 0.5)
                      * 0.55 / u_imageSize.y;
          gl_FragColor = vec4(texture2D(u_image, clamp(sampleAt, 0.0, 1.0)).rgb, 1.0);
          return;
        }

        // Wind is restricted to the birch canopy; it fades toward the trunk base.
        float crown = (1.0 - smoothstep(0.19, 0.245, p.x))
                    * (1.0 - smoothstep(0.34, 0.49, p.y));
        float anchor = pow(clamp(1.0 - p.y / 0.52, 0.0, 1.0), 1.4);
        float breeze = sin(u_time * 0.72) + 0.32 * sin(u_time * 1.37 + p.y * 9.0);
        sampleAt.x -= crown * anchor * breeze * 4.6 / u_imageSize.x;
        sampleAt.y -= crown * anchor * sin(u_time * 1.1 + p.x * 18.0) * 0.85 / u_imageSize.y;

        // Feather the lake mask inside the banks and keep the jetty still.
        float nearBank = smoothstep(0.59, 0.81, p.y);
        float leftBank = mix(0.15, 0.32, nearBank);
        float rightBank = mix(0.90, 0.76, nearBank);
        float water = smoothstep(0.565, 0.61, p.y)
                    * (1.0 - smoothstep(0.765, 0.825, p.y))
                    * smoothstep(leftBank, leftBank + 0.025, p.x)
                    * (1.0 - smoothstep(rightBank - 0.025, rightBank, p.x));
        float jettyWidth = mix(0.055, 0.13, smoothstep(0.65, 1.0, p.y));
        float jetty = smoothstep(0.64, 0.675, p.y)
                    * (1.0 - smoothstep(jettyWidth, jettyWidth + 0.015, abs(p.x - 0.505)));
        water *= 1.0 - jetty;
        // Broad, slow waves move the original horizontal strokes as a single surface.
        // Bounds of 7px horizontally and 6.8px vertically preserve ripple clearance.
        sampleAt.x += water * (sin(p.y * 14.0 + u_time * 0.38) * 5.5
                    + sin(p.x * 8.0 - u_time * 0.23) * 1.5) / u_imageSize.x;
        sampleAt.y += water * (sin(p.x * 12.0 - u_time * 0.48) * 5.2
                    + sin(p.x * 23.0 + u_time * 0.31) * 1.6) / u_imageSize.y;

        float rise = 0.0;
        if (water > 0.0) rise = fishRise(p);
        vec4 color = texture2D(u_image, clamp(sampleAt, 0.0, 1.0));
        float shimmer = water * (sin(p.x * 70.0 + p.y * 160.0 - u_time * 0.5) + 1.0) * 0.001;
        gl_FragColor = vec4(clamp(color.rgb + shimmer - rise * water * vec3(0.065, 0.067, 0.058), 0.0, 1.0), 1.0);
      }
    `;

    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const message = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(message);
      }
      return shader;
    }

    function prepare() {
      if (gl) return;
      gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false });
      if (!gl) throw new Error('WebGL is unavailable.');
      const vertex = compile(gl.VERTEX_SHADER, vertexSource);
      const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
      program = gl.createProgram();
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
      gl.useProgram(program);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      texture = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      uniforms = Object.fromEntries(['image', 'imageSize', 'cover', 'time', 'grass'].map(name => [name, gl.getUniformLocation(program, `u_${name}`)]));
      gl.uniform1i(uniforms.image, 0);
    }

    function resize() {
      if (!gl || !image.naturalWidth) return;
      const rect = landscape.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(rect.width * ratio));
      const height = Math.max(1, Math.round(rect.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      gl.uniform2f(uniforms.cover, width / (image.naturalWidth * scale), height / (image.naturalHeight * scale));
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      lastDraw = 0;
      canvas.hidden = true;
      image.classList.remove('has-landscape-motion');
    }

    function draw(now) {
      frame = requestAnimationFrame(draw);
      if (now - lastDraw < 1000 / 24) return;
      if (previousTime) elapsed += Math.min((now - previousTime) / 1000, 0.1);
      previousTime = now;
      lastDraw = now;
      gl.uniform1f(uniforms.time, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      // Replace the static image only after a complete frame is available.
      canvas.hidden = false;
      image.classList.add('has-landscape-motion');
    }

    function update() {
      const sceneId = hero.dataset.scene;
      const motionAllowed = visible && !document.hidden
        && !root.classList.contains('motion-paused') && !reducedMotion.matches;
      meadowLife.classList.toggle('is-running', sceneId === 'meadow' && motionAllowed);
      hillsLife.classList.toggle('is-running', sceneId === 'hills' && motionAllowed);
      const enabled = ['lake', 'hills'].includes(sceneId) && motionAllowed;
      if (!enabled || unavailable || !image.complete || !image.naturalWidth) { stop(); return; }
      try {
        // File previews embed an origin-clean copy; HTTP pages use the original image.
        const embeddedTexture = document.querySelector(`[data-motion-preview-texture="${sceneId}"]`);
        if (embeddedTexture && !previewTextures.has(sceneId)) {
          const previewTexture = new Image();
          previewTextures.set(sceneId, previewTexture);
          previewTexture.addEventListener('load', update);
          previewTexture.addEventListener('error', () => { unavailable = true; stop(); });
          previewTexture.src = `data:image/jpeg;base64,${embeddedTexture.textContent.trim()}`;
        }
        const source = previewTextures.get(sceneId) || image;
        if (!source.complete || !source.naturalWidth) { stop(); return; }
        prepare();
        const sourceKey = source.currentSrc || source.src;
        if (uploadedImage !== sourceKey) {
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
          gl.uniform2f(uniforms.imageSize, source.naturalWidth, source.naturalHeight);
          uploadedImage = sourceKey;
        }
        gl.uniform1f(uniforms.grass, sceneId === 'hills' ? 1 : 0);
        resize();
        if (!frame) frame = requestAnimationFrame(draw);
      } catch {
        // The untouched illustration is the fallback, including file-URL restrictions.
        unavailable = true;
        stop();
      }
    }

    image.addEventListener('load', update);
    image.addEventListener('error', stop);
    canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); unavailable = true; stop(); });
    new MutationObserver(update).observe(hero, { attributes: true, attributeFilter: ['data-scene'] });
    new MutationObserver(update).observe(root, { attributes: true, attributeFilter: ['class'] });
    reducedMotion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    window.addEventListener('pagehide', stop);
    window.addEventListener('pageshow', update);
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(landscape);
    else window.addEventListener('resize', update);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        update();
      }, { threshold: 0 }).observe(landscape);
    }
    update();
  }

  applyLanguage();
  root.classList.add('js');
  initializeLandscapeMotion();
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('is-waiting'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('is-waiting'); observer.observe(element); });
  }
})();
