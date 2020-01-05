import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(res => res.json)
      .then(json => setState({ data: json, loading: false }))
      .then(json => console.log(json));
  }, [url, setState]);

  return state;
};
