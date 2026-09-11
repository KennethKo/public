// copy the below minified js into a bookmarklet. 
// When run, adds a nightly 🔴 badge to the current tab title that clears on focus.
javascript:(function(){if(window.routineTrackerActive){if(typeof window.triggerRoutineBadge==='user'){window.triggerRoutineBadge();}return;}window.routineTrackerActive=true;let b=false;const s=3,e=4;function a(){if(!document.title.startsWith('🔴')){document.title='🔴'+document.title;b=true;}}function r(){if(document.title.startsWith('🔴')){document.title=document.title.replace('🔴','');b=false;}}window.triggerRoutineBadge=a;a();document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){r();}});setInterval(()=>{const c=new Date().getHours();if(c>=s&&c<e){if(!b){a();}}},900000);const t=document.querySelector('title');if(t){const o=new MutationObserver(()=>{if(b){o.disconnect();a();o.observe(t,{childList:true});}});o.observe(t,{childList:true});}})();

// unminified:
(function() {
  // Check if tracker is already running in this tab's memory
  if (window.routineTrackerActive) {
    // If running, just forcefully stamp the badge and exit
    if (typeof window.triggerRoutineBadge === 'function') {
      window.triggerRoutineBadge();
    }
    return;
  }

  // Set the global window flag to prevent duplicate setups
  window.routineTrackerActive = true;

  let badgeStamped = false;
  const startHour = 3;
  const endHour = 4;

  function a() {
    if (!document.title.startsWith('🔴')) {
      document.title = '🔴' + document.title;
      badgeStamped = true;
    }
  }
  
  // Expose function globally so subsequent clicks can access it
  window.triggerRoutineBadge = a;

  function r() {
    if (document.title.startsWith('🔴')) {
      document.title = document.title.replace('🔴', '');
      badgeStamped = false;
    }
  }

  a();

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      r();
    }
  });

  setInterval(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= startHour && currentHour < endHour) {
      if (!badgeStamped) {
        a();
      }
    }
  }, 900000);

  const titleEl = document.querySelector('title');
  if (titleEl) {
    const obs = new MutationObserver(() => {
      if (badgeStamped) {
        // Disconnect temporarily to avoid an infinite mutation loop
        obs.disconnect();
        a();
        obs.observe(titleEl, { childList: true });
      }
    });
    obs.observe(titleEl, { childList: true });
  }
})();
