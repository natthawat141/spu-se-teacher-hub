"use client";

import { useEffect, useState } from "react";
import { AppLoadingScreen } from "@/components/ui/AppLoadingScreen";

const MIN_DISPLAY_MS = 1800;
const FADE_OUT_MS = 320;

export function InitialLoadSplash() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    let exitTimer: number | undefined;
    let hideTimer: number | undefined;

    const beginExit = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      exitTimer = window.setTimeout(() => {
        setExiting(true);
        hideTimer = window.setTimeout(() => setVisible(false), FADE_OUT_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      beginExit();
    } else {
      window.addEventListener("load", beginExit, { once: true });
    }

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return <AppLoadingScreen exiting={exiting} />;
}
