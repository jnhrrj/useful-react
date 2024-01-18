import { useState, useRef, useEffect } from "react";

const useStateRef = <T extends unknown>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(initialState);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return [state, setState, ref] as const;
};
