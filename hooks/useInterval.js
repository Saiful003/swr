import React, { useEffect, useRef } from "react";
export function useInterval(cb, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  const tick = () => {
    savedCallback.current();
  };

  useEffect(() => {
    if (delay !== null) {
      const timer = setInterval(tick, delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
}
