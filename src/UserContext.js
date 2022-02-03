import React, { useState, useEffect } from 'react';

//https://stackoverflow.com/questions/62504525/persistence-with-localstorage-with-usestate-and-usecontext-react-hooks

var initialState = {
  userId: null,
  likes: [],
};

function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Error at setting local storage');
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    console.log('Error at getting local storage');
    return initialValue;
  }
}

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(() => getLocalStorage('user', initialState));

  useEffect(() => {
    setLocalStorage('user', user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        userId: null,
        likes: [],
        setUserId: (userId) => setUser({ ...user, userId }),
        setLikes: (likes) => setUser({ ...user, likes }),
        setPosts: (posts) => setUser({ ...user, posts }),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };
