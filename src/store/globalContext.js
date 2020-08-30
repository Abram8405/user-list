import React, { createContext, useContext } from 'react';
import { useGitHubApi } from '../services/dataFetching';

export const GlobalContext = createContext();
export const useStore = () => useContext(GlobalContext);

export const URL = 'https://api.github.com/users';

export const Provider = ({ children }) => {
  const [{ isError, isLoading, data }, doFetch, dispatch] = useGitHubApi(
    [],
    URL
  );

  const deleteUser = (id) => {
    return { type: 'DELETE_USER', id };
  };
  const updateUser = (newUser) => {
    return { type: 'UPDATE_USER', newUser };
  };

  return (
    <GlobalContext.Provider
      value={{
        isError,
        isLoading,
        allUsers: data,
        doFetch,
        deleteUser,
        updateUser,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
