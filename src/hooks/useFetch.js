import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

  const [state, setstate] = useState({ data: null, loading: true, error: null });

  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    setstate({ loading: true, error: null, data: null });
    fetch(url)
      .then((response) =>
        response.json()
          .then((data) => {
            if (isMounted.current) {
              setstate({ loading: false, error: null, data });
            } else {
              console.log('Se previnio el setState');
            }
          })
      )
  }, [url]);
  return state;
}
