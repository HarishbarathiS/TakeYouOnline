import { useEffect, useState } from "react";

// A ticking IST clock in HH:mm (24h). Renders "00:00" until mounted so the
// server and first client render agree (no hydration mismatch).
export function useClock(): string {
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const formatTime = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });

    setTime(formatTime());
    const timer = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}
