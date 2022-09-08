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

export const crud = ([ data, setData ], type) => ({
  data: data.map((d) => type(d)),
  setData,
  read: (id) => data.find((d) => d.id === id),
  readBy: (key, value) => data.find((d) => d[key] === value),
  create: (d) => setData((_data) => _data.concat(type(d))),
  update: (d) => setData((_data) => _data.map((_d) => _d.id === d.id ? d : _d)),
  delete: (id) => setData((_data) => _data.filter((_d) => _d.id !== id))
});
