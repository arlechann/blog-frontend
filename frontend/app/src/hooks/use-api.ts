import { useEffect, useState } from "preact/hooks";

export const useAPI = <T>(url: string, reqInit: RequestInit, stateInit: T): T => {
  const [result, setResult] = useState<T>(stateInit);

  useEffect(() => {
    fetch(url, reqInit)
      .then(res => {
        if (!res.ok) { throw new Error(res.statusText); }
        return res.json();
      })
      .then(json => {
        console.debug(json);
        setResult(json);
      })
      .catch(err => console.error(err));
  }, []);

  return result;
};