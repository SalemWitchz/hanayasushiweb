"use client";

import { useEffect } from "react";

export function ScrollTopOnLoad() {
  useEffect(() => {
    function resetScroll() {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }

    resetScroll();
    // Safari/Chrome mobile restore scroll position on bfcache navigations
    // (app switch, swipe-back, pull-to-refresh) via the pageshow event.
    window.addEventListener("pageshow", resetScroll);
    return () => window.removeEventListener("pageshow", resetScroll);
  }, []);

  return null;
}
