import React from 'react';
import { useStore } from '../store/globalContext';
import { Link } from 'react-router-dom';

export const User = ({ user }) => {
  const { deleteUser, dispatch } = useStore();

  return (
    <div className="user">
      <div className="avatar">
        <img src={user.avatar_url} alt="avatar" />
      </div>
      <div className="learn-more">
        <Link to={`/userDetail/${user.login}`}>Learn More</Link>
      </div>
      <span
        onClick={() => dispatch(deleteUser(user.id))}
        className="delete-user"
      >
        &#10005;
      </span>
    </div>
  );
};
