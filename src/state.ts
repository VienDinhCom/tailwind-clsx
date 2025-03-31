import { useState, useCallback } from 'react';

type Setter<T> = T | ((prevState: T) => T);

function isFunction<T>(value: Setter<T>): value is (prevState: T) => T {
  return typeof value === 'function';
}

export function useSafeState<T>(initialState: T) {
  const [state, setState] = useState<T>(Object.freeze(initialState));

  const setSafeState = useCallback(
    (update: Setter<T>) => {
      setState((prevState) => {
        const draft = structuredClone(prevState);

        const newState = isFunction(update) ? update(draft) : update;

        return Object.freeze(newState);
      });
    },
    [state]
  );

  return [state, setSafeState] as const;
}
