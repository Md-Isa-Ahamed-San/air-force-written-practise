"use client";

import { useSyncExternalStore } from "react";

// Shared interval ticker for exam timers
let now = Date.now();
const listeners = new Set<() => void>();
let timerInterval: ReturnType<typeof setInterval> | null = null;

function subscribe(callback: () => void) {
  listeners.add(callback);
  if (!timerInterval && typeof window !== "undefined") {
    now = Date.now();
    timerInterval = setInterval(() => {
      now = Date.now();
      listeners.forEach((listener) => listener());
    }, 1000);
  }
  return () => {
    listeners.delete(callback);
    if (listeners.size === 0 && timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };
}

function getSnapshot() {
  return now;
}

function getServerSnapshot() {
  return 0;
}

/**
 * Custom hook that updates with the current timestamp every second.
 * Uses useSyncExternalStore (built-in React 18/19 primitive) to subscribe
 * to an external interval without using useEffect.
 */
export function useCurrentTimestamp(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Custom hook returning elapsed seconds since startTime.
 * Updates precisely every second.
 */
export function useElapsedSeconds(startTime: number): number {
  const currentTimestamp = useCurrentTimestamp();
  if (!startTime || currentTimestamp === 0) return 0;
  return Math.max(0, Math.floor((currentTimestamp - startTime) / 1000));
}
