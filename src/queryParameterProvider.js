import { createContext } from 'react';
import React, { useState, useEffect } from 'react';

const QueryParameterContext = createContext([]);

const qpOptions = {
  sted1: 'Gaterommet St. Olavs plass',
  sted2: 'Nordlig utgang av Korsatunellen',
  sted4: 'Sørlig inngang til Korsatunellen',
  sted3: 'Korsatunellen',
  sted5: 'Harald Torsviks plass',
};

function QueryParameterProvider({ children }) {
  const [tag, setTag] = useState(null);
  const [english, setEnglsih] = useState(false);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tagParam = queryParams.get('sted');
    setTag(tagParam);

    const englishParam = queryParams.get('english') === 'true' ? true : false;
    setEnglsih(englishParam);

    if (tagParam in qpOptions) {
      setPlace(qpOptions[tagParam]);
    }
  }, []);
  return (
    <QueryParameterContext.Provider value={{ tag, english, place }}>
      {children}
    </QueryParameterContext.Provider>
  );
}

export default QueryParameterContext;

export { QueryParameterProvider };
