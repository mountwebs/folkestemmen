import { createContext } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PageContext = createContext([]);

function PageProvider({ children }) {
  const [page, setPage] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/pages/test')
      .then((res) => {
        setPage(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <PageContext.Provider value={page}>{children}</PageContext.Provider>;
}

export default PageContext;

export { PageProvider };
