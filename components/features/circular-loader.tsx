import { useEffect, useState } from 'react';

export function CircularLoader() {
  const DURATION = 5000;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const next = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(next);
      if (next >= 100) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);
  const secondsLeft = Math.ceil(((100 - progress) / 100) * (DURATION / 1000));

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-between bg-black rounded-xl gap-2 py-5">
      <div></div>
      <div className="relative flex items-center justify-center">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r={radius} fill="none" stroke="#333" strokeWidth="4" />
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="#86efac"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 36 36)"
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
        <span className="absolute text-white font-medium">{progress}%</span>
      </div>
      <p className="text-white text-xs font-semibold">{secondsLeft <= 1 ? '1 second left' : `${secondsLeft} seconds left`}</p>
    </div>
  );
}
