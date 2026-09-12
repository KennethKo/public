// copy the below minified js into a bookmarklet. 
// When run, adds a nightly 🔴 badge to the current tab title that clears on focus.
javascript:(function(){if(window.routineTrackerActive){if(typeof window.triggerRoutineBadge==='function'){window.triggerRoutineBadge()}return}window.routineTrackerActive=true;let e=false;const t=3,n=4;function o(){if(!document.title.startsWith("🔴")){document.title="🔴"+document.title;e=true}}window.triggerRoutineBadge=o;function r(){if(document.title.startsWith("🔴")){document.title=document.title.replace("🔴","");e=false}}o();document.addEventListener("visibilitychange",(()=>{if(document.visibilityState==="visible"){r()}}));setInterval((()=>{const c=(new Date).getHours();if(c>=t&&c<n){if(!e){o()}}}),900000);const c=document.querySelector("title");if(c){const t=new MutationObserver((()=>{if(e){t.disconnect();o();t.observe(c,{childList:true})}}));t.observe(c,{childList:true})}})();

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
      badgeStamped = false;
      document.title = document.title.replace('🔴', '');
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
