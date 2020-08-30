import React, { useReducer, useEffect } from 'react';
import { useStore, URL } from '../store/globalContext';

import { User } from './user';
import { useGitHubApi } from '../services/dataFetching';
import { dataFetchReducer } from '../store/reducer';

export const Users = () => {
  const { isError, isLoading, allUsers } = useStore();

  return (
    <div className="users">
      {isError && (
        <div className="error-message">
          <span> Something went wrong</span>
        </div>
      )}
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        allUsers.map((item) => <User key={item.id} user={item} />)
      )}
    </div>
  );
};
