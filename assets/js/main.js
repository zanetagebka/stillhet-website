(() => {
  'use strict';

  const root = document.documentElement;
  const scenes = JSON.parse(document.getElementById('welcome-data').textContent);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const copy = {
    en: {
      skip: 'Skip to content', navLabel: 'Main navigation', navIdea: 'The app', navHow: 'How it works', navStory: 'The story', navCta: 'See the idea',
      heroEyebrow: 'LESS SCROLLING. MORE WANDERING.', heroCta: 'Explore the app idea', heroCtaNote: 'an illustrated preview', scroll: 'A little further down',
      heroDescription: 'Stillhet is a mobile app in development to help you find peaceful places in nature nearby. Choose the nature you like and your maximum distance in kilometres. Get one suggested area for a walk or a quiet break.',
      carouselDescription: 'carousel', sceneControls: 'Choose a welcome scene', nextScene: 'Next welcome scene', sceneNames: ['Forest welcome', 'Lake welcome', 'Meadow welcome', 'Hills welcome', 'Valley welcome'],
      marginNote: 'a gentler kind\nof getting away', ideaEyebrow: 'WHAT IS STILLHET?', ideaTitle: 'Work is done.\nWhere can you go to unwind?',
      ideaBody: 'You’ve spent the day at a screen. You’d like a quiet walk in the woods or a little time by the water, but you don’t know where to go — and don’t feel like researching it.',
      ideaBody2: 'That’s the moment Stillhet is being built for. Tell it what kind of nature you want and how far from home you’re willing to go. The aim is one considered area to explore, with practical details to help you decide and head outside.', meaning: 'stillhet / Norwegian for quiet, stillness', storyLink: 'Why I started Stillhet',
      howEyebrow: 'HOW THE APP IS MEANT TO WORK.', howTitle: 'Outside, in three small steps.', howIntro: 'For example: you want a forest walk, within 25 km of home after work.',
      step1Title: 'Choose nature and distance.', step1Body: 'Forest, water, meadows or hills? You’ll choose what appeals to you and how far from home you want to go.', step1Note: 'what you need, close to home',
      step2Title: 'Get one suggested area.', step2Body: 'Stillhet will suggest an area that fits, with the distance and practical details for your visit.', step2Note: 'less choosing, more going',
      step3Title: 'Put your phone away.', step3Body: 'You’ve got your little escape. Go slowly, look around, and leave the place just as peaceful as you found it.', step3Note: 'we’ll be here when you’re back',
      previewEyebrow: 'TRY AN ILLUSTRATED PREVIEW.', previewTitle: 'A little glimpse\nof the idea.', previewBody: 'Choose where you’d like to be and set a distance to see the idea in action. This sketch shows an imagined landscape; the future app is intended to suggest real areas nearby.', previewAnnotation: 'start with what you feel like →',
      development: 'Still in development. The app isn’t available to download yet.', paperLabel: 'A PAGE FROM OUR SKETCHBOOK', formTitle: 'Where would you like to unwind?', natureLegend: 'Choose the kind of nature you need',
      forest: 'Forest', lake: 'Water', meadow: 'Meadows', hills: 'Hills', distanceLegend: 'How far from home?', previewCta: 'Show an example',
      previewDisclaimer: 'An illustrated preview, not a real place recommendation.', tryAgain: 'Let your mind wander somewhere else',
      storyEyebrow: 'THE STORY BEHIND STILLHET.', storyTitle: 'It started with silence.\nFar from home.', storyQuestion: 'Could a little of that peace\nbe closer to home?',
      memoryCaption: 'Fragments of memories from Sweden.', memoryKeyboardHint: 'Swedish memories. Use the arrow keys to change the illustration.', previousMemory: 'Previous memory', nextMemory: 'Next memory',
      memoryCampsiteAlt: 'Pencil illustration of two tents below a rocky mountain wall with patches of snow in Swedish Lapland.',
      memoryHutsAlt: 'Pencil illustration of small mountain huts, a stream and a crossed trail marker below distant snowy peaks.',
      memoryValleyAlt: 'Pencil illustration of a lake beneath a broad flat-topped mountain and a lower slope across the valley.',
      memoryPeaksAlt: 'Pencil illustration of pointed snowy peaks and a low ridge above rocky tundra, under a wide cloudy sky.',
      memoryMistAlt: 'Pencil illustration of a rounded snow-dusted summit partly hidden by mist, with a long patch of snow on the slope.',
      memoryPassAlt: 'Pencil illustration of snow-streaked slopes framing a rounded mountain summit beneath low clouds.',
      memoryCabinAlt: 'Pencil illustration of a small wooden cabin partly hidden among mossy trunks, conifer branches and leafy twigs.',
      memoryGatewayAlt: 'Portrait pencil illustration of the wooden Kungsleden gateway in Abisko, with a gravel path, birches and a mountain behind it.',
      memoryWaterfallAlt: 'Portrait pencil illustration of a waterfall in a misty rocky gorge, with a small footbridge and a stream flowing towards the foreground.',
      memoryAnnouncement: (index, total) => `Memory ${index + 1} of ${total}.`,
      storyBody1: 'I spend my working days writing software. But in Swedish Lapland, walking Kungsleden from Abisko with a tent, a sleeping bag and food on my back, I found something I keep looking for: silence. No cities, no signal. Just open landscape, above the Arctic Circle.',
      storyBody2: 'Coming home from Lapland, I wondered whether finding a little peace really needed a journey of thousands of kilometres. What about a place you could reach just after work?',
      storyBody3: 'That question became Stillhet. I’m exploring a small app that could help us find those places closer to home. It’s still taking shape, one idea and one experiment at a time.', storySignature: 'the person behind Stillhet',
      promiseEyebrow: 'QUIET PLACES SHOULD STAY THAT WAY.', promiseTitle: 'A little care.\nFor you. And for the place.', promiseBody: 'Finding a peaceful place shouldn’t take its peace away. We’re building Stillhet around that simple thought.',
      promisePlaces: 'The places we store will only be used to suggest areas to explore. Users will never be able to browse our database or search for individual spots in a list or directory.',
      promise1: 'Areas to explore, not secret spots to expose.', promise2: 'Thoughtful suggestions that help spread the footsteps.', promise3: 'No social feed. No public visit history. Room for privacy.', promiseNote: 'take a breath. leave only light footsteps.',
      closingEyebrow: 'SOMETHING QUIET IS TAKING ROOT.', closingTitle: 'A little less online.\nA little more alive.', closingBody: 'Stillhet is still a seedling. Until it’s ready, there’s probably a patch of sky, a tree, or a quiet path waiting just outside.',
      breatheCta: 'Take a breath with us', closingNote: 'you don’t need an app for that.', footerLine: 'Made for a quieter kind of outside.', footerStatus: 'A little work in progress', footerContact: 'Contact · LinkedIn', footerContactLabel: 'Contact Żaneta on LinkedIn',
      breathingEyebrow: 'JUST THIS MOMENT.', breathingTitle: 'Nowhere else to be.', breathingCaption: 'A gentle pause. Follow the circle, at your own pace.', closeBreathing: 'Close breathing pause', breatheIn: 'Breathe in…', breatheOut: 'Breathe out…', breatheOwnPace: 'Breathe at your own pace.', pauseMotion: 'Pause animations', resumeMotion: 'Resume animations',
      musicTitle: 'A little soundtrack', musicHelp: 'Hover, focus or tap to choose a track.', closePlaylist: 'Close playlist', musicOn: 'Turn music on', musicMute: 'Mute music', musicOff: 'Music is off. Choose a track or turn the sound on.', musicUnavailable: 'This track couldn’t play. Choose another or try again.', musicPaused: 'Music is paused while this page is in the background.', musicBlocked: 'Press the speaker to start the music.',
      playTrack: title => `Play ${title}`, musicStarting: title => `Starting: ${title}`, musicPlaying: title => `Now playing: ${title}`,
      resultTitles: { forest: 'A quiet woodland.', lake: 'Some still water.', meadow: 'A little open sky.', hills: 'A softer horizon.' },
      resultBodies: { forest: 'Imagine the scent of pine, a little shade, and a path with no hurry in it. A place to listen to something other than your phone.', lake: 'Imagine a quiet bank, reeds moving in the breeze, and water with absolutely nothing to tell you. Sit a while.', meadow: 'Imagine a small path through long grass, a few wildflowers, and room for your thoughts to wander. Nothing to tick off.', hills: 'Imagine open mountain grasslands, a soft breeze in the long grass, and gentle ridges stretching into the distance. Room to breathe.' },
      resultDistance: kilometres => `Your daydream: within ${kilometres} km of home.`,
      announcement: (index, title) => `Welcome ${index + 1} of ${scenes.length}. ${title}`
    },
    pl: {
      skip: 'Przejdź do treści', navLabel: 'Nawigacja główna', navIdea: 'Aplikacja', navHow: 'Jak to działa', navStory: 'Historia', navCta: 'Zobacz pomysł',
      heroEyebrow: 'MNIEJ PRZEWIJANIA. WIĘCEJ WĘDROWANIA.', heroCta: 'Poznaj pomysł na aplikację', heroCtaNote: 'ilustrowany podgląd', scroll: 'Jeszcze kawałek dalej',
      heroDescription: 'Stillhet to powstająca aplikacja mobilna, która pomoże Ci znaleźć spokojne miejsca w naturze, blisko domu. Wybierz rodzaj natury i maksymalną odległość w kilometrach. Otrzymaj jedną propozycję obszaru na spacer lub chwilę odpoczynku.',
      carouselDescription: 'karuzela', sceneControls: 'Wybierz ekran powitalny', nextScene: 'Następny ekran powitalny', sceneNames: ['Powitanie w lesie', 'Powitanie nad wodą', 'Powitanie na łące', 'Powitanie na wzgórzach', 'Powitanie w dolinie'],
      marginNote: 'łagodniejszy sposób\nna małą ucieczkę', ideaEyebrow: 'CZYM JEST STILLHET?', ideaTitle: 'Koniec pracy.\nDokąd pojechać, żeby odpocząć?',
      ideaBody: 'Cały dzień przed ekranem. Masz ochotę na spokojny spacer po lesie albo chwilę nad wodą, ale nie wiesz dokąd pojechać — i nie masz już siły szukać.',
      ideaBody2: 'Właśnie z myślą o takiej chwili powstaje Stillhet. Wybierzesz rodzaj natury i odległość od domu. Celem jest jedna przemyślana propozycja obszaru, z praktycznymi informacjami, które pomogą Ci podjąć decyzję i wyjść z domu.', meaning: 'stillhet / po norwesku: cisza, wyciszenie', storyLink: 'Dlaczego zaczęłam tworzyć Stillhet',
      howEyebrow: 'TAK MA DZIAŁAĆ APLIKACJA.', howTitle: 'Na zewnątrz, w trzech małych krokach.', howIntro: 'Na przykład: po pracy chcesz pójść do lasu, najwyżej 25 km od domu.',
      step1Title: 'Wybierz naturę i odległość.', step1Body: 'Las, woda, łąki czy wzgórza? Wybierzesz to, na co masz ochotę, i jak daleko od domu chcesz się wybrać.', step1Note: 'to, czego potrzebujesz, blisko domu',
      step2Title: 'Otrzymaj propozycję obszaru.', step2Body: 'Stillhet zaproponuje pasujący obszar, poda odległość i praktyczne informacje przydatne podczas wizyty.', step2Note: 'mniej wybierania, więcej bycia',
      step3Title: 'Odłóż telefon.', step3Body: 'Spokojne miejsce już czeka. Zwolnij, rozejrzyj się i zadbaj, by zachowało swój spokój.', step3Note: 'będziemy tu, kiedy wrócisz',
      previewEyebrow: 'WYPRÓBUJ ILUSTROWANY PODGLĄD.', previewTitle: 'Mały podgląd\npomysłu.', previewBody: 'Wybierz gdzie chciałbyś się znaleźć i podaj odległość, żeby zobaczyć, na czym polega pomysł. Ten szkic pokazuje wyobrażony krajobraz; przyszła aplikacja ma proponować prawdziwe obszary w pobliżu.', previewAnnotation: 'zacznij od tego, na co masz ochotę →',
      development: 'Aplikacja wciąż powstaje. Nie jest jeszcze dostępna do pobrania.', paperLabel: 'KARTKA Z NASZEGO SZKICOWNIKA', formTitle: 'Gdzie chcesz odpocząć?', natureLegend: 'Wybierz rodzaj natury, którego potrzebujesz',
      forest: 'Las', lake: 'Woda', meadow: 'Łąki', hills: 'Wzgórza', distanceLegend: 'Jak daleko od domu?', previewCta: 'Pokaż przykład',
      previewDisclaimer: 'Ilustrowany podgląd, a nie rekomendacja prawdziwego miejsca.', tryAgain: 'Pozwól myślom powędrować gdzie indziej',
      storyEyebrow: 'SKĄD WZIĘŁO SIĘ STILLHET.', storyTitle: 'Zaczęło się od ciszy.\nDaleko od domu.', storyQuestion: 'Czy trochę tego spokoju\nmożna znaleźć bliżej domu?',
      memoryCaption: 'Urywki wspomnień ze Szwecji.', memoryKeyboardHint: 'Wspomnienia ze Szwecji. Użyj klawiszy strzałek, aby zmienić ilustrację.', previousMemory: 'Poprzednie wspomnienie', nextMemory: 'Następne wspomnienie',
      memoryCampsiteAlt: 'Ołówkowa ilustracja dwóch namiotów pod skalistą ścianą górską z płatami śniegu w szwedzkiej Laponii.',
      memoryHutsAlt: 'Ołówkowa ilustracja małych górskich chat, strumienia i znacznika szlaku w kształcie krzyża na tle odległych ośnieżonych szczytów.',
      memoryValleyAlt: 'Ołówkowa ilustracja jeziora pod szeroką górą o płaskim wierzchołku i niższym zboczem po drugiej stronie doliny.',
      memoryPeaksAlt: 'Ołówkowa ilustracja spiczastych ośnieżonych szczytów i niskiego grzbietu nad kamienistą tundrą, pod rozległym pochmurnym niebem.',
      memoryMistAlt: 'Ołówkowa ilustracja zaokrąglonego, przyprószonego śniegiem szczytu częściowo ukrytego we mgle, z długim płatem śniegu na zboczu.',
      memoryPassAlt: 'Ołówkowa ilustracja zboczy z płatami śniegu otaczających zaokrąglony szczyt pod niskimi chmurami.',
      memoryCabinAlt: 'Ołówkowa ilustracja małej drewnianej chaty częściowo ukrytej wśród omszałych pni, iglastych gałęzi i liściastych gałązek.',
      memoryGatewayAlt: 'Pionowa ilustracja ołówkowa drewnianej bramy szlaku Kungsleden w Abisko, ze żwirową ścieżką, brzozami i górą w tle.',
      memoryWaterfallAlt: 'Pionowa ilustracja ołówkowa wodospadu w zamglonym skalistym wąwozie, z małym mostkiem i strumieniem płynącym ku pierwszemu planowi.',
      memoryAnnouncement: (index, total) => `Wspomnienie ${index + 1} z ${total}.`,
      storyBody1: 'Na co dzień piszę oprogramowanie. Ale w szwedzkiej Laponii, wędrując szlakiem Kungsleden z Abisko, z namiotem, śpiworem i jedzeniem w plecaku, znalazłam coś, czego wciąż szukam: ciszę. Bez miast, bez zasięgu. Tylko otwarta przestrzeń, za kołem podbiegunowym.',
      storyBody2: 'Po powrocie z Laponii zaczęłam się zastanawiać, czy znalezienie chwili wytchnienia naprawdę wymaga podróży tysiące kilometrów od domu. A gdyby było takie miejsce, do którego można pojechać po prostu po pracy?',
      storyBody3: 'Z tego pytania narodziło się Stillhet. Pracuję nad pomysłem na małą aplikację, która mogłaby pomóc nam znaleźć takie miejsca bliżej domu. Wciąż nabiera kształtu, z każdym pomysłem i eksperymentem.', storySignature: 'osoba, od której zaczęło się Stillhet',
      promiseEyebrow: 'SPOKOJNE MIEJSCA POWINNY TAKIE POZOSTAĆ.', promiseTitle: 'Trochę troski.\nO Ciebie. I o to miejsce.', promiseBody: 'Znalezienie spokojnego miejsca nie powinno odbierać mu spokoju. Wokół tej prostej myśli budujemy Stillhet.',
      promisePlaces: 'Zapisane przez nas miejsca posłużą wyłącznie do proponowania obszarów do odkrywania. Użytkownicy nigdy nie będą mogli przeglądać naszej bazy ani wyszukiwać poszczególnych miejsc na liście czy w katalogu.',
      promise1: 'Obszary do odkrywania, bez ujawniania sekretnych zakątków.', promise2: 'Przemyślane propozycje, które pomagają rozpraszać ruch.', promise3: 'Bez feedu i publicznej historii wizyt. Z miejscem na prywatność.', promiseNote: 'weź oddech. zostaw tylko lekkie ślady.',
      closingEyebrow: 'COŚ SPOKOJNEGO ZAPUSZCZA KORZENIE.', closingTitle: 'Trochę mniej online.\nTrochę więcej życia.', closingBody: 'Stillhet dopiero kiełkuje. Zanim będzie gotowe, gdzieś tuż obok czeka pewnie kawałek nieba, drzewo albo cicha ścieżka.',
      breatheCta: 'Weź z nami oddech', closingNote: 'do tego nie potrzebujesz aplikacji.', footerLine: 'Z myślą o spokojniejszym byciu w naturze.', footerStatus: 'Mały projekt w drodze', footerContact: 'Kontakt · LinkedIn', footerContactLabel: 'Skontaktuj się z Żanetą na LinkedIn',
      breathingEyebrow: 'TYLKO TA CHWILA.', breathingTitle: 'Nie musisz być nigdzie indziej.', breathingCaption: 'Spokojna chwila. Podążaj za kołem we własnym tempie.', closeBreathing: 'Zamknij chwilę oddechu', breatheIn: 'Wdech…', breatheOut: 'Wydech…', breatheOwnPace: 'Oddychaj we własnym tempie.', pauseMotion: 'Wstrzymaj animacje', resumeMotion: 'Wznów animacje',
      musicTitle: 'Trochę muzyki', musicHelp: 'Najedź, ustaw fokus lub dotknij, aby wybrać utwór.', closePlaylist: 'Zamknij playlistę', musicOn: 'Włącz muzykę', musicMute: 'Wycisz muzykę', musicOff: 'Muzyka jest wyłączona. Wybierz utwór lub włącz dźwięk.', musicUnavailable: 'Nie udało się odtworzyć utworu. Wybierz inny lub spróbuj ponownie.', musicPaused: 'Muzyka jest wstrzymana, gdy strona działa w tle.', musicBlocked: 'Naciśnij ikonę głośnika, aby włączyć muzykę.',
      playTrack: title => `Odtwórz: ${title}`, musicStarting: title => `Włączanie: ${title}`, musicPlaying: title => `Teraz gra: ${title}`,
      resultTitles: { forest: 'Spokojny kawałek lasu.', lake: 'Trochę spokojnej wody.', meadow: 'Kawałek otwartego nieba.', hills: 'Łagodniejszy horyzont.' },
      resultBodies: { forest: 'Wyobraź sobie zapach sosen, trochę cienia i ścieżkę, która nigdzie się nie spieszy. Miejsce, w którym słychać coś innego niż telefon.', lake: 'Wyobraź sobie cichy brzeg, trzciny poruszane wiatrem i wodę, która nie ma Ci nic do powiedzenia. Usiądź na chwilę.', meadow: 'Wyobraź sobie ścieżkę w wysokiej trawie, kilka polnych kwiatów i miejsce na swobodne myśli. Nic do odhaczenia.', hills: 'Wyobraź sobie otwarte połoniny, delikatny wiatr w wysokich trawach i łagodne grzbiety ciągnące się po horyzont. Przestrzeń na oddech.' },
      resultDistance: kilometres => `Twoja mała ucieczka: do ${kilometres} km od domu.`,
      announcement: (index, title) => `Powitanie ${index + 1} z ${scenes.length}. ${title}`
    }
  };

  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, String(value)); } catch { /* Storage is optional. */ } }
  };
  let language = storage.get('stillhet-language') === 'pl' ? 'pl' : 'en';
  let motionPreference = storage.get('stillhet-motion-paused');
  let refreshMusicLabels = () => {};
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
  const memorySlides = [...document.querySelectorAll('[data-story-memory]')];
  let memoryIndex = 0;

  function isMotionPaused() {
    if (motionPreference === 'true') return true;
    if (motionPreference === 'false') return false;
    return reducedMotion.matches;
  }

  function updateMotionControl() {
    const paused = isMotionPaused();
    const label = copy[language][paused ? 'resumeMotion' : 'pauseMotion'];
    root.classList.toggle('motion-paused', paused);
    root.classList.toggle('motion-enabled', motionPreference === 'false');
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', label);
    motionButton.title = label;
    motionButton.textContent = paused ? '▷' : 'Ⅱ';
  }

  function initializeMusicPlayer() {
    const player = document.getElementById('music-player');
    const audio = document.getElementById('ambient-music');
    const tracks = JSON.parse(document.getElementById('music-data').textContent);
    if (!tracks.length) return;
    const toggle = document.getElementById('music-toggle');
    const icon = document.getElementById('music-speaker-icon');
    const panel = document.getElementById('music-playlist');
    const list = document.getElementById('music-tracks');
    const status = document.getElementById('music-status');
    let selected = 0;
    let requested = storage.get('stillhet-music-muted') !== 'true';
    let failed = false;
    let autoplayBlocked = false;
    let pending = false;
    let request = 0;
    let pageActive = true;
    let ignoreFocusOpen = false;
    const buttons = tracks.map((track, index) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'music-track';
      const number = document.createElement('span');
      number.className = 'music-track-number';
      number.textContent = String(index + 1).padStart(2, '0');
      number.setAttribute('aria-hidden', 'true');
      const title = document.createElement('span');
      title.textContent = track.title;
      button.append(number, title);
      button.addEventListener('click', () => selectTrack(index));
      item.append(button);
      list.append(item);
      return button;
    });
    audio.volume = .3;
    audio.muted = true;
    audio.src = tracks[0].src;

    function render() {
      const words = copy[language];
      const label = words[requested ? 'musicMute' : 'musicOn'];
      audio.muted = !shouldPlay();
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('aria-pressed', String(requested));
      toggle.setAttribute('aria-busy', String(pending));
      toggle.title = label;
      icon.setAttribute('href', requested ? '#icon-speaker' : '#icon-speaker-muted');
      buttons.forEach((button, index) => {
        button.setAttribute('aria-pressed', String(index === selected));
        button.setAttribute('aria-label', words.playTrack(tracks[index].title));
        button.classList.toggle('is-selected', index === selected);
      });
      status.textContent = failed ? words.musicUnavailable : autoplayBlocked ? words.musicBlocked : !requested ? words.musicOff
        : pending ? words.musicStarting(tracks[selected].title)
        : audio.paused ? words.musicPaused : words.musicPlaying(tracks[selected].title);
    }

    function shouldPlay() {
      return requested && !document.hidden && pageActive;
    }

    function fail(blocked = false) {
      requested = false;
      failed = !blocked;
      autoplayBlocked = blocked;
      pending = false;
      request++;
      audio.muted = true;
      audio.pause();
      render();
    }

    async function sync() {
      const currentRequest = ++request;
      if (!shouldPlay()) {
        pending = false;
        audio.pause();
        render();
        return;
      }
      pending = true;
      render();
      try {
        await audio.play();
        // Ignore obsolete failures; a late success must still honor mute or suspension.
        if (!shouldPlay()) audio.pause();
      } catch (error) {
        if (currentRequest === request && shouldPlay()) fail(error.name === 'NotAllowedError');
      } finally {
        if (currentRequest === request) {
          pending = false;
          render();
        }
      }
    }

    function selectTrack(index) {
      request++;
      pending = true;
      audio.pause();
      selected = (index + tracks.length) % tracks.length;
      audio.src = tracks[selected].src;
      requested = true;
      failed = false;
      autoplayBlocked = false;
      storage.set('stillhet-music-muted', 'false');
      void sync();
    }

    function setOpen(open, restoreFocus = false) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      if (restoreFocus) {
        ignoreFocusOpen = true;
        toggle.focus({ preventScroll: true });
        ignoreFocusOpen = false;
      }
    }

    toggle.addEventListener('click', () => {
      requested = !requested;
      failed = false;
      autoplayBlocked = false;
      storage.set('stillhet-music-muted', String(!requested));
      setOpen(true);
      render();
      void sync();
    });
    player.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') setOpen(true); });
    player.addEventListener('pointerleave', event => {
      if (event.pointerType === 'touch') return;
      const active = document.activeElement;
      if (player.contains(active) && active.matches(':focus-visible')) return;
      setOpen(false);
    });
    player.addEventListener('focusin', () => { if (!ignoreFocusOpen) setOpen(true); });
    player.addEventListener('focusout', event => { if (!player.contains(event.relatedTarget)) setOpen(false); });
    player.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false, true);
      } else if (event.key === 'ArrowDown' && event.target === toggle) {
        event.preventDefault();
        setOpen(true);
        buttons[selected].focus();
      }
    });
    list.addEventListener('keydown', event => {
      const index = buttons.indexOf(document.activeElement);
      if (index < 0 || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
        : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
    });
    document.getElementById('close-music-playlist').addEventListener('click', () => setOpen(false, true));
    document.addEventListener('pointerdown', event => { if (!player.contains(event.target)) setOpen(false); });
    audio.addEventListener('ended', () => { if (requested && audio.ended) selectTrack(selected + 1); });
    audio.addEventListener('error', () => { if (requested && audio.error) fail(); });
    audio.addEventListener('pause', () => {
      // A system media pause affects music only, never the landscape motion.
      if (!audio.paused || pending || !shouldPlay()) return;
      requested = false;
      request++;
      render();
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) setOpen(false);
      void sync();
    });
    window.addEventListener('pagehide', () => { pageActive = false; void sync(); });
    window.addEventListener('pageshow', () => { pageActive = true; void sync(); });
    refreshMusicLabels = render;
    render();
    player.hidden = false;
    void sync();
  }

  function renderScene(index, announce = false) {
    sceneIndex = index;
    const scene = scenes[sceneIndex];
    const words = scene[language];
    document.getElementById('welcome-first').textContent = words.first;
    document.getElementById('welcome-second').textContent = words.second;
    document.getElementById('welcome-accent').textContent = words.accent;
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
    if (isMotionPaused()) { renderScene(index, true); hero.classList.remove('is-changing'); return; }
    hero.classList.add('is-changing');
    transitionTimer = setTimeout(() => {
      renderScene(index, true);
      hero.classList.remove('is-changing');
    }, 210);
  }

  function renderResult() {
    const nature = document.querySelector('input[name="nature"]:checked').value;
    const kilometres = document.querySelector('input[name="distance"]:checked').value;
    const scene = scenes.find(item => item.id === nature);
    const image = document.getElementById('result-image');
    image.src = scene.image;
    image.alt = scene[language].alt;
    document.getElementById('result-title').textContent = copy[language].resultTitles[nature];
    document.getElementById('result-description').textContent = copy[language].resultBodies[nature];
    document.getElementById('result-distance').textContent = copy[language].resultDistance(kilometres);
  }

  function renderStoryMemory(announce = false) {
    if (!memorySlides.length) return;
    memorySlides.forEach((slide, index) => { slide.hidden = index !== memoryIndex; });
    document.getElementById('story-gallery-controls').hidden = memorySlides.length < 2;
    document.getElementById('story-memory-count').textContent = `${String(memoryIndex + 1).padStart(2, '0')} / ${String(memorySlides.length).padStart(2, '0')}`;
    const announcement = document.getElementById('story-memory-announcement');
    if (announce || announcement.textContent) announcement.textContent = `${copy[language].memoryAnnouncement(memoryIndex, memorySlides.length)} ${memorySlides[memoryIndex].alt}`;
  }

  function initializeStoryMemories() {
    if (memorySlides.length < 2) return;
    const frame = document.getElementById('story-memory-frame');
    const controls = document.getElementById('story-gallery-controls');
    function select(index) {
      memoryIndex = (index + memorySlides.length) % memorySlides.length;
      renderStoryMemory(true);
    }
    document.getElementById('previous-memory').addEventListener('click', () => select(memoryIndex - 1));
    document.getElementById('next-memory').addEventListener('click', () => select(memoryIndex + 1));
    for (const element of [frame, controls]) element.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      select(event.key === 'Home' ? 0 : event.key === 'End' ? memorySlides.length - 1 : memoryIndex + (event.key === 'ArrowRight' ? 1 : -1));
    });
    let gesture;
    frame.addEventListener('pointerdown', event => {
      if (event.isPrimary && event.button === 0) gesture = { x: event.clientX, y: event.clientY };
    });
    frame.addEventListener('pointerup', event => {
      if (!gesture || !event.isPrimary) return;
      const dx = event.clientX - gesture.x;
      const dy = event.clientY - gesture.y;
      gesture = null;
      if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.25) select(memoryIndex + (dx < 0 ? 1 : -1));
    });
    for (const event of ['pointercancel', 'pointerleave']) frame.addEventListener(event, () => { gesture = null; });
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
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const text = copy[language][element.dataset.i18nAlt];
      if (text) element.alt = text;
    });
    document.querySelectorAll('[data-i18n-roledescription]').forEach(element => {
      const text = copy[language][element.dataset.i18nRoledescription];
      if (text) element.setAttribute('aria-roledescription', text);
    });
    const languageButton = document.getElementById('language-toggle');
    languageButton.textContent = language === 'en' ? 'PL' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Zmień język na polski' : 'Switch language to English');
    document.title = language === 'en' ? 'Stillhet — a little closer to quiet' : 'Stillhet — trochę bliżej spokoju';
    renderScene(sceneIndex);
    renderStoryMemory();
    if (!document.getElementById('escape-result').hidden) renderResult();
    updateMotionControl();
    refreshMusicLabels();
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
    motionPreference = String(!isMotionPaused());
    storage.set('stillhet-motion-paused', motionPreference);
    updateMotionControl();
    if (breathingDialog.open) tickBreathing();
  });
  reducedMotion.addEventListener('change', () => {
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
    document.getElementById('breathing-instruction').textContent = copy[language][isMotionPaused() ? 'breatheOwnPace' : phase < 4000 ? 'breatheIn' : 'breatheOut'];
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
    const forestLife = document.getElementById('forest-life');
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

    function alignReindeerPause() {
      const bounds = landscape.getBoundingClientRect();
      const heroBounds = hero.getBoundingClientRect();
      const scale = Math.max(bounds.width / 2172, bounds.height / 724);
      const left = Math.max(bounds.left, heroBounds.left);
      const right = Math.min(bounds.right, heroBounds.right);
      if (!scale || right <= left) return;
      // Account for both the panorama's cover crop and mobile overflow clipping.
      const coverLeft = (bounds.width - 2172 * scale) / 2;
      const target = left + (right - left) * 2 / 3;
      const imageX = (target - bounds.left - coverLeft) / scale;
      forestLife.style.setProperty('--reindeer-stop-x', `${imageX}px`);
    }

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
      if (sceneId === 'forest') alignReindeerPause();
      const motionAllowed = visible && !document.hidden
        && !isMotionPaused();
      forestLife.classList.toggle('is-running', sceneId === 'forest' && motionAllowed);
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
    canvas.addEventListener('webglcontextrestored', () => {
      gl = null;
      program = null;
      texture = null;
      uniforms = null;
      uploadedImage = '';
      unavailable = false;
      update();
    });
    new MutationObserver(update).observe(hero, { attributes: true, attributeFilter: ['data-scene'] });
    new MutationObserver(update).observe(root, { attributes: true, attributeFilter: ['class'] });
    reducedMotion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    window.addEventListener('pagehide', () => {
      for (const layer of [forestLife, meadowLife, hillsLife]) layer.classList.remove('is-running');
      stop();
    });
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

  function initializeClosingTreeGrowth() {
    const tree = document.querySelector('.closing-tree');
    if (!tree || !('IntersectionObserver' in window)) return;
    let visible = false;
    let pageActive = true;

    function update() {
      const motionAllowed = !isMotionPaused();
      // Prepare a seedling before it comes into view. The animation plays once.
      if (motionAllowed) tree.classList.add('is-growing');
      tree.classList.toggle('is-running', motionAllowed && visible && pageActive && !document.hidden);
    }

    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .65;
      update();
    }, { threshold: .65 }).observe(tree);
    new MutationObserver(update).observe(root, { attributes: true, attributeFilter: ['class'] });
    reducedMotion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    window.addEventListener('pagehide', () => { pageActive = false; update(); });
    window.addEventListener('pageshow', () => { pageActive = true; update(); });
    update();
  }

  applyLanguage();
  root.classList.add('js');
  initializeMusicPlayer();
  initializeLandscapeMotion();
  initializeClosingTreeGrowth();
  initializeStoryMemories();
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('is-waiting'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('is-waiting'); observer.observe(element); });
  }
})();
