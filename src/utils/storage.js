import { useEffect, useState } from "react";

export const getItem = (key, defaultValue) => () =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;

export const setItem = (key, value) => () =>
  localStorage.setItem(key, JSON.stringify(value));

export const useLocalStorage = (key, defaultValue) => {
  const [ value, setValue ] = useState(getItem(key, defaultValue));

  // eslint-disable-next-line
  useEffect(setItem(key, value), [ key, value ]);

  return [ value, setValue ];
}
