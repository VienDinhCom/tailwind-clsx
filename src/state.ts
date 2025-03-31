import { useState, useCallback } from 'react';

type Setter<T> = (draft: T) => void | T;

export function useSafeState<T>(initialState: T) {
  const [state, setState] = useState<T>(Object.freeze(initialState));

  const setSafeState = useCallback(
    (setter: Setter<T>) => {
      if (typeof setter === 'function') {
        const draft = structuredClone(state);
        const result = setter(draft);

        setState(Object.freeze(result === undefined ? draft : result));
      } else {
        setState(Object.freeze(setter));
      }
    },
    [state]
  );

  return [state, setSafeState];
}
