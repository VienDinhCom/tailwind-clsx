import { useState, useCallback } from 'react';

export function useSafeState<T>(initialState: T) {
  const [state, setState] = useState<T>(structuredClone(initialState));

  const setStateWithClone = useCallback((updater: T | ((prevState: T) => T)) => {
    if (typeof updater === 'function') {
      setState((prevState) => {
        const updaterFn = updater as (prevState: T) => T;

        const nextState = updaterFn(structuredClone(prevState));

        return structuredClone(nextState);
      });
    } else {
      setState(structuredClone(updater));
    }
  }, []);

  return [Object.freeze(state), setStateWithClone];
}
